#!/bin/bash

# Batbox Presentation - Deployment Script
# Deploys the Vite build output to production server

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Batbox Presentation Deployment${NC}"
echo -e "${GREEN}========================================${NC}"

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
else
    echo -e "${RED}Error: .env file not found${NC}"
    echo "Create one from .env.example:"
    echo "  cp .env.example .env"
    exit 1
fi

# Validate required variables
if [ -z "$DEPLOY_SERVER" ] || [ -z "$DEPLOY_USER" ] || [ -z "$DEPLOY_PATH" ]; then
    echo -e "${RED}Error: Missing required environment variables${NC}"
    echo "Please set DEPLOY_SERVER, DEPLOY_USER, and DEPLOY_PATH in .env"
    exit 1
fi

echo -e "${YELLOW}Server:${NC} $DEPLOY_SERVER"
echo -e "${YELLOW}User:${NC} $DEPLOY_USER"
echo -e "${YELLOW}Path:${NC} $DEPLOY_PATH"
echo ""

# Step 1: Build the project
echo -e "${GREEN}Step 1: Building project...${NC}"
npm run build

if [ ! -d "build" ]; then
    echo -e "${RED}Error: Build directory not found${NC}"
    exit 1
fi

# Step 2: Create remote directory if it doesn't exist
echo -e "${GREEN}Step 2: Preparing remote directory...${NC}"
ssh ${DEPLOY_USER}@${DEPLOY_SERVER} "mkdir -p ${DEPLOY_PATH}"

# Step 3: Sync build files to server
echo -e "${GREEN}Step 3: Uploading files...${NC}"
rsync -avz --delete \
    --exclude '.git' \
    --exclude 'node_modules' \
    --exclude '.env' \
    build/ ${DEPLOY_USER}@${DEPLOY_SERVER}:${DEPLOY_PATH}/

# Step 4: Set proper permissions
echo -e "${GREEN}Step 4: Setting permissions...${NC}"
ssh ${DEPLOY_USER}@${DEPLOY_SERVER} "chmod -R 755 ${DEPLOY_PATH}"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
if [ -n "$PRODUCTION_URL" ]; then
    echo -e "${YELLOW}URL:${NC} $PRODUCTION_URL"
fi


