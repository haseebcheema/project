const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

const connectPostgresDB = async () => {
  try {
    await pool.connect();
    console.log("PostgreSQL connected");
  } catch (error) {
    console.error("PostgreSQL connection error:", error.message);
  }
};

module.exports = { pool, connectPostgresDB };
