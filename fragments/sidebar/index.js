/**
 * Created by filip on 10/11/16.
 */

var Server = require('../../common/Server');

class SidebarServer extends Server {

    constructor(config) {
        super(config);

        this.config.name = 'sidebar';
        this.config.mainJS = 'sidebar.js';

        this.startServer();

    }

}

module.exports = SidebarServer;