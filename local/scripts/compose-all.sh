#!/bin/bash

sudo docker compose down && \

sudo ./runner.sh prime-bff-db && \
sudo ./runner.sh prime-bff-db-flyway && \
sudo ./runner.sh prime-bff && \
sudo ./runner.sh prime-app && \
sudo ./runner.sh nginx