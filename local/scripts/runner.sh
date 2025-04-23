#!/bin/bash

set -e
trap 'rm -f .env; exit' EXIT INT TERM

DRY_RUN=false

# 🏷️ Parse args
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  shift
fi

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 [--dry-run] <servicename>"
  exit 1
fi

SERVICENAME="$1"


echo "📢 Sourcing local env from ./corelai-env.sh"
source ../corelai-env.sh


echo "📝 Generating .env file from CORELAI_* vars..."
env | grep '^CORELAI_' > .env

echo "✅ .env content:"
cat .env

if $DRY_RUN; then
  echo "🛑 [DRY-RUN] Would stop and remove container: $SERVICENAME"
  echo "🚀 [DRY-RUN] Would start container: $SERVICENAME"
else
  echo "🛑 Stopping existing $SERVICENAME container..."
  docker compose -f ../docker-compose.yaml stop "$SERVICENAME"
  docker compose -f ../docker-compose.yaml rm -f "$SERVICENAME"

  echo "🚀 Starting new $SERVICENAME container..."
  docker compose -f ../docker-compose.yaml up -d "$SERVICENAME"
fi