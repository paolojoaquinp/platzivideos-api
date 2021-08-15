const boom = require('@hapi/boom');

function notFunctionHandler(req, res) {
    const {
        output: { statusCode, payload }
    } = boom.notFound();
    res.status(statusCode).json(payload);
}

module.exports = notFunctionHandler