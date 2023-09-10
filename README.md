# i-podcast

demo: https://prueba-tecnica-inditex.netlify.app/

Esta es una mini-aplicación para escuchar podcasts musicales. La aplicación consta de tres vistas principales:

1. Vista principal
2. Detalles de un podcast
3. Detalles de un capítulo de un podcast

Pone en practica algunos principios:

List / item (container component/ presentation component)
fetch / localStorage (manejo del estado del servidor)
manejo de estados (react context)
form (controlados)
enrutado (React-router)
jest (test - jsdom)

## Instalación

Para ejecutar la aplicación, asegúrese de tener [Node.js](https://nodejs.org) instalado en su computadora.

1. Clone este repositorio en su máquina local.
2. Ejecute `npm install` para instalar las dependencias.

## Modo Development

Ejecute `npm run dev` para iniciar el servidor de desarrollo.

## Modo Production

1. Ejecute `npm run build` para compilar y generar los archivos para producción.
2. Ejecute `npm run preview` para iniciar un servidor de producción.
3. Se genera el directorio dist, el cual corresponde al distribuible 



## Dependencias

- [react](https://www.npmjs.com/package/react): ^18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18.2.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): 6.15.0

## Dev Dependencias

- [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime): ^7.22.15
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): ^7.22.15
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react): ^7.22.15
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): ^14.0.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^18.2.15
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18.2.7
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^4.0.3
- [babel-jest](https://www.npmjs.com/package/babel-jest): ^29.6.4
- [eslint](https://www.npmjs.com/package/eslint): ^8.45.0
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest): ^27.2.3
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.32.2
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^4.6.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.4.3
- [jest](https://www.npmjs.com/package/jest): ^29.6.4
- [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom): ^29.6.4
- [vite](https://www.npmjs.com/package/vite): ^4.4.5
