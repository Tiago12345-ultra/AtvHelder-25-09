const livros = [];
function listarLivros(req, res) {
  res.json(livros);}


function cadastrarLivro(req, res) {
const novoLivro = {
id: livros.length + 1,
titulo: req.body.titulo,
autor: req.body.autor};


livros.push(novoLivro);
res.status(201).json(novoLivro);}

module.exports = {
listarLivros,
cadastrarLivro
};