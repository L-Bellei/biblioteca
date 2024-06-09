const { Livro, Estoque, Transacao } = require('./index');

async function initData() {
	const livros = [
		{ titulo: 'A Sociedade do Anel', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', dataLancamento: '1954-07-29', quantidade: 10 },
		{ titulo: 'As Duas Torres', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', dataLancamento: '1954-11-11', quantidade: 10 },
		{ titulo: 'O Retorno do Rei', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', dataLancamento: '1955-10-20', quantidade: 10 },
		{ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', dataLancamento: '1937-09-21', quantidade: 10 },
		{ titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '1997-06-26', quantidade: 10 },
		{ titulo: 'Harry Potter e a Câmara Secreta', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '1998-07-02', quantidade: 10 },
		{ titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '1999-07-08', quantidade: 10 },
		{ titulo: 'Harry Potter e o Cálice de Fogo', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '2000-07-08', quantidade: 10 },
		{ titulo: 'Harry Potter e a Ordem da Fênix', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '2003-06-21', quantidade: 10 },
		{ titulo: 'Harry Potter e o Enigma do Príncipe', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '2005-07-16', quantidade: 10 },
		{ titulo: 'Harry Potter e as Relíquias da Morte', autor: 'J.K. Rowling', categoria: 'Fantasia', dataLancamento: '2007-07-21', quantidade: 10 },
		{ titulo: 'A Game of Thrones', autor: 'George R.R. Martin', categoria: 'Fantasia', dataLancamento: '1996-08-06', quantidade: 10 },
		{ titulo: 'A Clash of Kings', autor: 'George R.R. Martin', categoria: 'Fantasia', dataLancamento: '1998-11-16', quantidade: 10 },
		{ titulo: 'A Storm of Swords', autor: 'George R.R. Martin', categoria: 'Fantasia', dataLancamento: '2000-08-08', quantidade: 10 },
		{ titulo: 'A Feast for Crows', autor: 'George R.R. Martin', categoria: 'Fantasia', dataLancamento: '2005-10-17', quantidade: 10 },
		{ titulo: 'A Dance with Dragons', autor: 'George R.R. Martin', categoria: 'Fantasia', dataLancamento: '2011-07-12', quantidade: 10 },
	];

	for (const livro of livros) {
		const livroCriado = await Livro.create(livro);
		await Estoque.create({ livroId: livroCriado.id, quantidade: livro.quantidade });
		await Transacao.create({ livroId: livroCriado.id, tipo: 'entrada', quantidade: livro.quantidade });
	}

	console.log('Dados inseridos com sucesso!');
}

initData();
