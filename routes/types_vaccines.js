var express = require('express');
var router = express.Router();
let { verificaAdmin_Role } = require('../middlewares/autenticacion');
const {createType_vaccinate} = require('../controllers/types_vaccines')
const {readType_vaccinate} = require('../controllers/types_vaccines')
const {updateType_vaccinate} = require('../controllers/types_vaccines')
const {deleteType_vaccinate} = require('../controllers/types_vaccines')
/* GET home page. */
router.post('/api/v1/createType_vaccinate',verificaAdmin_Role,createType_vaccinate);
router.get('/api/v1/readType_vaccinate/:id',verificaAdmin_Role,readType_vaccinate);
router.put('/api/v1/updateType_vaccinate',verificaAdmin_Role,updateType_vaccinate);
router.delete('/api/v1/deleteType_vaccinate',verificaAdmin_Role,deleteType_vaccinate);

module.exports = router;