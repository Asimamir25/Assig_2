var mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    TaskTitle:
    {
        type: String,
        required: true,
    },
    TaskDesc:
    {
        type: String,
        required:true,
    },
    DueData:
    {
        type:String,
        required:true,
    },
    DueTime:
    {
        type:String,
        required:true,
    },
    Status:
    {
        type:String,
        required:true,
    }
});
const Todo = mongoose.model('Todoo', todoSchema);
module.exports =  Todo;
