const express = require('express');
const app = express();

const PORT = 8081;

app.use(express.static('build'));

app.listen(PORT, () => {console.log(`Analytics online on port ${PORT}`)});