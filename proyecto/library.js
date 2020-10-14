const request = require('request');

var url = 'https://api.adviceslip.com/advice';

function obtenerConsejo(callback){

    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            return callback(JSON.parse(body));
        }  
});
}

module.exports = obtenerConsejo;