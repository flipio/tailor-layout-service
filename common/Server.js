/**
 * Created by filip on 10/11/16.
 */
var http = require('http');
var _ = require('lodash');
var fs = require('fs');
var url = require('url');

class Server {

    constructor(config) {

        config = config || {};
        config.port = config.port || 8081;

        this.config = Object.assign({

            mainCSS: 'main.css',
            mainJS: 'main.js',
            mainHTML: 'index.html',

            host: 'http://localhost',
            port: 8081

        }, config);

        this.config.url = `${this.config.host}:${this.config.port}`;
    }

    startServer() {
        this.server = http.createServer(this.handler.bind(this));
        this.server.listen(this.config.port);
    }

    _getFileType(url) {
        let _split = url.split('/');
        let _file = _split[_split.length - 1];

        return _file.split('.')[1];
    }

    _getContentType(extension) {
        var _contentType = '';

        switch (extension) {
            case 'html':
                _contentType = 'text/html';
                break;
            case 'css':
                _contentType = 'text/css';
                break;
            case 'js':
                _contentType = 'application/javascript';
                break;
            default:
                _contentType = 'text/html';
                break;
        }

        return _contentType;
    }

    handler(request, response) {

        const pathname = url.parse(request.url).pathname;
        const config = this.config;

        var name = this.config.name;
        var isMainHtml = pathname === '/' || pathname === 'index.html';

        var _url = isMainHtml ?
            `${__dirname}/../fragments/${name}/src/${config.mainHTML}`
            : `${__dirname}/../fragments${request.url}`;

        fs.readFile(_url, (err, content) => {

            let _linkHeaders = [
                // `<${config.url}/${config.name}/css/${config.mainCSS}>; rel="stylesheet",`,
                `<${config.staticUrl}/${config.mainJS}>; rel="fragment-script"`
            ];

            let _headers = {
                'Content-Type': this._getContentType(this._getFileType(pathname))
            };

            if (err) {
                console.log(err);
            } else {

                if (isMainHtml) {
                    _headers['Link'] = _linkHeaders.join('');
                }

                response.writeHead(200, _headers);
                response.end(content);
            }
        });


    }

}

module.exports = Server;