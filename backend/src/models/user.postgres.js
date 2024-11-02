const { pool } = require("../config/db.postgres");

const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log("Users table created successfully");
  } catch (err) {
    console.error("Error creating users table:", err.message);
  }
};

const createUser = async (name, email, password) => {
  const queryText = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  try {
    const result = await pool.query(queryText, [name, email, password]);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating user:", err.message);
    throw err;
  }
};

const findUserByEmail = async (email) => {
  const query = `
    SELECT * FROM users WHERE email = $1;
  `;

  try {
    const result = await pool.query(query, [email]);
    return result.rows[0];
  } catch (err) {
    console.error("Error finding user by email:", err.message);
    throw err;
  }
};

// createUsersTable();

module.exports = {
  createUser,
  findUserByEmail,
};
