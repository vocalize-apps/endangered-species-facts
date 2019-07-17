// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: true,

  intentMap: {
    'AMAZON.StopIntent': 'END',
    'AMAZON.HelpIntent': 'HelpIntent',
    'AMAZON.YesIntent': 'YesIntent',
    'AMAZON.NoIntent': 'NoIntent'
  },

  db: {
    DynamoDb: {
      tableName: process.env.TABLE_NAME,
      awsConfig: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: 'us-east-1'
      }
    }
  },

  user: {
    context: {
      enabled: true,
      prev: {
        size: 3,
        request: {
          intent: true,
          state: true,
          inputs: true,
          timestamp: true
        },
        response: {
          speech: true,
          reprompt: true,
          state: true,
          output: true
        }
      }
    },
    metaData: {
      enabled: true
    }
  }
};
