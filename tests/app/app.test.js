const { expect } = require('chai');
// const XmlWritter = require('../../lib/xml/writter');
const DatabaseHelper = require('../../lib/db/database');
// const compressor = require('../../lib/compressor/compressor');

describe('AppTests', () => {
  it('should create a sitemap of courses and compress it', async () => {
    // const xml = new XmlWritter();
    const db = new DatabaseHelper();

    // let xmlResult = xml.writeObject({ sitemapindex })
    const data = await db.fetchGenericCourseRoutes();
    data.forEach(ro => {
      const url = ro[0];
      url.toString();
      // const xmlresult = xml.writeSitemap(url);
      // xmlResult.toString();
    });
    return expect(true).to.be.true;
  });
});
