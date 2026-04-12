# Kubernetes

We aren't managing clusters here; we are deploying them.
Kubernetes was initially by Google, but later they open-sourced it, and then it was managed by CNCF (Cloud Native Computing Foundation).

The Certified **Kubernetes** Application Developer (**CKAD**) exam certifies that candidates can design, build, and deploy cloud-native applications for **Kubernetes**.
It is used to manage clusters.
**Clusters** = a group of multiple containers.

> **⚠️ Correction:** A cluster is a group of **nodes (machines/servers)**, not containers. Containers run inside **pods**, which run on **nodes**. A cluster = multiple nodes working together.

It connects every incoming request (container) into a pod.
Here we create a config file which tells k8s how to create a pod, like we did in Docker, which tells Docker how to create an image.

2 important terms:
1. Control Plane
2. Worker Nodes

**Control Plane** has 4 components:
i. API Server
ii. ETCD - all monitoring
iii. Scheduler
iv. Controller Manager

Worker Node = Machine
Cluster = Multiple nodes = Multiple devices/machines connected together
Pod = Wrapper over container that scales; it can be more than 1, but good if single.
Docker = Used to containerize applications.
Why containerize? = To avoid breaking changes on device transfer.
Kubernetes (k8s) = To automate management of multiple servers 🛳
Kubectl = Command-line tool for Kubernetes
etcd = Stores all logs

> **⚠️ Correction:** etcd does **NOT store logs**. It's a **distributed key-value store** that holds **cluster state, configuration, and metadata**. It's the "source of truth" for the entire Kubernetes cluster. Logs are typically handled by tools like Fluentd, Elasticsearch, or Prometheus.

Pod to pod = Communication bridge
