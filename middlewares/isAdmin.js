const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({ message: "No token provide" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if(!user || user.role !== "admin") {
            return res.status(403).json({ message: "Acceso denegado. Solo administradores pueden acceder" });    
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token Inválido" });
    }
};


