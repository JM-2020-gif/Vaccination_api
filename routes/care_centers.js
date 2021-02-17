var express = require('express');
var router = express.Router();
let { verificaAdmin_Role } = require('../middlewares/autenticacion');
const {createCare_centers} = require('../controllers/care_centers')
const {readCare_center} = require('../controllers/care_centers')
const {readCare_centersUnique} = require('../controllers/care_centers')
const {updateCare_centers} = require('../controllers/care_centers')
const {deleteCare_centers} = require('../controllers/care_centers')
/* GET home page. */
router.post('/api/v1/createCare_centers', verificaAdmin_Role,createCare_centers);
router.get('/api/v1/readCare_centers', verificaAdmin_Role,readCare_center);
router.get('/api/v1/readCare_centers/:idcare', verificaAdmin_Role,readCare_centersUnique);
router.put('/api/v1/updateCare_centers', verificaAdmin_Role,updateCare_centers);
router.delete('/api/v1/deleteCare_centers/:idcare', verificaAdmin_Role,deleteCare_centers);

module.exports = router;