/**
 * Created by filip on 10/11/16.
 */
var Server = require('../../common/Server');

class FooterServer extends Server {

    constructor(config) {
        super(config);

        this.config.name = 'footer';
        this.config.staticURL = 'http://localhost:8080/';
        this.config.mainJS = 'app.js';

        this.startServer();

    }

}

module.exports = FooterServer;