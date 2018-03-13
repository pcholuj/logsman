const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  metrics: [{
    reader: {
      name: {
        doc: 'Metric reader name',
        default: undefined,
      },
      options: {
        doc: 'Metric reader options',
        default: undefined,
      }
    },
    parser: {
      name: {
        doc: 'Metric parser name',
        default: undefined,
      },
      options: {
        doc: 'Metric parser options',
        default: undefined,
      }
    }
  }]
});

// Load environment dependent configuration
const env = config.get('env');
config.loadFile('./src/config/' + env + '.json');

module.exports = config;