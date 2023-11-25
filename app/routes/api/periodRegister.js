const express = require('express');
const router = express.Router();

const periodRegister = require('../../controllers/periodRegister');



router.get('/periodRegister', periodRegisterController.gePeriodRegister)
router.get('/periodRegister/:id', periodRegisterController.getPeriodRegister)
router.put('/periodRegister/:id', periodRegisterController.updatePeriodRegister)
router.delete('/periodRegister/:id', periodRegisterController.deletePeriodRegister)
router.post('/periodRegister', periodRegisterController.addPeriodRegister)

module.exports = router;