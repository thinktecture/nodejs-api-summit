'use strict';

const Sequelize = require('sequelize');

class Database {
    constructor() {
        this._models = {};
        this._sequelize = void 0;
    }

    init() {
        // TODO: Implement me! (Sequelize init)
    }

    _initModels() {
        // TODO: Implement me! (Import model)
    }
}

let database;

module.exports = {
    get: () => {
        if (database) {
            return Promise.resolve(database);
        }

        const db = new Database();

        return db.init()
            .then(initializedDb => {
                database = initializedDb;
                return database;
            });
    }
};
