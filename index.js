const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json()); // Ensure this line is present

// Helper function to get the highest lowercase alphabet
const getHighestLowercaseAlphabet = (alphabets) => {
  const lowercaseAlphabets = alphabets.filter(char => /[a-z]/.test(char));
  return lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];
};

app.post('/bfhl', (req, res) => {
  try {
    console.log(req.body);
    if (!Array.isArray(data)) {
      throw new Error('Invalid input: data must be an array');
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = getHighestLowercaseAlphabet(alphabets);

    res.json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet
    });
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
});


app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});