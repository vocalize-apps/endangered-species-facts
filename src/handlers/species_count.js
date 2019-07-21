const util = require('../util');

module.exports = {
  SpeciesCountIntent() {
    var speciesCount = util.getSpeciesCount();
    var criticallyEndangeredSpeciesCount = util.getCriticallyEndangeredSpeciesCount();
    this.$speech.addText(
      `There are currently ${speciesCount} endangered species. ${criticallyEndangeredSpeciesCount} of which are critically endangered. What else can I do for you?`
    );
    this.$reprompt.addText(
      `You can say tell me a random fact, tell me a (species) fact, how many species are endangered, or, you can say exit. What can I help you with?`
    );

    this.showSimpleCard('How many are endangered?', this.$speech).ask(
      this.$speech,
      this.$reprompt
    );
  }
};
