// const express=require('express')

// const app=express()

// const Database=[]

// instance_name.req_method(route,function)
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.status(201).send('home.ejs')
// })
// app.get('/data',(req,res)=>{
//     res.status(201).sendFile(__dirname +'/index.html')
// })

// app.post('/form',(req,res)=>{
//     let check=Database.findIndex((item)=>{
//         return item.user==req.body.user
//     })
//     if(check==-1){
//         Database.push(req.body)
//         // Database.splice(check)
//     }
//     else{
//         console.log("already")
//     }
//     res.send(Database)
// })
// app.post('/form',(req,res)=>{
//     let check=Database.find((item)=>{
//         return item.user==req.body.user
//     })
//     if(check){
//         console.log("already")
//     }
//     else{
//         Database.push(req.body)
//     }
//     res.send(Database)
// })

// const match=Database.filter(obj=>obj.user==='Akash@123')
// console.log(match)

// app.post('/delete',(req,res)=>{
//     let index=Database.findIndex((item)=>{
//         return item.user==req.body.user
//     })
//     if(index!==-1){
//         Database.splice(index,1)
//     }
//     else{
//         console.log("Not available")
//     }
//     res.send(Database)
// })

// app.listen(3000,()=>{
//     console.log('server started at 3000')
// })

const express = require("express");

const app = express(); // instance banana - we can all feature of exprees in  const app
const db=require("./config/dbconfig.js")
const cookieParser = require("cookie-parser")
const auth = require('./middleware/auth.js')
const path = require("path")
// instance_name.req_method(route , function)
app.set("view engine", "ejs");

app.use(express.json()); //parsing data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

let staticPath = path.join(__dirname , "public")

app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('Welcome to todolist')
})

app.get('/logout',(req,res)=>{
    res.cookie("token","")
    res.redirect('/user/login')
})

app.use('/todo',auth,require("./routes/todo.routes.js"))
app.use('/user',require("./routes/user.routes.js"))

app.listen(3000, () => {
  console.log("server started at 3000");
});
// const Database = []

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.get('/data', (req, res) => {
//     res.status(201).sendFile(__dirname + '/CV copy.html')
// })
// app.get('/about', (req, res) => {
//     res.status(201).sendFile(__dirname + '/about.html')
// })

// app.get('/form', (req , res))

// app.post('/form', (req, res) => {
//     let check = Database.find((item) => {
//         return item.user == req.body.user
//     })
//     if (check) {
//         console.log('already')
//     }
//     else {
//         Database.push(req.body)
//     }
//     res.send(Database)
// })

// app.post('/delete', (req, res) => {
//     let index = Database.findIndex((item) => {
//         return item.user == req.body.user
//     })
//     if (index !== -1) {
//         Database.splice(index, 1)

//     }
//     else {
//         console.log('not available')
//     }
// })

// const todos = [
//   {
//     todo: "waterplant",
//     id: 1,
//     status: "pending",
//   },
//   {
//     todo: "eat plant",
//     id: 2,
//     status: "pending",
//   },
// ];

// const arr = ["nitin", "aman", "akshay"];

// app.set("view engine", "ejs")

// app.get("/", function (req, res) {
//   res.render("home.ejs", { todos: todos });
// });
// })

// app.get("/todo", (req, res) => {
//   res.redirect("/");
// });

// app.get("/todo/:index", (req, res) => {
//   const { index } = req.params;
//   res.redirect("/");
// });

// app.put("/todo", (req, res) => {
//   const { status, task, id } = req.body;

//   let itemIndex = todos.findIndex((item) => {
//     return item.id === id;
//   });

//   todos[itemIndex].status = status;
//   todos[itemIndex].todo = task;

//   res.redirect("/");
// });

// app.post("/todo", (req, res) => {
//   const { task } = req.body;
//   todos.push({
//     todo: task,
//     status: "pending",
//     id: Date.now(),
//   });
//   res.redirect("/");
// });

// app.get("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   let itemIndex = todos.findIndex((item) => {
//     return item.id == id;
//   });

//   if (itemIndex !== -1) {
//     todos.splice(itemIndex, 1);
//     res.redirect("/");
//   }
// });

// app.get("/update/:id", (req, res) => {
//   const { id } = req.params;

//   let itemIndex = todos.findIndex((item) => {
//     return item.id == id;
//   });

//   todos[itemIndex].status =
//     todos[itemIndex].status == "done" ? "pending" : "done";

//   res.redirect("/");
//   // 1
// });

// app.get("/deleteAll", (req, res) => {
//   // todos=[]
//   todos.splice(0, todos.length);
//   res.redirect("/");
// });

// app.get("/edit/:id", (req, res) => {
//   res.render("edit.ejs", { id: req.params.id, todos });
// });

// app.post("/edit/:id", (req, res) => {
//   const id = req.params.id;
//   const { task } = req.body;

//   let itemIndex = todos.findIndex((item) => {
//     return item.id == id;
//   });

//   todos[itemIndex].todo = task;
//   return res.redirect("/");
// });

// let contacts=[];

// app.post("/contacts", (req, res) => {
//   const contact = req.body;
//   contacts.push(contact);
//   res.status(201).send(contacts);
// });

// app.get("/contact",(req,res)=>{
//     res.status(200).send(contacts);
// });



