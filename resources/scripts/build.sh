#!/usr/bin/env bash

# Build backend
echo "Transpiling the backend code.";
babel src/server/ -d dist/server/

echo "";
# Build frontend
if [ "$NODE_ENV" = "production" ]; then
    echo "Building app for production";
    webpack --config ./resources/webpack/prod.config.js -p
else 
    echo "Building app for development";
    webpack --config ./resources/webpack/dev.config.js
fi