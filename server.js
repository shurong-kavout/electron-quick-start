const static = require('node-static');
const http = require('http');

const liteSever = new static.Server(`${__dirname}/_output`)

process.on('message', ({ LITE_PORT }) => {
    const server = http.createServer((request, response) => {
        request.addListener('end', () => {
            liteSever.serve(request, response)
        }).resume()
    }).listen(LITE_PORT)
});

