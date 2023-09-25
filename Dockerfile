# Stage 1: Build the React application
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for efficient caching
COPY ./package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the React application using nginx on Ubuntu
FROM ubuntu:latest

# Install nginx
RUN apt-get update && apt-get install -y nginx

# Remove the default nginx configuration
RUN rm /etc/nginx/sites-enabled/default

# Copy the React build from Stage 1
COPY --from=build /usr/src/app/build /var/www/html

# Copy a custom nginx configuration 
COPY ./nginx.conf /etc/nginx/sites-available/default

# Symlink to enable the configuration
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled

# Expose port 80 for nginx
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
