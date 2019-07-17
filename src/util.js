const data = require('./data.json');

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = {
  getRandomFact() {
    // Returns a random fact from a random species.

    var all_species = Object.keys(data);
    while (true) {
      var random_species = all_species[getRandom(0, all_species.length - 1)];
      var fact =
        data[random_species]['Facts'][
          getRandom(0, data[random_species]['Facts'].length - 1)
        ];

      if (fact) {
        return fact;
      }
    }
  },
  getSpeciesFact(species) {
    // Returns a random fact from a specified species.

    while (true) {
      var fact =
        data[species]['Facts'][getRandom(0, data[species]['Facts'].length - 1)];

      if (fact) {
        return fact;
      } else {
        return 'We currently have no facts for that species.';
      }
    }
  },
  getSpeciesCount() {
    // Counts the number of species.
    return Object.keys(data).length;
  },
  getCriticallyEndangeredSpeciesCount() {
    // Counts the number of critically endangered species.
    var criticallyEndangeredSpeciesCount = 0;

    for (var species in data) {
      if (
        data[species]['Conservation Status'] == 'Critically Endangered (CR)'
      ) {
        criticallyEndangeredSpeciesCount++;
      }
    }
    return criticallyEndangeredSpeciesCount;
  },
  getRandomYesNoQuestion(type) {
    // Return random question for YES/NO answering.
    questions = [
      `Would you like another ${type} fact?`,
      `Can I tell you another ${type} fact?`,
      `Do you want to hear another ${type} fact?`
    ];
    return questions[getRandom(0, questions.length - 1)];
  }
};
