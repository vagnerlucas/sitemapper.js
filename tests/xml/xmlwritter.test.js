const { expect } = require('chai');
const XmlWritter = require('../../lib/xml/writter');

describe('XmlWritter', () => {
  it('should create a sitemap.xml structure', () => {
    const xmlWritter = new XmlWritter();
    xmlWritter.addToUrlSet('test', 'daily');
    xmlWritter.addToUrlSet('test2', 'monthly', '1.0', true);
    xmlWritter.close();
    // console.log(xmlWritter.data);
    return expect(xmlWritter.data).to.not.be.null;
  });
});
