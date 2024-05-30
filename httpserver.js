// const bookorder = require('./order')
// is not good app.

// const { jsx } = require("react/jsx-runtime");

// good app for this
// const {bookorder,completeorder,discount} = require('./order')

// console.log(discount)

// let orderID = Math.ceil(Math.random()*999999)

// bookorder(orderID)
// const fs= require('node:fs') // import

// read
// console.log("first")
// fs.readFile("name.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// let data=fs.readFileSync("name.txt","utf-8")
// console.log(data)

// console.log("second")

// let data=fs.readFile("name.txt")
// console.log(data)

// fs.readFile("temp.txt","utf-8",(err,data)=>{
//     console.log(data)
// })


// create
// const fs=require("fs")

// fs.writeFile("names.txt","name.txt",(err)=>{
//     if(err) console.log(err)
// })

// update
// const fs=require('node:fs')

// let data=fs.readFileSync("name.txt","utf-8")
    // console.log(data)

// const fs=require("fs")

// fs.writeFileSync("names.txt",data,(err)=>{
//     if(err) console.log(err)
// })

// update
// appendfile

// fs.appendFile("name.txt","\n new line",(err,data)=>{})
// fs.unlink('names.txt',(err)=>{
//     if(err) console.log(err)

//     console.log('Deleted file successfully')
// })

// rewrite on a file

// const data=fs.readFileSync('name.txt',"utf-8").
// const str=data.replace('jaswal','nitin')
// fs.writeFileSync('name.txt',str)

// const http=require('http')
// const fs=require('fs')

// const data=fs.readFileSync('index.html','utf-8')

// const server = http.createServer((req,res)=>{
//     if(req.url=="/"){
//         let da=fs.readFileSync('home.html','utf-8')
//         res.write(da)

//         // res.write('Welcome to our site')
//         // res.writeFileSync(data)
//     }
//     else if(req.url=='/data'){
//         let data=fs.readFileSync('index.html','utf-8')
//         res.writeHead(201,{'content-type':"text/html"})
//         res.write(data)
//     }
//     else{
//         res.write('404 not found')
//     }
//     res.end()
// })

// server.listen(3000,()=>{
//     console.log('server started at 3000')
// })