const express = require('express');

const router = express.Router();
const insightController = require('../controller/wordController')

router.post('/api/insights',insightController.createInsights)
router.get('/api/insights',insightController.allInsights)

router.delete('/api/insights/:id',insightController.deleteInsight)


router.patch('/api/insights/:id',insightController.updateInsight)

router.get('/',insightController.home)

module.exports = router;