const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const livrosRoutes = require('./routes/livros');
const movimentacoesRoutes = require('./routes/movimentacoes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/', livrosRoutes);
app.use('/', movimentacoesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
