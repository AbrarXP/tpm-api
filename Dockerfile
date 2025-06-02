# Gunakan Node.js versi LTS sebagai base image
FROM node:18

# Buat folder kerja
WORKDIR /app

# Salin dependency dan install
COPY package*.json ./
RUN npm install

# Salin semua file ke dalam image
COPY . .

# Ekspose port yang digunakan (pastikan sama dengan yang di Express, default: 3000)
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "index.js"]