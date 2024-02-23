---
sidebar_position: 6
description: Update your DV cluster with the latest Charon release
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a DV

It is highly recommended to upgrade your DV stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks.

To do this, follow these steps:

### Navigate to the node directory

<Tabs groupId="group-solo">
  <TabItem value="group" label="Group cluster" default>
    <pre>
      <code>
        cd charon-distributed-validator-node
      </code>
    </pre>
  </TabItem>
  
  <TabItem value="solo" label="Solo cluster">
    <pre>
      <code>
        cd charon-distributed-validator-cluster
      </code>
    </pre>
  </TabItem>
</Tabs>

### Pull latest changes to the repo
```
git pull
```

### Create (or recreate) your DV stack
```
docker compose up -d --build
```
:::warning
If you run more than one node in a DV Cluster, please take caution upgrading them simultaneously. Particularly if you are updating or changing the validator client used or recreating disks. It is recommended to update nodes on a sequential basis to minimse liveness and safety risks. 
:::

### Conflicts

:::info
You may get a `git conflict` error similar to this:
:::
```markdown
error: Your local changes to the following files would be overwritten by merge:
prometheus/prometheus.yml
...
Please commit your changes or stash them before you merge.
```
This is probably because you have made some changes to some of the files, for example to the `prometheus/prometheus.yml` file.

To resolve this error, you can either:

- Stash and reapply changes if you want to keep your custom changes:
    ```
    git stash          # Stash your local changes
    git pull           # Pull the latest changes
    git stash apply    # Reapply your changes from the stash
    ```
    After reapplying your changes, manually resolve any conflicts that may arise between your changes and the pulled changes using a text editor or Git's conflict resolution tools.

- Override changes and recreate configuration if you don't need to preserve your local changes and want to discard them entirely:
    ```
    git reset --hard    # Discard all local changes and override with the pulled changes
    docker-compose up -d --build    # Recreate your DV stack
    ```
    After overriding the changes, you will need to recreate your DV stack using the updated files.
    By following one of these approaches, you should be able to handle Git conflicts when pulling the latest changes to your repository, either preserving your changes or overriding them as per your requirements.