const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ]
},{timestamps:true});

export const Todo = mongoose.model('Todo', todoSchema);