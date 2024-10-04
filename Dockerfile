# Use an official Node.js runtime as the base image
FROM node:20

ARG REACT_APP_LAYER_URL="https://api.buildwithlayer.com/"
ARG REACT_APP_MANAGEMENT_DASH_URL="https://dashboard.buildwithlayer.com/"

# Create a directory for our application in the container
RUN mkdir -p /usr/src/app

# Set this new directory as our working directory for subsequent instructions
WORKDIR /usr/src/app

# Copy all files in the current directory into the container
COPY . .

# Set the PYTHONPATH environment variable, which is occasionally necessary for certain node packages
# 'PWD' is an environment variable that stores the path of the current working directory
ENV PYTHONPATH=${PYTHONPATH}:${PWD}

# Set the environment variable for the application's port
# (Be sure to replace '4200' with your application's specific port number if different)
ENV PORT 4200

EXPOSE $PORT

# Install 'serve', a static file serving package globally in the container
RUN yarn install

# Install 'serve', a static file serving package globally in the container
RUN yarn global add serve

# Build the React app
RUN yarn build

# Serve the 'build' directory on port 4200 using 'serve'
CMD ["serve", "-s", "-l", "4200", "./build"]

