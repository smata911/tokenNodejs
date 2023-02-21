
const express = require('express');
const routerConToken = express.Router();
// const conexion = require('../../config/conexion');
const { validateToken } = require('../../middlewares/validarTokenMidd.js')
// const { apiResponseConToken } = require('../../utils/helpers/conTokenHelper');
const solocontoken=require('../../model/conTokenModel.js');
routerConToken.use(express.json());
routerConToken.get('/', validateToken, async (req, res) => {
    try {
        const infoImportante = solocontoken.findAll();
        //apiResponseConToken.push(await infoImportante);
        res.json({
            user: req.user,
            respuesta: await infoImportante
        });
    } catch (error) {
        res.json(await validarError(err, res, action));
    }
});
module.exports = routerConToken;