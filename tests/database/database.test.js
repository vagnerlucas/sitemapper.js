const expect = require('chai').expect;
const DatabaseHelper = require('../../lib/db/database');

describe('DatabaseHelper', () => {
    it('should get some data from database', () => {
        let dbHelper = new DatabaseHelper();

        return dbHelper.fetchIESRoutes().then((data) => {
            expect(data).not.to.be.null;
        });
    });
});