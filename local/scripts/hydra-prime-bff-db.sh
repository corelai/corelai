#!/bin/bash

cd ../../src/Corelai.Prime.Bff/

dotnet sqlhydra npgsql --connection-string=${CORELAI_PRIME_BFF_DB}

cd ../../local/scripts/