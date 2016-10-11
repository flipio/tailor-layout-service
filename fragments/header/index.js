/**
 * Created by filip on 10/11/16.
 */
var Server = require('../../common/Server');

class HeaderServer extends Server {
    constructor(config) {
        super(config);

        this.startServer(this.handler);
    }

    handler() {

    }
}
module.exports = HeaderServer;