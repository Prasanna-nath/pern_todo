const getAllTodos = "SELECT * FROM todo;";
const getTodoById = "SELECT * FROM todo WHERE todo_id = $1;";
const addNewTodo = "INSERT INTO todo (description) VALUES ($1) RETURNING *;";
const updateTodo = "UPDATE todo SET description = $1 WHERE todo_id = $2";
const deleteTodo = "DELETE FROM todo WHERE todo_id = $1";

module.exports = {
  getAllTodos,
  getTodoById,
  addNewTodo,
  updateTodo,
  deleteTodo,
};
