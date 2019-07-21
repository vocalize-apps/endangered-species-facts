const util = require('../util');

module.exports = {
  RandomFactIntent() {
    var fact = util.getRandomFact();
    var reprompt = util.getRandomYesNoQuestion('random');

    this.$speech.addText(`Here's your fact: ${fact} ${reprompt}`);
    this.$reprompt.addText(reprompt);

    this.showSimpleCard('Random Fact', fact).ask(this.$speech, this.$reprompt);
  }
};
