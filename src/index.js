const express = require('express');
//server to see client's querys
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

const app = express();

app.set('port', process.env.PORT || 3000);

//important midlewares as always
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', require('./routes/task.routes'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})
