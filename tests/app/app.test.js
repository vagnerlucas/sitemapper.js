const expect = require('chai').expect
const XmlWritter = require('../../lib/xml/writter')
const DatabaseHelper = require('../../lib/db/database')
const compressor = require('../../lib/compressor/compressor')

describe('AppTests', () => {
    it('should create a sitemap of courses', async () => {
        let xml = new XmlWritter();
        let db = new DatabaseHelper();

        let data = await db.fetchGenericCourseRoutes();



    });
});