# TP BANK - Gestion des opérations bancaires en architecture micro-service

Ce projet consiste en une solution d'architecture micro-service permettant de gérer les opérations bancaires, incluant les débits, les crédits, et les virements pour une clientèle donnée. Cette solution propose également la gestion des clients, la gestion des comptes ainsi que des opérations bancaires de base.

**Accès administrateur requis pour certaines routes**
Certaines fonctionnalités sensibles de l'application, telles que la création de comptes bancaires, nécessitent des privilèges d'administrateur pour être utilisées. Ces routes sont protégées et ne peuvent être accessibles qu'avec un statut d'administrateur.

Pour authentifier un utilisateur en tant qu'administrateur et accéder à ces fonctionnalités restreintes, des mécanismes d'authentification supplémentaires sont mis en place, tels que l'utilisation de tokens JWT avec des rôles d'utilisateur spécifiques.

Assurez-vous de disposer des autorisations appropriées avant d'essayer d'accéder à ces routes spécifiques pour éviter les erreurs d'autorisation.

## Architecture

Le projet est structuré en différents **micro-services** afin de réduire la dépendance entre les composants. Chaque micro-service est conçu en respectant les principes SOLID pour favoriser la qualité de l'architecture. Les micro-services principaux sont :

- **Account Service** : Gère la gestion des comptes bancaires & virements.
- **Customer Service** : Responsable de la gestion des clients.

## Technologies utilisées

- **Node.js** : Plateforme utilisée pour le développement.
- **Express** : Framework utilisé pour la Gateway.
- **Sails** : Framework MVC pour les micro-services et la connexion à la base de données Mongo.

## Installation

1. Commencez par exécuter `npm install` à la racine du projet.
2. Pour chaque micro-service (account et customer), exécutez `npm install` dans leurs répertoires respectifs.

## Démarrer les applications

### Application principale

À la racine du projet, utilisez la commande suivante pour démarrer l'application principale :

```bash
npm run start # ou npm run dev
```

### Micro-services
Pour chaque micro-service (Account Service, Customer Service), utilisez la commande suivante pour les lancer individuellement :

**Account Service**
Accédez au répertoire du service de compte (account) et lancez le service à l'aide de la commande :

```bash
sails lift
```

**Customer Service**
De même, pour le service client (customer), accédez à son répertoire et exécutez la commande :

```bash
sails lift
```

Assurez-vous de lancer l'application principale avant de démarrer les micro-services pour garantir une exécution correcte de l'ensemble du système.

## Sécurité des APIs

Toutes les APIs exposées sont sécurisées pour garantir la confidentialité des données bancaires et la sécurité des opérations.

## Auteurs
- [Romain Buisson](https://buisson.us/)
- [Maxime Lecouturier](https://portfolio.maximelecouturier.fr)
- [Victor Affile](https://github.com/VicAffile)
