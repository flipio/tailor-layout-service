'use strict';
const http = require('http');
const path = require('path');
const Tailor = require('node-tailor');
const fetchTemplateFs = require('node-tailor/lib/fetch-template');
const Fragments = require('./fragments');
const baseTemplateFn = () => 'base-template';

const tailor = new Tailor({
    fetchTemplate: fetchTemplateFs(path.join(__dirname, 'templates'), baseTemplateFn)
});

const server = http.createServer((req, res) => {

    console.log(req.url);
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        return res.end('');
    }

    console.log(req.url);

    var response;

    if (req.url === '/') {
        req.url = '/index';
    }

    try {
        response = tailor.requestHandler(req, res);
    } catch(e) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
        response = res;
    }

    return response;
});

server.listen(8080);

console.log('Tailor started at port 8080.');

/*
 * Fragment 1
 */
const fragment1 = http.createServer(
    Fragments.fragment('hello', 'http://localhost:8081')
);
fragment1.listen(8081);

console.log('Fragment1 started at port 8081');

/*
 * Fragment 2
 */
const fragment2 = http.createServer(
    Fragments.fragment('world', 'http://localhost:8082')
);
fragment2.listen(8082);

console.log('Fragment2 started at port 8082');

/*
 * Fragment 1
 */

const mainFragment = new Fragments.main({port: 8083});
const headerFragment = new Fragments.header({port: 8084});
const footerFragment = new Fragments.footer({port: 8085});
const sidebarFragment = new Fragments.sidebar({port: 8086});
const layoutsService = new Fragments.layouts({port: 8087});

