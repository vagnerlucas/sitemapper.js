const xml = require('xml');
const datetime = require('node-datetime');

function XmlWritter() {
  this.data = '';

  const writeToXml = object => xml(object, ' ');

  this.writeSitemap = (value, appendToData = false) => {
    if (value) {
      const output = {
        sitemap: [{
          loc: value,
        },
        {
          lastmod: datetime.create().format('m-d-Y'),
        }],
      };
      const result = writeToXml(output);
      if (appendToData) {
        this.data += `${result}\n`;
      } else {
        this.data = result;
      }

      return output;
    }
    return null;
  };

  this.writeObject = (object, appendToData = false) => {
    if (object) {
      if (appendToData) {
        this.data += `${writeToXml(object)}\n`;
      } else {
        this.data = writeToXml(object);
      }
      return this.data;
    }
    return null;
  };
}

module.exports = XmlWritter;
