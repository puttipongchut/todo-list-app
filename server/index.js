import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import testRoutes from './routes/test.js';
import pool from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes

// Create a todo
app.post('/api/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING * ",
            [description]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// Get all todo lists
app.get("/api/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.log(err.message);
    }
});

// Get a todo
app.get("/api/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// Update a todo
app.put("/api/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("Todo was updated!");
    } catch (err) {
        console.log(err.message);
    }
});

// Delete a todo
app.delete("/api/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

// Route for testing
// app.use('/api/test', testRoutes);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));