const expect = require('chai').expect;
const DatabaseHelper = require('../../lib/db/database');

describe('DatabaseHelper', () => {
    it('should get some data from database', async () => {
        let dbHelper = new DatabaseHelper();
        let data = await dbHelper.fetchGenericCourseRoutes();
        console.log(data);
        expect(data).not.to.be.null;
    });
});