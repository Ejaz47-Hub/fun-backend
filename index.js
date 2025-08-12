import express from 'express'
import dotenv from 'dotenv'

const ejaz = express();
dotenv.config()
const PORT = process.env.PORT || 5000 



ejaz.get('/',(req,res)=>{res.send('ejaz')})
ejaz.get('/login',(req,res)=>{res.send('login hogaya')})

ejaz.listen(process.env.PORT,()=>{console.log(`the server is ready : ${PORT}`)
})