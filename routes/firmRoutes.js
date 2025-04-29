const express = require('express')
const firmController = require('../controllers/firmController')
const verifyToken = require('../middlewares/verifyToken')
const path = require('path')

const router = express.Router()

router.post('/add-firm', verifyToken, firmController.addFirm)

// router.get('/uploads/:imageName', (req,res)=>{
//     const imageName = req.params.imageName
//     res.headersSent('Content-Type', 'image/jpeg')
//     res.sendFile(Path.join(__dirname, '..', 'uploads', imageName))
// })

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName
    res.type('jpeg') // ✅ Set content type correctly
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName))
})

router.delete('/:firmId', firmController.deleteFirmById)

module.exports= router