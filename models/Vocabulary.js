const mongoose = require('mongoose');

const VocabularySchema = new mongoose.Schema({
    word: { type: String, required: true },
    meaning: { type: String, required: true },
    exampleSentence: { type: String, required: true },
    relatedPhrases: [String],
    notes: String,
    dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vocabulary', VocabularySchema);
