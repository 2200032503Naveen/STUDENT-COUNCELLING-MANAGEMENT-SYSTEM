const express=require('express')
const cors=require('cors')
const { MongoClient }=require('mongodb')
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")
const {expressjwt:exjwt} = require("express-jwt")
const jwt_decode = require("jwt-decode")
const fs=require("fs")

const app=new express()
app.use(express.json())
app.use(cors())

var secretkey="abcd"
var algorithm = "HS256"

var jwtmw = exjwt({
    secret: secretkey,
    algorithms:[algorithm]
})

const client=new MongoClient('mongodb+srv://admin:admin@cluster0.ynyz3tq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
client.connect()
const db=client.db('s31')
const col=db.collection('register')

app.post('/insert',async (req,res)=>{
    console.log(req.body)
    var reg={...req.body}
    reg.password=await bcrypt.hash(reg.password,5)
    col.insertOne(reg)
    res.send("recieved data")
})
 
app.get('/show', jwtmw, async (req,res)=>{
    //console.log(req.headers)
    //console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)))
    var result= await col.find().toArray()
    res.send(result)
})
 
app.get('/home',(req,res)=>{
    res.send("home page")
})

app.post('/check', async (req,res)=>{
   console.log(req.body)
   var result = await col.findOne({"name":req.body.un})
   if(result==null){
    res.send({
        message: "failed",
        token: null
    })
   }
   else if(await bcrypt.compare(req.body.pw,result.password)){
    var token = jwt.sign(result, secretkey, {
        algorithm:algorithm,
        expiresIn:"20m"
    })
    res.send({
        message: result,
        token: token
    })
   }
   else {
    res.send({
        message: "failed",
        token: null
    })
   }
})

app.get('/create', (req,res)=>{
    fs.writeFile("demo.txt","mswd class",function (err){
        if(err)
            console.log(err)
    })
    res.send("data inserted")
})

app.get('/append', (req,res)=>{
    fs.appendFile("demo.txt","\n yashwanth presenting",function (err){
        if(err)
            console.log(err)
    })
    res.send("data appended")
})

app.get('/read', (req,res)=>{
    fs.readFile("demo.txt","UTF-8",function (err,data){
        if(err)
            console.log(err)
        res.send(data)
    })
})

app.delete('/delete', async (req,res)=>{
    console.log(req.query.name)
    await col.deleteOne({name:req.query.name})
    res.send("deleted successfully")
})

app.put('/update',async (req,res)=>{
    console.log(req.body)
    var doc={
        $set:{
            password:bcrypt.hash(req.body.password,5),
            email:req.body.email,
            role:req.body.role
        }
    }

    await col.updateOne({name:req.body.name},doc)
    res.send("update")
})

app.listen(8081)
console.log('server running')