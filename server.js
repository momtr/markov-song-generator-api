const express = require('express');

const app = express();
app.use(express.json());

const api = require('./api');
app.use('/api/v1', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});