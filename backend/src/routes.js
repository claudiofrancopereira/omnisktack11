const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        message: 'Omnistack 11'
    });
});

module.exports = routes;