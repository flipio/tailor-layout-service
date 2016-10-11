'use strict';
const url = require('url');

module.exports = (fragmentName, fragmentUrl) => (request, response) => {
    const pathname = url.parse(request.url).pathname;
    
    var _color = (function () {
        let c;

        switch (fragmentName) {
            case 'header':
                c = 'blue';
                break;
            case 'footer':
                c = 'green';
                break;
            default:
                c = 'white';
        }

        return c;
    })();

    switch (pathname) {
        case `/${fragmentName}.js`:
            // serve fragment's JavaScript
            response.writeHead(200, {'Content-Type': 'application/javascript'});
            response.end(`
                define ([],  function() {
                    return function initFragment (element) {
                        //element.className += ' fragment-${fragmentName}-initialised';
                        //element.innerHTML += '${fragmentName}';
                    };
                });
            `);
            break;
        case `/${fragmentName}.css`:
            // serve fragment's CSS
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.end(`
                .fragment-${fragmentName} {
                    padding: 30px;
                    margin: 10px;
                    text-align: center;
                    
                    background: lightgray;
                    color: ${_color}

                }
                .fragment-${fragmentName}-initialised {
                    background-color: lightgrey;
                }
            `);
            break;
        default:
            // serve fragment's body
            response.writeHead(200, {
                'Link': `<${fragmentUrl}/${fragmentName}.css>; rel="stylesheet",` +
                `<${fragmentUrl}/${fragmentName}.js>; rel="fragment-script"`,
                'Content-Type': 'text/html'
            });

            response.end(`
                <div class="fragment-${fragmentName}">
                    Fragment ${fragmentName}
                </div>
            `);
    }
};
