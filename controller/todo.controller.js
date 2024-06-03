const Todo = require("../model/todo.model.js");
// get all todo
async function getTodos(req, res) {
  const todo = await Todo.find({ user: req.user._id });
  res.render("todo.ejs", { todos: todo, username: req.user.username });
}

// method GET
// @route/todo/:index
// function getSingleTodo(req,res){
//     const {index}=req.params
//     res.json(todo[index])
// }

async function getSingleTodo(req, res) {
  const { id } = req.params;
  const todo = await Todo.findOne({ _id: id });
  res.render("singleTodo.ejs", {
    status: todo.status,
    todo: todo.todo,
    id: todo._id,
    username: req.user.username,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  });
}

// function updateTodo(req,res){
//     const {status,task,id}=req.body
//     let itemIndex=todos.findIndex((item)=>{
//         return item.id==id
//     })
//     todos[itemIndex].status = status
//     todos[itemIndex].status = task
//     res.json(todos)
// //   res.redirect("/");
// }

async function updateTodo(req, res) {
  const { id } = req.params;
  const { task, status } = req.body;
  let statusValue = status == "on" ? true : false;
  let item = await Todo.updateOne(
    { _id: id },
    { todo: task, status: statusValue }
  );
  res.redirect("/todo");
}

async function addTodo(req, res) {
  const { task } = req.body;
  await Todo.create({
    todo: task,
    user: req.user._id,
    isPublic: isPublic,
  });
  res.redirect("/todo");
}

async function getPublicTodos(req, res) {
  const todos = await Todo.find({ isPublic: true }).populate("user");
  console.log(todos);
  res.render("publicTodos", { todos: todos, username: req.user.username });
}

async function deleteTodo(req, res) {
  const { id } = req.params;
  const todo = await Todo.deleteOne({ _id: id });
  res.redirect("/todo");
}

module.exports = {
  getSingleTodo,
  updateTodo,
  getTodos,
  addTodo,
  deleteTodo,
  getPublicTodos,
};
