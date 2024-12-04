# Use the latest Node.js image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the entire app
COPY . .

# Build the TypeScript code
RUN yarn build

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
