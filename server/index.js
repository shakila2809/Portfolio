const express = require('express')
const bodyParser = require ('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res)=>{
    res.send(`<h1 style="text-align: center; color:blue"> Welcome to my home page </h1>`)
})

app.listen(8001, () =>{
    console.log('server starting up port 8001')
})

app.post('/api/sendEmail',(req,res)=>{
    res.send("yes i got")
    let data= req.body
    console.log(data)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'shakilass2804@gmail.com',
            pass: 'kuttyma2814'
        }
    })

    const mailoptions ={
        from:'shakilass2814@gmail.com',
        to: 'shakilass2804@gmail.com',  
        subject: 'Message from clinet',
        html:`
        <ul>
        <li><h1 style="color: green">Name: ${data.name}</h1></li>
        <li><h1 style="color: blue">email: ${data.email}</h1></li>
        <li><h1 style="color: yellow">Message: ${data.message}</h1></li>
        </ul>
        `
    }

    transporter.sendMail(mailoptions, (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(`Email sent: ${info.response}`)
        }
    })
    transporter.close()
})