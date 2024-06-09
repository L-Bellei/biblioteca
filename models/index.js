const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const sequelizePaginate = require('sequelize-paginate');

const Livro = sequelize.define('Livros', {
	titulo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	autor: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: false,
	},
	categoria: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: false,
	},
	dataLancamento: {
		type: Sequelize.DATE,
		allowNull: false,
		unique: false,
	},
});

const Estoque = sequelize.define('Estoque', {
	quantidade: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
});

const Transacao = sequelize.define('Transacao', {
	tipo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	quantidade: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	livroId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

Livro.hasOne(Estoque, { foreignKey: 'livroId' });
Estoque.belongsTo(Livro, { foreignKey: 'livroId' });
Livro.hasMany(Transacao, { foreignKey: 'livroId' });
Transacao.belongsTo(Livro, { foreignKey: 'livroId' });

sequelizePaginate.paginate(Livro);

sequelize.sync();

module.exports = {
	Livro,
	Estoque,
	Transacao,
};
