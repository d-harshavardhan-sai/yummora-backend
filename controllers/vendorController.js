const Vendor = require('../models/Vendor')
const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs')
const dotEnv = require('dotenv')

dotEnv.config()

const secretKey = process.env.WhatIsYourName

const vendorRegister = async(req,res)=>{
    const {username,email,password} = req.body
    try{
        const vendorEmail = await Vendor.findOne({email})
        if(vendorEmail){
            return res.status(400).json("Email already taken")
        }
        const hashedPassword = await bycrypt.hash(password,10)
        const newVendor = new Vendor({
            username,
            email,
            password:hashedPassword
        })
        await newVendor.save()
        res.status(201).json({message: "Vendor Registered Successfully"})
        console.log("Registered")
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Internal Server error"})
    }
}

const vendorLogin = async(req,res)=>{
    const { email, password } = req.body;
    try {
        const vendor = await Vendor.findOne({email})
        if(!vendor || !(await bycrypt.compare(password, vendor.password))){
            return res.status(401).json({error: "Invalid username or password"})
        }
        const token = jwt.sign({ vendorId: vendor._id}, secretKey, { expiresIn: "1hr"})
        res.status(200).json({success: "Login Successfull", token})
        console.log(email, " this is token: ", token)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server error"})
    }
}

const getAllVendors = async(req,res)=>{
    try{
        const vendors = await Vendor.find().populate('firm')
        res.json({vendors})
    }catch(error){
        console.log(error)
        res.status(500).json({error: "Internal Server error"})
    }
}

const getVendorById = async (req, res) => {
    const vendorId = req.params.id; // Correct param name: id

    try {
        const vendor = await Vendor.findById(vendorId).populate('firm'); // Optional: populate firm

        if (!vendor) {
            return res.status(404).json({ error: "Vendor Not Found" });
        }

        res.status(200).json({ vendor }); // 🛑 You forgot to send response when vendor is found
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



module.exports = { vendorRegister, vendorLogin, getAllVendors, getVendorById }