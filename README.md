# Doom Fire code and Deploy on GKE form GCP with Docker

---
## Windows local

##### Clean up all containers and images
```shell
docker rm -f $(docker ps -aq)
docker rmi -f $(docker image ls -aq)
```

##### Double check
```shell
docker ps -a && docker image ls -a
```

##### Build new image from Dockerfile and run local
```shell
docker build --rm -t doom-image:2 .
docker run --rm --name doom-fire -d -p 8080:80 doom-image:2
docker ps -a && docker image ls -a
```

##### Double check
```shell
docker ps -a && docker image ls -a
curl localhost
```

##### To get inside of the docker container:
```shell
docker exec -it fb bash
```
---
## GCP

##### Build container
```shell
export PROJECT_ID=dataflow-test-11
docker build --rm -t gcr.io/${PROJECT_ID}/doom-image:2 .
gcloud auth configure-docker
docker push gcr.io/${PROJECT_ID}/doom-image:2
```

##### Create container cluster
```shell
gcloud config set project $PROJECT_ID
gcloud config set compute/zone us-central1-a

gcloud container clusters create doom-cluster --num-nodes=1

gcloud compute instances list

kubectl create deployment doom-fire --image=gcr.io/${PROJECT_ID}/doom-image:2
kubectl get pods

kubectl expose deployment doom-fire --type=LoadBalancer --port 80 --target-port 80

kubectl get service
```

##### Acknowledgment
https://www.youtube.com/watch?v=fxm8cadCqbs&t=618s
https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app
