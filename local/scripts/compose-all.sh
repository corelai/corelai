#!/bin/bash

sudo docker compose down && \

sudo ./runner.sh primedb && \
sudo ./runner.sh primebff && \
sudo ./runner.sh primeapp && \
sudo ./runner.sh nginx && \
sudo docker container ps -a