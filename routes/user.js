const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, 'username');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener usuario' });
    }
});

router.put("/make-admin/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { role: "admin" },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({
            message: "Usuario promovido a administrador",
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Error del servidor", error: err.message });
    }
});

module.exports = router;