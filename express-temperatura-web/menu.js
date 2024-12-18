const http = require('http');

const server = http.createServer((req, res) => {
    res.end('¡Bienvenido al servidor de Node.js!');
});

server.listen(4000, () => {
    console.log('El servidor está escuchando en http://localhost:4000');
});