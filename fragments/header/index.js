/**
 * Created by filip on 10/11/16.
 */
var Server = require('../../common/Server');

class HeaderServer extends Server {

    constructor(config) {
        super(config);

        this.config.name = 'header';
        this.config.mainJS = 'header.js';

        this.startServer();
    }

}

module.exports = HeaderServer;