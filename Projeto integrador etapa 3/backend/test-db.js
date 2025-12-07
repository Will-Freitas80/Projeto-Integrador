const pool = require("./db");

pool.query("SELECT NOW()")
    .then(res => {
        console.log("Conexão OK →", res.rows[0]);
        process.exit();
    })
    .catch(err => {
        console.error("ERRO NA CONEXÃO →", err);
        process.exit();
    });
