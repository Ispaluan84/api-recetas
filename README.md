# 🍽️ API de Recetas

API RESTful construida con Node.js, Express y MongoDB que permite crear, leer, actualizar y eliminar recetas. Incluye autenticación con JWT y validaciones.

## 🌐 Deploy en Render

📡 [Ver API en línea](https://api-recetas-84gx.onrender.com)

---

## ⚙️ Tecnologías utilizadas

- Node.js + Express
- MongoDB + Mongoose
- JWT (Json Web Token)
- Express Validator
- Postman para pruebas
- Render para el deploy

---

## 🔐 Autenticación

### 🔸 Registro de usuario

`POST /api/auth/register`

```json
{
  "username": "usuario1",
  "password": "123456"
}
```

### 🔸 Login

`POST /api/auth/login`

```json
{
  "username": "usuario1",
  "password": "123456"
}
```

📌 Devuelve un token para acceder a rutas protegidas.

---

## 📋 Endpoints de recetas

> Todas las rutas protegidas requieren el header:
> `Authorization: Bearer <token>`

| Método | Ruta                       | Descripción                  |
|--------|----------------------------|------------------------------|
| GET    | /api/recipes               | Listar todas las recetas     |
| GET    | /api/recipes/:id           | Obtener una receta por ID    |
| POST   | /api/recipes               | Crear nueva receta 🔒        |
| PUT    | /api/recipes/:id           | Actualizar receta 🔒         |
| DELETE | /api/recipes/:id           | Eliminar receta 🔒           |

---

## 📦 Instalación local

```bash
git clone https://github.com/tuusuario/api-recetas.git
cd api-recetas
npm install
```

Luego crear un archivo `.env` con:

```
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=claveultrasecreta
PORT=3000
```

Iniciar el servidor:

```bash
node server.js
```

---

## 🧪 Pruebas con Postman

- Usá la colección incluida: `API_Recetas_Postman_Collection.json`
- Importá el entorno: `API_Recetas_Postman_Environment.json`
- Reemplazá `{{token}}` y `{{id}}` tras hacer login y obtener recetas.

---

## 📁 Estructura del proyecto

```
api-recetas/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env.example
├── server.js
├── app.js
└── package.json
```

---

## 🧑‍💻 Autor

Proyecto desarrollado como parte del portfolio de desarrollador Fullstack.
