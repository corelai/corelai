#!/bin/bash

cd ../../ && \
sudo docker build -t corelai-prime-bff-db-flyway-local -f ./local/docker/DockerfilePrimeBffDbFlywayLocal . && \
cd ./local/scripts



#--no-cache --progress=plain