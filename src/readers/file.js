const ts = require('tail-stream');
const readline = require('readline');
const es = require('event-stream');

class FileReader {
    constructor(options) {
        this.readStream = ts.createReadStream(options.path, {
            onMove: 'stay'
        });
        this.readStream
            .pipe(es.split())
            .pipe(es.mapSync((line) => {
                console.log(line, 'line');
            }));
    }
}

module.exports = FileReader;

