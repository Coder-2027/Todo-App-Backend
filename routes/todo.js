const express = require('express');
const router = express.Router();

const { createTodo } = require('../controllers/createTodo');
const { getAllTodos, getTodoById } = require('../controllers/gettodo');
const { deleteById } = require('../controllers/delete');
const { updateTodo } = require('../controllers/updateTodo');

router.post('/createTodo', createTodo);
router.get('/getTodoById/:id', getTodoById);
router.get('/getAllTodos', getAllTodos);
router.delete('/deleteById/:id', deleteById);
router.put('/updateTodo/:id', updateTodo);

module.exports = router;