const { expect } = require('chai');
const XmlWritter = require('../../lib/xml/writter');

describe('XmlWritter', () => {
  it('should create a urlset structure', () => {
    const xmlWritter = new XmlWritter();
    xmlWritter.addToUrlSet('test', 'daily');
    xmlWritter.addToUrlSet('test2', 'monthly', '1.0', true);
    xmlWritter.close();
    // console.log(xmlWritter.data);
    return expect(xmlWritter.data).to.not.be.null;
  });

  it('should create a sitemapindex structure', () => {
    const xmlWritter = new XmlWritter();
    xmlWritter.addToSitemapIndex('test', null, null, true);
    xmlWritter.addToSitemapIndex('test2', 'monthly', '1.0', true);
    xmlWritter.close();
    // console.log(xmlWritter.data);
    return expect(xmlWritter.data).to.not.be.null;
  });
});
