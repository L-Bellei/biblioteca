const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rota para a página de cadastro de livros
router.get('/cadastro', mainController.getCadastro);
router.post('/cadastro', mainController.createLivro);

module.exports = router;
