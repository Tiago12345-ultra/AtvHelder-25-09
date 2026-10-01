const express = require("express");
const router = express.Router();

const {
listarLivros,
cadastrarLivro
} = require("../controllers/livrosController");

router.get("/", listarLivros);
router.post("/", cadastrarLivro);

module.exports = router;