const express = require('express');
const app = express();

const PORT = 80;

app.use(express.static('build'));

app.listen(PORT, () => {console.log(`Analytics online on port ${PORT}`)});