const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/user');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://recetas-frontend-swart.vercel.app'
]

app.use(cors({
    origin: allowedOrigins,
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API de Recetas funcionando');
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;