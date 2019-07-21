// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  alexaSkill: {
    nlu: 'alexa'
  },
  googleAction: {
    nlu: 'dialogflow'
  },
  stages: {
    local: {
      endpoint: '${JOVO_WEBHOOK_URL}'
    },
    dev: {
      alexaSkill: {
        endpoint: process.env.DEV_ENDPOINT
      },
      googleAction: {
        dialogflow: {
          endpoint: process.env.API_DEV
        }
      }
    },
    prod: {
      alexaSkill: {
        endpoint: process.env.PROD_ENDPOINT
      },
      googleAction: {
        dialogflow: {
          endpoint: process.env.API_PROD
        }
      }
    }
  }
};
