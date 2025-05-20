require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());

app.use('/', urlRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
