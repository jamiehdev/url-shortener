require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use('/', urlRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));