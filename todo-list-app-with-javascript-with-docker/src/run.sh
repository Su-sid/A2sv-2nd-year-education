#!/bin/bash

# Docker Commands for Todo List Application
# Execute these commands in the directory containing your Dockerfile

echo "=== Building Docker Image ==="
# Build the image with a specific version tag (not 'latest')
# The -t flag tags the image with name:version
docker build -t todo-app:v1.0.0 .

# Alternative with date stamp
# docker build -t todo-app:$(date +%Y%m%d) .

echo "=== Verifying Image Creation ==="
# List Docker images to verify build success
docker images | grep todo-app

echo "=== Creating Named Volume ==="
# Create a named volume for data persistence demonstration
docker volume create todo-data

echo "=== Running Container ==="
# Run container with port mapping and volume mount
# -d: run in detached mode (background)
# -p: map host port 8080 to container port 80
# -v: mount named volume for data persistence
# --name: assign a name to the container for easy management
docker run -d \
  -p 8080:80 \
  -v todo-data:/app/data \
  --name todo-container \
  todo-app:v1.0.0

echo "=== Verifying Container Status ==="
# Check if container is running
docker ps

echo "=== Container Logs ==="
# View container logs to check for any issues
docker logs todo-container

echo "=== Testing Application ==="
echo "Application should be accessible at: http://localhost:8080"
echo "Use curl to test: curl http://localhost:8080"

echo "=== Useful Management Commands ==="
echo "Stop container: docker stop todo-container"
echo "Start container: docker start todo-container"
echo "Remove container: docker rm todo-container"
echo "Remove image: docker rmi todo-app:v1.0.0"
echo "Inspect volume: docker volume inspect todo-data"

echo "=== For Development (Alternative Run with Bind Mount) ==="
echo "Use this for development to see live changes:"
echo "docker run -d -p 8080:80 -v \$(pwd):/usr/share/nginx/html --name todo-dev todo-app:v1.0.0"