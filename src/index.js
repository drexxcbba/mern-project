const express = require('express');
//server to see client's querys
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);

//important midlewares as always
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/task.routes'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})
