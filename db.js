(function () {
    var postgres = require('pg');
    var connectionString = 'postgres://localhost:5432/prophetic_creations';
    var client = new postgres.Client(connectionString);
    client.connect();

    var db = {};

    db.create = function (table_name, data) {
        var sql = 'INSERT INTO ' + table_name + ''
    }

    module.exports = db;
})();