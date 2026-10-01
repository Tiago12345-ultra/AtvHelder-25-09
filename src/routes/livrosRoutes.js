const express = require("express");
const router = express.Router();

const {
listarLivros,
cadastrarLivro,
buscarLivro
} = require("../controllers/livrosController");

router.get("/", listarLivros);
router.post("/", cadastrarLivro);
router.get("/:id", buscarLivro);

module.exports = router;