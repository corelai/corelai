#!/bin/bash

./build-prime-bff.sh && \
./build-prime-bff-db-flyway.sh && \
./build-prime-app.sh && \
./build-nginx.sh