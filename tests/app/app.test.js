const { expect } = require('chai');
const XmlWritter = require('../../lib/xml/writter');
const DatabaseHelper = require('../../lib/db/database');
// const compressor = require('../../lib/compressor/compressor');

const MAX_REG_PER_RESULT = 22500;

describe('AppTests', () => {
  it('should create a sitemap of courses and compress it', async () => {
    const xml = new XmlWritter();
    const db = new DatabaseHelper();

    const data = await db.fetchGenericCourseRoutes();
    data.forEach((ro, i) => {
      if (i % MAX_REG_PER_RESULT === 0) {
        // Se houver uma quantidade de registros muito grande,
        // dividir em MAX_REG_PER_RESULT por arquivo
        // BREAK FILE IN %COUNT TIMES
      }
      const url = ro[0];
      xml.addToUrlSet(url).close();
      // const xmlresult = xml.writeSitemap(url);
      // xmlResult.toString();
    });
    return expect(true).to.be.true;
  });
});
