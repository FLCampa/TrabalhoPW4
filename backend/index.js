const server = require('./application/config/init.js');

server.listen(80, () => {
    console.log('Rodando na porta 80');
});