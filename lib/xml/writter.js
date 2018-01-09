const convert = require('xml-js');
const datetime = require('node-datetime');

function XmlWritter() {
  this.data = '';
  this.activeElement = {};
  this.urlSetElement = {
    declaration: {
      attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
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

  this.siteMapIndexElement = {
    declaration: {
      attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
    elements: [{
      type: 'element',
      name: 'sitemapindex',
      attributes: {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation': 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
      },
      elements: [],
    }],
  };

  const addToSourceList = (sourceList, element) => {
    this.activeElement = sourceList;
    this.activeElement.elements[0].elements.push(element);
  };

  const mapObject = (elementName, url, freq, priority, update) => {
    const obj = {
      type: 'element',
      name: elementName,
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

    return obj;
  };

  this.addToSitemapIndex = (url, freq, priority, update) => {
    const obj = mapObject('sitemap', url, freq, priority, update);
    addToSourceList(this.siteMapIndexElement, obj);
  };

  this.addToUrlSet = (url, freq, priority, update) => {
    const obj = mapObject('url', url, freq, priority, update);
    addToSourceList(this.urlSetElement, obj);
    return this;
  };

  this.close = () => {
    const options = { ignoreComment: true, spaces: 4 };
    this.data = convert.json2xml(this.activeElement, options);
    return this;
  };
}

module.exports = XmlWritter;
