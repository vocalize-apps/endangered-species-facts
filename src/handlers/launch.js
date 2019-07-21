module.exports = {
  LAUNCH() {
    this.$speech.addText(`Welcome to Endangered Species Facts.`);
    this.$reprompt.addText(
      `You can say tell me a random fact, tell me a (species) fact, how many species are endangered, or, you can say exit. What can I help you with?`
    );

    this.showSimpleCard('Endangered Species Facts', this.$speech).ask(
      this.$speech + this.$reprompt,
      this.$reprompt
    );
  }
};
