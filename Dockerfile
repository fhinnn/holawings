# Base image: node on alpine
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json (kalau ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project ke container
COPY . .

# Jalankan perintah default saat container start
CMD ["npm", "run", "start-dev"]
