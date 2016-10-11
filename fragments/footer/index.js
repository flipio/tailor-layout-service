/**
 * Created by filip on 10/11/16.
 */
var Server = require('../../common/Server');

class FooterServer extends Server {

    constructor(config) {

        super(config);
        this.config.name = 'footer';
        this.config.mainJS = 'footer.js';

        this.startServer(this.handler);

    }

}
module.exports = FooterServer;