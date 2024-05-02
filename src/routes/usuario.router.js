const express = require("express");
const router = express.Router();
const generarUsuarios = require("../utils/utils.js");

router.get("/", (req, res) => {
    const usuario = [];
    for (let i = 0; i < 10; i++ ){
        usuario.push(generarUsuarios());
    }
  res.json(usuario);
});

module.exports = router;