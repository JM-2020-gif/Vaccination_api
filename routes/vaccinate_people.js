var express = require('express');
var router = express.Router();
let { verificaAdmin_Role } = require('../middlewares/autenticacion');
const {createVacciPeople} = require('../controllers/vaccinate_people')
const {readVaccinate_peopleUnique} = require('../controllers/vaccinate_people')
const {updateVaccinate_people} = require('../controllers/vaccinate_people')
const {deleteVaccinate_people} = require('../controllers/vaccinate_people')
/* GET home page. */
router.post('/api/v1/createVaccinate_people',verificaAdmin_Role,createVacciPeople);
router.get('/api/v1/readVaccinate_people/:id',verificaAdmin_Role,readVaccinate_peopleUnique);
router.put('/api/v1/updateVaccinate_people',verificaAdmin_Role,updateVaccinate_people);
router.delete('/api/v1/deleteVaccinate_people',verificaAdmin_Role,deleteVaccinate_people);

module.exports = router;