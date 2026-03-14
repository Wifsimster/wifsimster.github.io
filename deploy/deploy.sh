#!/bin/bash
set -euo pipefail

COMPOSE_DIR="${BLOG_COMPOSE_DIR:-/opt/blog}"

cd "$COMPOSE_DIR"

echo "Pulling latest images..."
docker compose pull blog

echo "Restarting services..."
docker compose up -d blog

echo "Cleaning up old images..."
docker image prune -f

echo "Deploy complete!"
