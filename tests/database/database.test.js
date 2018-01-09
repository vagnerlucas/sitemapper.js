const { expect } = require('chai');
const DatabaseHelper = require('../../lib/db/database');

describe('DatabaseHelper', () => {
  it('should get some data from database', async () => {
    const dbHelper = new DatabaseHelper();
    const data = await dbHelper.fetchGenericCourseRoutes();
    return expect(data).not.to.be.null;
  });
});
