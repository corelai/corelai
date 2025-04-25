#!/bin/bash

cd ../../ && \
sudo docker build -t corelai-prime-bff-local -f ./local/docker/DockerfilePrimeBffLocal . && \
cd ./local/scripts



#--no-cache --progress=plain