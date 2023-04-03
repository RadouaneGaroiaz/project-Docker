Amine Alami | Radouane Garoiaz devops project
Partie 1 - construction manuelle de l'image
> docker build -t projectdocker .
> docker run projectdocker:latest
you can find the image on docker hub at :
> docker hub : dudu49/dockerproject

Part 2 - Construction de l'image dans une CI
Ckeck azure-webapps-node.yml on workflow

Part 3 - docker-compose
> run docker compose up -d

Part 4 et 5 

to deploy vm with terraform ==> open terminal ==> terraform init ==> terraform apply (inside linux directory)

to install docker with ansible ==> ansible-playbook install-docker.yml

VM deployed with terraform
![Screenshot_3](https://user-images.githubusercontent.com/39490675/229449185-979efd1b-d481-4b43-b364-38a0a780f7b5.png)
