const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});