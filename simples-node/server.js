const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//iniciando o app
const app = express();

//permissao para enviar o formato em json
app.use(express.json());
app.use(cors());

//iniciando o db
mongoose.connect('server-do-mongo', {
    useNewUrlParser: true,
   useUnifiedTopology: true 
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));


app.listen(3333)