/**
 * Created by filip on 10/12/16.
 */
/**
 * Created by filip on 10/11/16.
 */

var Server = require('../../common/Server');

class LayoutsServer extends Server {

    constructor(config) {
        super(config);

        this.config.name = 'layouts';

        this.startServer();

    }

}

module.exports = LayoutsServer;