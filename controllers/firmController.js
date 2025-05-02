const Vendor = require('../models/Vendor')
const Firm = require('../models/Firm')
const multer = require('multer')
const path = require('path') // required for path.extname

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename:function(req,file,cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const addFirm = async(req,res)=>{
    try {
        const {firmname, area, category, region, offer}=req.body
        const image = req.file? req.file.filename: undefined

        const vendor = await Vendor.findById(req.vendorId)

    if(!vendor){
        return res.status(404).json({message: "Vendor not found"})
    }

    if(vendor.firm.length > 0){
        return res.status(400).json({message:"vendor can have only one firm"})
    }

    const firm = new Firm({
        firmname,
        area, 
        category, 
        region, 
        offer, 
        image, 
        vendor: vendor._id
    })

    const savedFirm = await firm.save()

    const firmId = savedFirm._id

    vendor.firm.push(savedFirm)
    await vendor.save()

    return res.status(200).json({message: "Firm Added successfully", firmId})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message || "Internal Server Error" })

    }
}

const deleteFirmById = async(req,res)=>{
    try {
        const firmId = req.params.firmId

        const deletedFirm = await Firm.findByIdAndDelete(firmId)

        if(!deletedFirm){
            return res.status(404).json({error: "No firm found"})
        }
        
        res.status(200).json({ message: "Firm deleted successfully", deletedFirm })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

module.exports = { addFirm: [upload.single('image'), addFirm], deleteFirmById }