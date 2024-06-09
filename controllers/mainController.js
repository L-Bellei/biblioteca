const { Livro, Estoque, Transacao } = require('../models');

exports.home = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = 10;

	const { docs, pages, total } = await Livro.paginate({
		page,
		paginate: limit,
		include: [{ model: Estoque }],
	});

	res.render('home', { livros: docs, page, pages, total });
};

exports.getCadastro = (req, res) => {
	res.render('cadastro');
};

exports.createLivro = async (req, res) => {
	const { titulo, autor, categoria, dataLancamento, quantidade } = req.body;
	const livro = await Livro.create({ titulo, autor, categoria, dataLancamento });
	await Estoque.create({ livroId: livro.id, quantidade });
	await Transacao.create({ livroId: livro.id, tipo: 'entrada', quantidade });
	res.redirect('/');
};

exports.getMovimentacoes = async (req, res) => {
	const livros = await Livro.findAll({ include: [Estoque, Transacao] });
	res.render('movimentacoes', { livros });
};

exports.registrarTransacao = async (req, res) => {
	const { livroId, tipo, quantidade } = req.body;
	const livro = await Livro.findByPk(livroId, { include: Estoque });

	if (tipo === 'saida' && livro.Estoque.quantidade < quantidade) {
		return res.status(400).send('Quantidade insuficiente em estoque');
	}

	const novaQuantidade = tipo === 'entrada' ? livro.Estoque.quantidade + parseInt(quantidade) : livro.Estoque.quantidade - parseInt(quantidade);

	await livro.Estoque.update({ quantidade: novaQuantidade });
	await Transacao.create({ livroId, tipo, quantidade });
	res.redirect('/movimentacoes');
};
