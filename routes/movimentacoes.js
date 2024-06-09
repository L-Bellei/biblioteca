const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rota para a página de movimentações
router.get('/movimentacoes', mainController.getMovimentacoes);
router.post('/movimentacoes', mainController.registrarTransacao);

module.exports = router;
