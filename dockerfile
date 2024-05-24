# Stage 1: Build the React application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:latest

# Copy the built React application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/nukamari.com.conf

# Expose port 80
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
