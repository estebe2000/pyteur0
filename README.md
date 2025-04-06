# pyteur

## Description
Application Node.js Express pour gérer des exercices, utilisateurs et cours avec une base SQLite.

## Prérequis
- [Node.js](https://nodejs.org/) (version 18 recommandée)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optionnel)
- [docker-compose](https://docs.docker.com/compose/) (optionnel)

## Installation

```bash
npm install
```

## Lancement en local

```bash
node app.js
```

Le serveur sera accessible sur [http://localhost:3000](http://localhost:3000).

## Utilisation avec Docker

### Construire l'image Docker

```bash
docker build -t pyteur-app .
```

### Lancer le conteneur

```bash
docker run -p 3000:3000 -v ${PWD}:/app -v ${PWD}/database.sqlite:/app/database.sqlite pyteur-app
```

## Utilisation avec Docker Compose

```bash
docker-compose up --build
```

Le serveur sera accessible sur [http://localhost:3000](http://localhost:3000).

## Notes
- La base de données SQLite est persistée via un volume Docker.
- Le code source est monté dans le conteneur pour un développement facilité.
