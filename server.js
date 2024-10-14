
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/todoapp')
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });


app.use('/tasks', taskRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
