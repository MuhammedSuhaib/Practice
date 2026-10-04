# Kubernetes

We aren't managing clusters here; we are deploying them.

Kubernetes was initially by Google, but later they open-sourced it, and then it was managed by CNCF (Cloud Native Computing Foundation).

The Certified **Kubernetes** Application Developer (**CKAD**) exam certifies that candidates can design, build, and deploy cloud-native applications for **Kubernetes**.

It is used to manage clusters.

**Cluster** = a group of multiple nodes (machines/servers).

It connects every incoming request into a pod.

Here we create a config file which tells k8s how to create a pod, like we did in Docker, which tells Docker how to create an image.

## 2 important terms

1. Control Plane
2. Worker Nodes

### Control Plane

It has 4 components:

1. API Server
2. etcd - stores cluster state
3. Scheduler
4. Controller Manager

### Worker Nodes

- **Worker Node** = Machine
- **Pod** = Wrapper over container that scales; it can be more than 1, but good if single

## Key terms

- **Cluster** = Multiple nodes = Multiple devices/machines connected together
- **Docker** = Used to containerize applications
- **Why containerize?** = To avoid breaking changes on device transfer
- **Kubernetes (k8s)** = To automate management of multiple servers 🛳
- **kubectl** = Command-line tool for Kubernetes
- **etcd** = Distributed key-value store for cluster state, configuration, and metadata
- **Pod to pod** = Communication bridge
