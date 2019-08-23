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
