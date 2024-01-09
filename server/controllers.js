const queries = require("./queres");
const pool = require("./db");

const getAllTodo = async (req, res) => {
  try {
    const allTodo = await pool.query(queries.getAllTodos);
    res.json(allTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo_id = req.params.id;
    const todo = await pool.query(queries.getTodoById, [todo_id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(queries.addNewTodo, [description]);
    res.send("todo create successfully").json(newTodo.rows[o]);
  } catch (error) {
    console.error(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo_id = req.params.id;
    const { description } = req.body;
    const updateTodo = await pool.query(queries.updateTodo, [
      description,
      todo_id,
    ]);
    res.send("todo is updated");
  } catch (error) {
    console.error(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo_id = req.params.id;
    const deleteTodo = await pool.query(queries.deleteTodo, [todo_id]);
    res.send("todo is deleted");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllTodo,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
};
