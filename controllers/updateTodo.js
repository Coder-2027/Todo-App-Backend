const Todo = require('../model/todoSchema');

exports.updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const data = await Todo.findByIdAndUpdate(id, {title, description});

        if(!data){
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data : data,
        });
    }catch(err){
        console.log("Error updating Todo");
        res.status(500)
       .json({
            success: false,
            message: err.message,
       })
    }
}