#!/bin/bash

cd ../../ && \
sudo docker build -t corelai-nginx-local -f ./local/docker/DockerfileNginxLocal . && \
cd ./local/scripts