var express = require('express');
var router = express.Router();
const {createVaccinate_people} = require('../controllers/vaccinate_people')
const {readVaccinate_people} = require('../controllers/vaccinate_people')
const {updateVaccinate_people} = require('../controllers/vaccinate_people')
const {deleteVaccinate_people} = require('../controllers/vaccinate_people')
/* GET home page. */
router.post('/api/v1/createVaccinate_people',createVaccinate_people);
router.get('/api/v1/readVaccinate_people',readVaccinate_people);
router.put('/api/v1/updateVaccinate_people',updateVaccinate_people);
router.delete('/api/v1/deleteVaccinate_people',deleteVaccinate_people);

module.exports = router;