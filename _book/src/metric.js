class Metric {
    constructor({reader, parser}) {
        this.reader = reader;
        this.parser = parser;
        
        // this.source = '';
        // this.key = '';
        // this.tags = tags || [];
        // this.time = time || Date.now();
        // this.name = '';
        // this.value = '';
    }
}

module.exports = Metric;