const { expect } = require('chai');
const XmlWritter = require('../../lib/xml/writter');

describe('XmlWritter', () => {
  // it('should create a XML node with sitemap structure', () => {
  //   const xmlWritter = new XmlWritter();
  //   const result = xmlWritter.writeSitemap('marcos');
  //   expect(result).to.not.equal(null);
  // });

  it('should create urlset header', () => {
    const xmlWritter = new XmlWritter();
    xmlWritter.addToUrlSet('test');
    xmlWritter.addToUrlSet('test2');
    xmlWritter.close();
    // console.log(xmlWritter.data);
    return expect(xmlWritter.data).to.not.be.null;
  });
});
