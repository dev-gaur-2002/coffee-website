const { validationResult } = require("express-validator")
const userModel = require('../model/user')

const VerifyNewUser = async (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
       return res.status(500).json({msg:errors})
    }
    try{
        const duplicate = await userModel.findOne({username: req.body.username})
        if(!duplicate){ 
            console.log('this is a valid username')
            res.status(200).send()
        }
    }
    catch(error){
        console.log(error)
    }
    try{
        const dup = await userModel.findOne({mob: req.body.mob})
        if(!dup){ 
            console.log('this is a valid mobile number')
            res.status(200).send()
        }
    }
    catch(error){
        console.log(error)
    }
    res.status(500).send('user with this username already exists')
    next()
}

const createNewUser = async (req,res)=>{
    const formData = await req.body
    if(formData.password != formData.confirm){
        const User =  userModel.create(req.body)
        res.status(201).json(User)
    }
    res.status(500).json({msg:"passsword did not matched"})
}
const ValidatePassword = async (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
       return res.status(500).json({msg:errors})
    }
    try {
        const formData = await req.body
        if(formData.password != formData.confirm){
            res.send('password did not matched')
        }
        
    } catch (error) {
        res.status(500).send({msg:error})
    }
    next()
}

const ValidateUser = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
       return res.status(500).json({msg:errors})
    }
    console.log(req.body)
    const query = await userModel.findOne({username: req.body.username})
    console.log(query)
    if(!query){
      return  res.status(404).send('no user with such username found')
    }
    const password = query.password
    if(password != req.body.password){
        res.status(500).send("wrong password please try again later")
    }
    res.send('logged in successfully')
}

module.exports = {ValidatePassword,createNewUser,ValidateUser,VerifyNewUser}