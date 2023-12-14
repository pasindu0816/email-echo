const express = require('express');
const app = express();

app.get('/', (req, res) => {                     // -
    res.send({ hi: 'there' });                   //  |- <--- A Route Handler
});                                              // -

const PORT = process.env.PORT || 5000;
app.listen(PORT);