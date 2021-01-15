const express = require('express');
const cors = require('cors');

const app = express();

const mountRoutes = require('./mountRoutes')
mountRoutes(app);

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

