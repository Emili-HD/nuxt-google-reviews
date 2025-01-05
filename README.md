# Nuxt 3 Google Reviews
Este proyecto utiliza **Nuxt 3.15.1 para construir una aplicación minimalista. Asegúrate de leer la [documentación de Nuxt 3](https://nuxt.com/docs/getting-started/introduction) para más información.

## Configuración del Entorno

Este proyecto requiere un archivo `.env` en el directorio raíz para almacenar configuraciones sensibles. 

### Variables de Entorno Requeridas

Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

```env
# Clave de API para los servicios de Google (requerida)
NUXT_PUBLIC_GOOGLE_MAP_API_KEY=tu_api_key

````

## Setup

Asegúrate de instalar las dependencias antes de ejecutar el proyecto:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Producción

Construye la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Consulta la [documentación de despliegue](https://nuxt.com/docs/getting-started/deployment) para más información.
