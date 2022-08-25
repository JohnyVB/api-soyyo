const { Router } = require('express');

const { filterByCode } = require('../controllers/handler.controller');

const router = Router();

router.post('/filterByCode', filterByCode );

module.exports = router;