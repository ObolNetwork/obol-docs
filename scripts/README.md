# Grafana Dashboard and Alert Management Script

This Python script facilitates the export and import of Grafana dashboards and the import of Alertmanager configurations into a Grafana instance. It's designed to work with Grafana v8 and above.

## Prerequisites

- Python 3.x installed on your machine.
- `requests` library installed. You can install it using pip:
  ```sh
  pip install requests
  ```
- Access to a Grafana instance (v8 and above) with API access enabled.
- A Grafana API key with permissions to view and create dashboards and manage Alertmanager configurations.

## Configuration

Before running the script, you need to set up a few configurations:

1. **Grafana URL and API Key**: Update the `grafana_url` and `grafana_api_key` variables in the script with your Grafana instance URL and the API key.

2. **Export and Import Paths**: Set the `export_path` and `import_path` variables to the desired locations on your filesystem where the dashboards should be exported to or imported from.

3. **Alertmanager Configuration File**: Ensure you have an Alertmanager configuration file in YAML format ready for import. Update the `alert_config_path` variable with the path to this file.

## Running the Script

To run the script, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where the script is located:
   ```sh
   cd path/to/script_directory
   ```

3. Run the script using Python:
   ```sh
   python script.py
   ```

### What the Script Does

- **Export Dashboards**: Fetches all dashboards from the specified Grafana instance and saves them as JSON files in the directory specified by `export_path`.

- **Import Dashboards**: Reads dashboard JSON files from the directory specified by `import_path` and imports them into the specified Grafana instance.

- **Import Alertmanager Configuration**: Imports an Alertmanager configuration from a YAML file into the specified Grafana instance.

## Notes

- Ensure the Grafana API key provided has the necessary permissions to perform the actions required by the script.
- The script assumes Grafana v8 and above for compatibility with the Alertmanager configuration import feature.
- Adjust file paths and configurations according to your operating system and environment.

## Troubleshooting

- **API Key Permissions**: If you encounter permissions errors, ensure your Grafana API key has the correct roles assigned.
- **File Paths**: Ensure file paths are correct and accessible by the script. This is a common issue when running the script across different operating systems.