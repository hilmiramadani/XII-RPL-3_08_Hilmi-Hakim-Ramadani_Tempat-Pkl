const express = require('express')
const router = express.Router()
const perusahaancontroller = require('../controller/perusahaans')

router.get('/perusahaans', perusahaancontroller.index)

router.get('/perusahaan/:id', perusahaancontroller.show)

router.post('/perusahaan', perusahaancontroller.store)

router.put('/perusahaan/:id', perusahaancontroller.update)

router.delete('/perusahaan/:id', perusahaancontroller.delete)

module.exports = router