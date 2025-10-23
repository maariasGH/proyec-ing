# 🛒 Aplicación de Gestión de Productos – Expo + TypeScript

Bienvenido a tu aplicación desarrollada con [Expo](https://expo.dev) y [Expo Router](https://docs.expo.dev/router/introduction/).  
Este proyecto fue creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) y utiliza navegación basada en archivos para una estructura más intuitiva.

## 🚀 Características

- Listado de productos con diseño moderno y responsivo
- Vista detallada de cada producto con imagen, descripción y precio
- Funcionalidades completas de **crear**, **editar** y **eliminar** productos
- Navegación dinámica con rutas como `/producto/[id]`
- Estilos consistentes y adaptables
- Conexión a [FakeStoreAPI](https://fakestoreapi.com) para simular datos reales

## 🧑‍💻 Cómo comenzar

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Iniciar la aplicación:

   ```bash
   npx expo start
   ```

Desde la terminal podrás elegir cómo abrir la app:

-Expo Go
-Emulador de Android
-Simulador de iOS
-Development build

📁 Estructura del proyecto

La navegación se organiza automáticamente según los archivos dentro de la carpeta app/:

   ```bash
   app/
   ├── index.tsx              → Lista de productos
   ├── producto/[id].tsx      → Detalle del producto
   ├── components/ProductoCard.tsx  → Card individual de cada producto
   ├── crear.tsx              → Crear nuevo producto
   ├── editar/[id].tsx        → Editar producto existente
   ├── eliminar/[id].tsx      → Confirmar y eliminar producto
   ├── _layout.tsx            → Configuración de navegación
   ├── api/productos.ts       → Consumo de Api FakeStore
   ├── temas.ts               → Temas Generales para la aplicación

   ```
🔌 API simulada

-Este proyecto utiliza FakeStoreAPI para simular operaciones CRUD. ⚠️ Importante: los cambios realizados (crear, editar, eliminar) no se guardan de forma permanente, ya que la API es solo de prueba.

📚 Recursos útiles

-Documentación de Expo

-Guía de Expo Router

-Tutorial paso a paso de Expo