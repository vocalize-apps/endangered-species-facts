module.exports = {
  HelpIntent() {
    this.$speech.addText(
      `You can say tell me a random fact, tell me a (species) fact, how many species are endangered, or, you can say exit. What can I help you with?`
    );
    this.$reprompt.addText(
      `You can say tell me a random fact, tell me a (species) fact, how many species are endangered, or, you can say exit. What can I help you with?`
    );

    this.ask(this.$speech, this.$reprompt);
  }
};
