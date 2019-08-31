https://www.youtube.com/watch?v=fxm8cadCqbs&t=618s

sudo docker build -t doom-fire:beta1.0 .
sudo docker image ls
sudo docker run -d -p 5000:5000 doom-fire:beta1.0

http://www.ricardomartins.com.br/docker-tutorial-mao-na-massa/

docker run --name nginx -v .:/usr/share/nginx/html:ro -d nginx


`docker build -t flask-hello:v2.0 .`

`docker image ls`

output:
```shell
REPOSITORY                       TAG                 IMAGE ID            CREATED             SIZE
flask-hello                      v2.0                09c3d0310bd9        7 seconds ago       188MB
```

`docker run -d -p 5000:5000 flask-hello:v2.0`

---------------
Steps from https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app

`export PROJECT_ID=[dataflow-test-11]`

`docker build -t gcr.io/${PROJECT_ID}/flask-hello:v2.0 .`

`docker push gcr.io/${PROJECT_ID}/flask-hello:v2.0`

`kubectl create deployment flask-cluster --image=gcr.io/${PROJECT_ID}/flask-hello:v2.0`

gcloud config set project $PROJECT_ID
gcloud config set compute/zone us-central1-a

gcloud container clusters create flask-cluster --num-nodes=2

kubectl expose deployment flask-cluster --type=LoadBalancer --port 80 --target-port 5000

---
sudo docker kill $(sudo docker ps -aq)

sudo docker system prune

sudo docker build --rm -t doom-image:1 .

sudo docker run --name doom-fire -d -p 8080:80 doom-image:1

---
windows:
docker rm -f $(docker ps -aq)
docker rmi -f $(docker image ls -aq)
docker ps -a && docker image ls -a

output:
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE

docker build --rm -t doom-image:1 .
docker run --rm --name doom-fire -d -p 80:80 doom-image:1
docker ps -a && docker image ls -a

output:
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
fb3c651a1332        doom-image:1        "nginx -g 'daemon of…"   44 seconds ago      Up 43 seconds       0.0.0.0:8080->80/tcp   doom-fire
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
doom-image          1                   41eb75a03ef7        7 minutes ago       126MB
nginx               1.17                5a3221f0137b        2 weeks ago         126MB

To get in on docker container:
docker exec -it fb bash
