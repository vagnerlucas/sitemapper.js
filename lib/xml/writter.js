const convert = require('xml-js');
const datetime = require('node-datetime');

function XmlWritter() {
  this.data = '';
  this.urlSetElement = {
    elements: [{
      type: 'element',
      name: 'urlset',
      attributes: {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation': 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
      },
      elements: [],
    }],
  };

  const addUrltoSet = element => {
    this.urlSetElement.elements[0].elements.push(element);
  };

  this.addToUrlSet = (url, freq, priority, update) => {
    if (url) {
      const obj = {
        type: 'element',
        name: 'url',
        elements: [{
          type: 'element',
          name: 'loc',
          elements: [{
            type: 'text',
            text: url,
          }],
        }],
      };

      if (freq) {
        obj.elements.push({
          type: 'element',
          name: 'changefreq',
          elements: [{
            type: 'text',
            text: freq,
          }],
        });
      }

      if (update) {
        obj.elements.push({
          type: 'element',
          name: 'lastmod',
          elements: [{
            type: 'text',
            text: datetime.create().format('Y-m-d'),
          }],
        });
      }

      if (priority) {
        obj.elements.push({
          type: 'element',
          name: 'priority',
          elements: [{
            type: 'text',
            text: priority,
          }],
        });
      }

      addUrltoSet(obj);
    }
    return this;
  };

  this.close = () => {
    const options = { ignoreComment: true, spaces: 4 };
    this.data = convert.json2xml(this.urlSetElement, options);
    return this;
  };
}

module.exports = XmlWritter;
