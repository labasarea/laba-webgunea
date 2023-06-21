[![Netlify Status](https://api.netlify.com/api/v1/badges/3e9ed70d-2f4b-4152-9aaf-1129570d01b4/deploy-status)](https://app.netlify.com/sites/laba-webgunea/deploys)

# Laba.eus

Laba Sarerako webgune publikoa. Teknologiak:

- Backend: [Strapi](https://strapi.io/resource-center)
- Frontend: [Gatsby](https://www.gatsbyjs.com/docs)

## 👀 Saltseatzen hasteko

### Backend-a altxatzeko

1. Kopiatu ezazu `/back/.env.example` fitxategiaren edukia `/back/.env` fitxategira
2. Altxatu backend proiektua:

```
yarn back develop
```

### Frontend-a altxatzeko

1. [Altxatu backend proiektua](#backend-a-altxatzeko)
2. Altxatu frontend proiektua:

```
yarn front develop
```

### Testak pasatzeko

1. [Altxatu backend proiektua](#backend-a-altxatzeko)
2. [Altxatu frontend proiektua](#frontend-a-altxatzeko):
3. Testak pasatu:

```
yarn e2e test
```
