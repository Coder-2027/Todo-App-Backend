const Todo = require("../model/todoSchema");

exports.deleteById = async (req, res) => {
    const id = req.params.id;

    try{
        const data = await Todo.findByIdAndDelete({_id : id});

        if(!data){
            res.status(404)
           .json({
                success: false,
                message: 'Todo not found in database',
           })
        }

        res.status(200)
       .json({
            success: true,
            message: 'Todo deleted successfully in database',
            data : data,
       })
    }catch(err) {
        console.log("Error deleting Todo");
        res.status(500)
       .json({
            success: false,
         message: err.message,
       });
    }
}