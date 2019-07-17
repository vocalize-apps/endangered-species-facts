module.exports = {
  END() {
    let reason = this.$alexaSkill.getEndReason();
    console.log(reason);

    // Using an array in the speech builder will choose a random item.
    this.$speech.addText([
      `OK.`,
      `Goodbye!`,
      `Have a great day!`,
      `Come back again soon!`
    ]);

    this.tell(this.$speech);
  }
};
