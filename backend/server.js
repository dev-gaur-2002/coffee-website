const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const {body,validationResult , check} = require('express-validator')
const {ValidatePassword,createNewUser, ValidateUser,VerifyNewUser} = require('./functions/form')
const connectDB = require('./functions/connectDb')
dotenv.config()
const app = express()
const port = process.env.port || 5000
// const {getMenu, getAbout, getContactUs, getSignup, getPrivacy, getlocation,getShop,getLogin} = require('./functions/func')

app.use(express.static('project'))
app.use(express.static('project/css'))
app.use(express.static('project/css/javascript'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,`/project/home.html`))
})
app.get('/menu',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/menu.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/aboutUs.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/contact-us.html'))
})
app.get('/location',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/locations.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/login.html'))
})
app.get('/privacy',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/privacy-policy.html'))
})
app.get('/shop',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/shop.html'))
})
app.get('/sign',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project/sign-up.html'))
})
app.get('/cart',(req,res)=>{
    res.send('cart facility not avialable at this moment')
})

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

/* ----------------------------- for login form --------------------------------- */

app.post('/login',
check('username').exists().withMessage('please provide the username'),
check('password').exists().withMessage('please provide the password'),
ValidateUser)

/* ------------------------------ for sign up form submission ----------------------------------- */
app.post('/sign',
check('name').isAlpha().withMessage('this field must contain only and only alphabets try using camel case'),
check('username').exists().withMessage('username must be provided'),
body('mob').isLength({min:10 , max:10}).withMessage("inappropriate mobile number"),
body('password').isLength({min:5}).withMessage("password should be more than 5"),
ValidatePassword,VerifyNewUser,createNewUser)

app.listen(port)
connectDB(process.env.MONGO_URI)
