'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { DynamoDb } = require('jovo-db-dynamodb');
const {
  launch,
  help,
  end,
  random_fact,
  species_fact,
  species_count,
  yes_no
} = require('./handlers');

const app = new App();

app.use(new Alexa(), new GoogleAssistant(), new JovoDebugger(), new DynamoDb());

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler(
  launch,
  help,
  end,
  random_fact,
  species_fact,
  species_count,
  yes_no
);

module.exports.app = app;
