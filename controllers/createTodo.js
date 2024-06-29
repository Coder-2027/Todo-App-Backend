const Todo = require('../model/todoSchema');
const mongoose = require('mongoose');

exports.createTodo = async (req, res) => {
    try{
        const {title, description} = req.body;
        console.log(req.body);

        const data = await Todo.create({
            title,
            description
        });

        res.status(200)
        .json({
            success: true,
             message: 'Todo created successfully in database',
             data : data,
        })
    }
    catch(err){
        console.log("Error creating Todo");
        res.status(500)
        .json({
            success: false,
             message: err.message,
         })
    }

}