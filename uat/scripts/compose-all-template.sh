#!/bin/bash

cd ./nginx && sudo docker compose down && \
cd .. && \
cd ./primebff && sudo ./runner-primebff.sh && \
cd .. && \
cd ./primeapp && sudo ./runner-primeapp.sh && \
cd .. && \
cd ./nginx && sudo ./runner-nginx.sh && \
cd ..