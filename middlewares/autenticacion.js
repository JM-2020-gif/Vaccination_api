const express = require('express');
let app = express();
//========================
// Verificar AdminRole
//========================
let verificaAdmin_Role = (req, res, next) => {

    //const token = req.headers['auth'];
    let usuario = req.headers['auth']; // Authorization
    if (usuario !== 'ADMIN') {
        return res.status(401).json({
            ok: false,
            //err,
            err: {
                message: 'Requiere privilegios de ADMIN'
            }
        });
    }
    next();
};

module.exports = {
    verificaAdmin_Role,
    app
}