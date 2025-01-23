# Base Image
FROM ubuntu

# for specific image do the installation
RUN apt-get update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

# Copy Source code
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

# mention the workign directory
WORKDIR /home/app/

RUN npm install

#build the docker image with a name