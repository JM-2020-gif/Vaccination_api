var express = require('express');
var router = express.Router();
const {createCare_centers} = require('../controllers/care_centers')
const {readCare_centers} = require('../controllers/care_centers')
const {updateCare_centers} = require('../controllers/care_centers')
const {deleteCare_centers} = require('../controllers/care_centers')
/* GET home page. */
router.post('/api/v1/createCare_centers',createCare_centers);
router.get('/api/v1/readCare_centers',readCare_centers);
router.put('/api/v1/updateCare_centers',updateCare_centers);
router.delete('/api/v1/deleteCare_centers',deleteCare_centers);

module.exports = router;