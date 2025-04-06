# Utiliser une image Node officielle
FROM node:18

# Créer le répertoire de l'application
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "app.js"]
