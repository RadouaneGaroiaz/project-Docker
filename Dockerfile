# Specify the base image
FROM node:18.12.1

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

RUN npm config set legacy-peer-deps true

# Install the dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
