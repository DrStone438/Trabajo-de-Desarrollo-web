const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
});
app.engine('.hbs', hbs.engine); // Usa el motor correctamente
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // Esto permite manejar datos enviados como JSON
// Global Variables


// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;