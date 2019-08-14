const express = require('express');
const app = express();
const path = require('path')
const logger = require('morgan');
const skillsRouter = require('./routes/skills');
const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use('/', skillsRouter);

app.listen(port, function () {
    console.log(`Express is listening on port ${port}`);
});