const { expect } = require('chai');
const XmlWritter = require('../../lib/xml/writter');

describe('XmlWritter', () => {
  it('should create a XML node with sitemap structure', () => {
    const xmlWritter = new XmlWritter();
    const result = xmlWritter.writeSitemap('marcos');
    expect(result).to.not.equal(null);
  });

  it('should concatenate XML data', () => {
    const xmlWritter = new XmlWritter();
    const result = xmlWritter.writeSitemap('marcos', true);
    xmlWritter.writeObject({ data: 'vrl' }, true);
    xmlWritter.writeObject(result, true);
    xmlWritter.writeObject({ test: 'vrl' }, true);
    return expect(xmlWritter.data).to.not.be.null;
  });
});
