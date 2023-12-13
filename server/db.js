const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Prasanna@1999",
    host: "localhost",
    port: "5432",
    database: "api",
});

module.exports = pool;