const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Serviços funcionando!");
});

module.exports = router;
