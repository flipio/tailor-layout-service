/**
 * Created by filip on 10/11/16.
 */

var Server = require('../../common/Server');

class MainServer extends Server {

    constructor(config) {
        super(config);

        this.config.name = 'main';

        this.startServer();

    }

}

module.exports = MainServer;