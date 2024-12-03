const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const vocabularyRoutes = require('./routes/vocabulary');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());


app.use(cors({
  origin: 'http://localhost:5173' // Replace with your React app's URL
}));
// Serve static files from the "public" directory
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/vocabularyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/vocabulary', vocabularyRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
