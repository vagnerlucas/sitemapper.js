const expect = require('chai').expect;
const XmlWritter = require('../../lib/xml/writter');

describe('XmlWritter', () => {
    it('should create a XML node with sitemap structure', () => {
        let xmlWritter = new XmlWritter();
        let result = xmlWritter.writeSitemap('marcos');
        expect(result).to.not.equal(null);
    });


    it('should concatenate XML data', () => {
        let xmlWritter = new XmlWritter();
        let result = xmlWritter.writeSitemap('marcos', true);
        xmlWritter.writeObject({data: 'vrl'}, true);
        xmlWritter.writeObject(result, true);
        xmlWritter.writeObject({test: 'vrl'}, true);
        expect(xmlWritter.data).to.not.be.null;
    });
})