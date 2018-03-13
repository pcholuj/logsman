const Metric = require('./metric')
const config = require('./config/config');

/**
 * Main class
 *
 * @class
 */
class LogsmanClient {

    /**
     * Logsman initialization
     * 
     * @param  {Object} options logsman optio s
     * @return {void}
     */
    constructor(options = {}) {
        this.config = config.load(options);
        this.config.validate({allowed: 'strict'});

        this.metrics = [];

        this.initMetrics();
    }

    /**
     * Initialize metrics
     * @return {void}
     */
    initMetrics() {
        const metrics = this.config.get('metrics');
        metrics.forEach((metricEl) => {
            this.metrics.push(new Metric({
                reader: new (require(`./readers/${metricEl.reader.name}`))(metricEl.reader.options),
                parser: new (require(`./parsers/${metricEl.parser.name}`))(metricEl.parser.options)
            }))
        });

        console.log(this.metrics);
    }
}

new LogsmanClient();