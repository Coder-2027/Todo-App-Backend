const Todo = require ("../model/todoSchema");

exports.getAllTodos = async (req, res) => {
    try{
        const todo = await Todo.find({});
        if(!todo){
            res.status(404)
           .json({
            success: false,
            message: "No Todos Found",
           })    
        }

        res.status(200)
       .json({
            success: true,
            data: todo,
       })
    }
    catch(err){
        console.log("Error getting Todos");
        console.error(err);
        res.status(500)
       .json({
            success: false,
            message: err.message,
       });
    }
}

exports.getTodoById = async (req, res) => {
    const id = req.params.id;
    try{
        const todo = await Todo.findById({_id : id});
        if(!todo){
            res.status(404)
           .json({
            success: false,
            message: "No Todos Found",
           })    
        }

        res.status(200)
       .json({
            success: true,
            data: todo,
       })
    }
    catch(err){
        console.log("Error getting Todos");
        console.error(err);
        res.status(500)
       .json({
            success : false,
            message: err.message,
       });
    }
}