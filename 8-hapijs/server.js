const Hapi = require('Hapi');
const Good = require('good');

const server = new Hapi.Server();

server.connection({
    port: 4455,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello World');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + encodeURIComponent(request.params.name));
    }
});

// server.register(require('inert'), (err)=> {
//     if(err){
//         throw err;
//     }

//     server.route({
//         method: 'GET',
//         path: '/hello',
//         handler: function(request, reply){
//             reply.file('./public/hello.html');
//         }
//     }); 
// });

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {
    if (err) {
        throw err;
    }

    server.start((err) => {
        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });
});

