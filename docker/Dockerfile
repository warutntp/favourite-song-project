# Use the official Node.js image as the base
FROM node:18-alpine

# Set locale to avoid warnings
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF8

# Set the working directory inside the container
WORKDIR /app

# # Install Prisma CLI
# RUN npm install -g prisma

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including Prisma CLI)
RUN npm install && npm install -D prisma

# Copy the rest of your application code
COPY . .

RUN npx prisma generate 

# Copy SQL scripts 
COPY scripts/create_tables.sql scripts/insert_data.sql ./docker-entrypoint-initdb.d/


# Build your TypeScript code and check files
RUN npm run build && echo "Build complete" && ls -la /app/dist


# Expose the port your app will run on
EXPOSE 8080

# Command to run the app
CMD ["node", "dist/index.js"]