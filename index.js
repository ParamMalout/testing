// console.log("hyy start now ")
// console.log("now we begin now ")
// console.log("huuu")
// console.log("jjjj")
// var file=require('fs')
// if(file1==true){
//     console.log("now file is created now ")
// }
// else{
//     console.log("file in process")
// }
// var file1=file.writeFileSync('test.txt' ,"hello i am here now we will fix this")
// try{
//     file.unlinkSync('test.txt')
//     console.log("file is deleted ")
// }
// catch(error){
//     console.log("error")
// }
// let app=require('http')
// let create=app.createServer(function(req,res){
//     res.write("hyy server start now")
//     res.end()
// })
// create.listen(8989,()=>{
//     console.log("hyy server start now ")
// })

// let os=require("os")
// const totalmemory=os.totalmem()
// console.log(totalmemory)
// const freememory=os.freemem()
// console.log(freememory)
// console.log(`${totalmemory/1024s}`)
// console.log(`${freememory/1024}`)

// const http=require("http")
// const create=http.createServer((req,res)=>{
//     if(req.url=="/home"){
//         res.write("hello this is home page")
//     }
//     else if(req.url=="/about"){
//         res.write("hyy this is about page ")
//     }
//     res.end();
// })
// create.listen(8989, ()=>{
//     console.log("server is started ")
// })


//This is code of how to create the server 
// let http=request("http")
// let create=http.createserver((req,res)=>{
//     if(res.url=="/home"){
//         res.write("Hyy this is home page")
//     }
//     else if(res.url=="/about"){
//         res.write("hyy this is about page ")
//     }
//     res.end();
// })
// create.listen(8989,()=>{
//     console.log("Port is running now ")
// })




//This is code how to use the html file for node 
//  const express=require('express')
//  const app=express()
// // const port =4000
// const path=require('path')
// app.use(express.static('public1'))
// app.get('/service' ,(req,res)=>{
//     res.sendFile(path.join(__dirname,'service.html'))
    
// })
// app.listen(port,()=>{
//     console.log(`Example of listening the ${port}`)
// })


//This is code how to use the body parser
// const express=require('express')
// const app=express()
// const bodyparser=require('body-parser')
// const port=3000
// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json())
// let person={
//     person:[{
//         name:"Param",
//         age:"21"
//     }
// ,{
//     name:"Native",
//     age:"21"
// }

// ]
// }

// app.get('/' ,(req,res)=>{
//     res.json(person)
//     res.end()

// })
// app.listen(port ,()=>{
//     console.log(`Port is listen now on ${port}`)
// })



// const express=require('express')
// const app=express()
// const port=3000;
// app.use(express.json())

// const students=require('./student')
// app.get('/student' ,(req,res)=>{
//     res.json(students)
//     res.end()
// })
//  app.post('/post', (req,res)=>{
//     if(!req.body.email){
//         res.status(400)
//        return  res.json({error:"Email is require for this task"})
//     }
//    const user={
//     id:students.length+1,
//     first_name:req.body.first_name,
//     last_name:req.body.last_name,
//     email:req.body.email

//    }
//    students.push(user)
//    res.json(user)

//    })

//    app.put('/post/id' ,(req,res)=>{
//     let  id=req.params.id
//     let first_name=req.body.first_name
//     let last_name=req.body.last_name
//     let email=req.body.email

//     let index=students.findIndex((student)=>{
//         return(student.id==Number.parseInt(id))
//     })
//     if(index>=0){
//         let std=students[index]
//         std.first_name=req.body.first_name
//         std.last_name=req.body.last_name
//         std.email=req.body.email
//         res.json(std)
//     }
//     else{
//         res.status(400)
//         res.end
//     }
//    })
// app.listen(port , (req,res)=>{
//    console.log(`file is runnging now ${port}`)
     
// })




var express    = require('express');
var bodyParser = require('body-parser');
var pdf        = require('html-pdf');
var fs         = require('fs');
var options    = {format:'A4'};

//init app
var app = express();

//set the templat engine
app.set('view engine','ejs');

//fetch data from the request
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('home')
});

app.post('/',(req,res)=>{
    res.render('demopdf',{data:req.body.article},function(err,html){
        pdf.create(html, options).toFile('./public/uploads/demopdf.pdf', function(err, result) {
            if (err){
                return console.log(err);
            }
             else{
            console.log(res);
            var datafile = fs.readFileSync('./public/uploads/demopdf.pdf');
            res.header('content-type','application/pdf');
            res.send(datafile);
             }
          });
    })
})

//assign port
var port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server run at port '+port));



require('dotenv').config()
console.log(process.env.SECRET_KEY);