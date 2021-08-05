const static = require('node-static');
const http = require('http');
const web = new static.Server(`${__dirname}/_output`)

const server = http.createServer((request, response) => {
    request.addListener('end', () => {
        web.serve(request, response)
    }).resume()
}).listen(8081)