var express = require('express');
var router = express.Router();
var Todo = require('../Model/TodoSchema');
/* GET home page. */
router.get('/add', async function(req, res) 
{
  res.render("CRUD/AddTask");
});
router.post('/add',  async function(req, res) 
{
  let data = new Todo(req.body);
  await data.save();
  res.redirect("/task/list");

});
//list tasks data
router.get('/list', async function(req, res) 
{
  let task = await Todo.find();
  res.render('CRUD/ViewTask' ,{task});
});

router.get('/edit/:id', async function(req, res) 
{
  let task = await Todo.findById(req.params.id);
  return res.render("CRUD/EditTask", {task});
});
/* update task data. */
router.post('/edit/:id',  async function(req, res) 
{
  let task = await Todo.findById(req.params.id);
  task.TaskTitle= req.body.TaskTitle;
  task.TaskDesc= req.body.TaskDesc;
  task.DueData= req.body.DueData;
  task.DueTime= req.body.DueTime;
  task.Status= req.body.Status;
  await task.save();
  return res.redirect("/task/list");

});

//delete task data
router.get('/delete/:id', async function(req, res) 
{
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/task/list");
});
module.exports = router;
