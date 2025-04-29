#!/bin/bash

cd ../../ && \
sudo docker build -t corelai-prime-bff-db-local -f ./local/docker/DockerfilePrimeBffDbLocal . && \
cd ./local/scripts



#--no-cache --progress=plain