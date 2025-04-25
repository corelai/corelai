#!/bin/bash

cd ../../ && \
sudo docker build -t corelai-prime-app-local -f ./local/docker/DockerfilePrimeAppLocal . && \
cd ./local/scripts



#--no-cache --progress=plain