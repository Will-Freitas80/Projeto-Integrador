const { Pool } = require("pg");

const pool = new Pool({
    host: "127.0.0.1",          // mais seguro para evitar ::1 IPv6
    user: "postgres",
    password: "masterkey",
    database: "agendamento_db",
    port: 5432
});

pool.connect()
    .then(() => console.log("Conectado ao PostgreSQL!"))
    .catch(err => console.error("Erro ao conectar ao PostgreSQL:", err));

module.exports = pool;
