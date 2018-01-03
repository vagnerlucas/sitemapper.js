const xml = require('xml');
const datetime = require('node-datetime');

function XmlWritter() {
    this.data = '';

    this.writeSitemap = (value, appendToData) => {
        if (value) {
            appendToData = appendToData || false;

            let output = {
                sitemap: [{
                    loc: value
                },
                {
                    lastmod: datetime.create().format('m-d-Y')
                }]
            }
            let result = writeToXml(output);
            if (appendToData)
                this.data += result + '\n';
            else
                this.data = result;

            return output;
        }
    }

    const writeToXml = (object) => {
        return xml(object, ' ');
    }

    this.writeObject = (object, appendToData) => {
        appendToData = appendToData || false;

        if (object) {
            if (appendToData)
                this.data += writeToXml(object) + '\n';
            else
                this.data = writeToXml(object);
            return this.data;
        }
    }
}

module.exports = XmlWritter;