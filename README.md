# Amine Alami | Radouane Garoiaz 

Amine Alami | Radouane Garoiaz devops project.

## part 1

construction manuelle de l'image docker.

```bash
 docker build -t projectdocker .
```
```bash
 docker run projectdocker:latest
```
you can find the image on docker hub at : docker hub : dudu49/dockerproject

## part 2
 Construction de l'image dans une CI

Ckeck azure-webapps-node.yml on workflow

## part 3
docker-compose

```bash
docker compose up -d
```

## Part 4 et 5
to deploy vm with terraform ==> open terminal ==> (inside linux directory)

```bash
terraform init
```

```bash
terraform apply
```
to install docker with ansible ==>

```bash
ansible-playbook install-docker.yml
```

## VM deployed with terraform

![Screenshot_3](https://user-images.githubusercontent.com/39490675/229461579-e3dc2017-8a7a-4c1b-84b1-253d2754b916.png)
