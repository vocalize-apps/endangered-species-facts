module.exports = {
  YesIntent() {
    console.log(this.$user.$context.prev[0].request.intent);
    if (this.$user.$context.prev[0].request.intent == 'SpeciesFactIntent') {
      return this.toIntent('SpeciesFactIntent');
    } else {
      return this.toIntent('RandomFactIntent');
    }
  },
  NoIntent() {
    return this.toIntent('END');
  }
};
