#!/bin/bash

cd ./nginx && sudo docker compose down && \
cd .. && \
cd ./prime-bff && sudo ./runner-prime-bff.sh && \
cd .. && \
cd ./prime-bff-db && sudo ./runner-prime-bff-db.sh && \
cd .. && \
cd ./prime-bff-db-flyway && sudo ./runner-prime-bff-db-flyway.sh && \
cd .. && \
cd ./prime-app && sudo ./runner-prime-app.sh && \
cd .. && \
cd ./nginx && sudo ./runner-nginx.sh && \
cd ..