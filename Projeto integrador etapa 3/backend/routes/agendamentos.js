const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Agendamentos funcionando!");
});

module.exports = router;
