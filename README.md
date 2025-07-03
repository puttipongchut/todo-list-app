# My Todo List Web Application ✨

My First Fullstack Project that I built, A simple and minimal Todo list app that features a full CRUD on the Database.
This project was built for my own learning goal : learning backend development, basic Postgres queries and implementation.

Tech Stack : React (Vite) + TailwindCSS + Express.js + Node.js + PostgreSQL (Docker Image)

## Screenshots
![image](https://github.com/user-attachments/assets/0804685e-a8cc-4a5d-991a-db4675278310)


## Installation

To run this app locally, <br><br>
Clone this repository using
```
git clone https://github.com/puttipongchut/todo-list-app.git
```

### Frontend Installation

- Navigate to the /client directory
  ```
  cd client
  ```
- Install dependencies
  ```
  npm install
  ```
- Start the frontend environment
  ```
  npm run dev
  ```
### Backend Installation

**Make sure Node.js verison v22.16.0 or higher is installed** <br>
**And make sure you have your own .env file and variables**

  - Navigate to the /server directory
    ```
    cd server
    ```
  - Install dependencies
    ```
    npm install
    ```
  - Start the backend environment
    ```
    node index.js
    ```
### PostgreSQL Setup

You can run this locally using Pure PostgreSQL or Docker Image (I personally recommend Docker)

For Docker setup See: https://hub.docker.com/_/postgres

- For Database Schema, in psql or other providers run:
  ```
  CREATE DATABASE todolist;
  ```
  ```
  \c todolist;
  ```
  ```
  CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
  );
  ```
  **SQL Code is provided in server/database.sql directory**
