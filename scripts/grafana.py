import os
import json
import logging
import requests
import urllib.parse
from dotenv import load_dotenv

load_dotenv()
grafana_url = os.getenv("GRAFANA_URL")
grafana_api_key = os.getenv("GRAFANA_API_KEY")

export_path = "./dashboards"
import_path = "./dashboards"
alert_config_path = "./alertmanager_config.yml"

def export_dashboards_from_grafana(grafana_url, grafana_api_key, export_path):
    headers = {"Authorization": "Bearer " + grafana_api_key}    
    folder_api_endpoint = "/api/folders"

    try:
        response = requests.get(grafana_url + folder_api_endpoint, headers=headers)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        logging.error(f"Error getting Grafana folders: {str(e)}")
        exit()

    folders = json.loads(response.text)

    for folder in folders:
        folder_name = folder['title'].replace("/", "_")
        folder_id = folder['id']
        folder_path = "./" + folder_name

        dashboard_api_endpoint = "/api/search?folderIds=" + str(folder_id)
        response = requests.get(grafana_url + dashboard_api_endpoint, headers=headers)
        dashboards = json.loads(response.text)

        if not os.path.exists(folder_path):
            os.makedirs(folder_path)

        for dashboard in dashboards:
            dashboard_id = dashboard['id']
            dashboard_name = dashboard['title'].replace("/", "_")
            dashboard_api_endpoint = "/api/dashboards/uid/" + str(dashboard['uid'])

            response = requests.get(grafana_url + dashboard_api_endpoint, headers=headers)
            dashboard_data = json.loads(response.text)
            dashboard_data.pop('meta', None)

            dashboard_file_path = os.path.join(folder_path, dashboard_name + ".json")

            try:
                with open(dashboard_file_path, "w") as f:
                    f.write(json.dumps(dashboard_data, indent=4))
            except Exception as e:
                print(f"Error exporting dashboard {dashboard_name} in folder {folder_name}: {e}")

    print("Dashboard export complete!")


def import_dashboards_to_grafana(grafana_url, grafana_api_key, folder_path):
    headers = {"Authorization": "Bearer " + grafana_api_key}
    
    for folder_name in os.listdir(import_path):
        folder_path = os.path.join(import_path, folder_name)
        
        if not os.path.isdir(folder_path):
            continue

        folder_api_endpoint = "/api/folders"
        folder_payload = {"title": folder_name}
        response = requests.post(grafana_url + folder_api_endpoint, headers=headers, json=folder_payload)

        folder_id = json.loads(response.text)['id']
        folder_uid = json.loads(response.text)['uid']

        print(f"Created folder {folder_name} with ID {folder_id} and UID {folder_uid}")

        for filename in os.listdir(folder_path):
            dashboard_path = os.path.join(folder_path, filename)

            if not dashboard_path.endswith(".json"):
                continue

            with open(dashboard_path, "r") as f:
                dashboard_data = json.load(f)

            dashboard_data = {
                "dashboard": dashboard_data['dashboard'],
                "folderId": 0,
                "folderUid": folder_uid,
                "message": "Imported from JSON",
                "overwrite": True
            }

            dashboard_data['dashboard']['folderId'] = folder_id
            dashboard_data['dashboard']['folderTitle'] = folder_name

            encoded_dashboard_name = urllib.parse.quote(filename[:-5])

            dashboard_api_endpoint = "{grafana_url}/api/dashboards/db"
            response = requests.post(dashboard_api_endpoint, headers=headers, json=dashboard_data)

            if response.status_code == 200:
                print(f"Dashboard {filename} imported successfully!")
            else:
                print(f"Error importing dashboard {filename}: {response.text}")

    print("Dashboard import complete!")


def import_exported_alerts(grafana_url, grafana_api_key, alert_config_path):
    """
    Args:
    - grafana_url: URL of the Grafana instance.
    - grafana_api_key: API key for authentication.
    - alert_config_path: Path to the Alertmanager configuration file (YAML format).
    """

    headers = {"Authorization": "Bearer " + grafana_api_key, "Content-Type": "application/yaml"}
    alertmanager_api_endpoint = "/api/alertmanager/grafana/config/api/v1/alerts"
    
    try:
        with open(alert_config_path, 'r') as file:
            alert_config = file.read()
        
        response = requests.post(grafana_url + alertmanager_api_endpoint, headers=headers, data=alert_config)
        
        if response.status_code == 200:
            print("Alertmanager configuration imported successfully!")
        else:
            print(f"Failed to import Alertmanager configuration: {response.text}")
    
    except Exception as e:
        print(f"Error importing Alertmanager configuration: {e}")


export_dashboards_from_grafana(grafana_url, grafana_api_key, export_path)
import_dashboards_to_grafana(grafana_url, grafana_api_key, import_path)
import_exported_alerts(grafana_url, grafana_api_key, alert_config_path)