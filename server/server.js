const express = require('express');
const cors = require('cors');
const app = express();

// Connect Database
const db = require('./config/db.js');

app.use(cors());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
}
);