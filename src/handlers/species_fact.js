const util = require('../util');

module.exports = {
  SpeciesFactIntent() {
    if (typeof this.$inputs.species !== 'undefined') {
      // Keep the species in session memory so the user can continue
      // hearing facts about that species.
      this.$session.$data.species = this.$inputs.species.value;
    }
    console.log(this.$session.$data.species);
    var fact = util.getSpeciesFact(this.$session.$data.species);
    var reprompt = util.getRandomYesNoQuestion(this.$session.$data.species);

    this.$speech.addText(`Here's your fact: ${fact} ${reprompt}`);
    this.$reprompt.addText(reprompt);

    this.showSimpleCard(this.$session.$data.species, fact).ask(
      this.$speech,
      this.$reprompt
    );
  }
};
