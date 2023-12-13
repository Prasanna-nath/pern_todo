const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const pool = require("./db");
const { Pool } = require("pg");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM todo;");
    res.json(allTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/:todo_id", async (req, res) => {
  try {
    const { todo_id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1;", [
      todo_id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *;",
      [description]
    );
    res.json(newTodo.rows[o]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/:todo_id", async (req, res) => {
  try {
    const { todo_id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, todo_id]
    );
    res.send("todo is updated");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/:todo_id", async (req, res) => {
  try {
    const { todo_id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      todo_id,
    ]);
    res.send("todo is deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
