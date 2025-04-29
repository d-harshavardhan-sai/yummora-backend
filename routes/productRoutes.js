const productController = require('../controllers/productController')
const express = require('express')
const path = require('path')

const router = express.Router()

// POST route for adding a product
router.post('/add-product/:firmId', productController.addProduct)

// GET route for getting products by firm
router.get('/:firmId/products', productController.getProductByFirm)

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName
    res.type('jpeg') // ✅ Set content type correctly
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName))
})

router.delete('/:productId', productController.deleteProductById)


module.exports = router
