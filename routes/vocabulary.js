const express = require('express');
const Vocabulary = require('../models/Vocabulary');
const router = express.Router();

// Add a new word
router.post('/', async (req, res) => {
    try {
        const newWord = new Vocabulary(req.body);
        const savedWord = await newWord.save();
        res.status(201).json(savedWord);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all words
router.get('/', async (req, res) => {
    try {
        const words = await Vocabulary.find();
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a word by ID
router.get('/:id', async (req, res) => {
    try {
        const word = await Vocabulary.findById(req.params.id);
        if (!word) return res.status(404).json({ error: 'Word not found' });
        res.status(200).json(word);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a word by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedWord = await Vocabulary.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedWord) return res.status(404).json({ error: 'Word not found' });
        res.status(200).json(updatedWord);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a word by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedWord = await Vocabulary.findByIdAndDelete(req.params.id);
        if (!deletedWord) return res.status(404).json({ error: 'Word not found' });
        res.status(200).json({ message: 'Word deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
