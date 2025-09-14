const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/studyai', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Models
const QuizSchema = new mongoose.Schema({
  title: String,
  topic: String,
  difficulty: String,
  questions: [{
    question: String,
    type: String,
    options: [String],
    correctAnswer: String,
    explanation: String
  }],
  createdAt: { type: Date, default: Date.now }
});

const FlashcardSetSchema = new mongoose.Schema({
  title: String,
  topic: String,
  cards: [{
    front: String,
    back: String,
    difficulty: String,
    lastReviewed: Date,
    nextReview: Date
  }],
  createdAt: { type: Date, default: Date.now }
});

const StudyGuideSchema = new mongoose.Schema({
  title: String,
  content: String,
  format: String,
  outline: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

const Quiz = mongoose.model('Quiz', QuizSchema);
const FlashcardSet = mongoose.model('FlashcardSet', FlashcardSetSchema);
const StudyGuide = mongoose.model('StudyGuide', StudyGuideSchema);

// Routes

// Quiz routes
app.post('/api/quiz/generate', async (req, res) => {
  try {
    const { topic, difficulty, questionType, numQuestions } = req.body;
    
    // Here you would integrate with Google's Gemini 2.0 API
    // For now, we'll create a sample quiz
    const quiz = new Quiz({
      title: `Quiz: ${topic}`,
      topic,
      difficulty,
      questions: Array.from({ length: numQuestions }, (_, i) => ({
        question: `Sample question ${i + 1} about ${topic}?`,
        type: questionType === 'mixed' ? ['multiple-choice', 'true-false', 'open-ended'][i % 3] : questionType,
        options: questionType !== 'open-ended' ? ['Option A', 'Option B', 'Option C', 'Option D'] : [],
        correctAnswer: questionType === 'true-false' ? 'true' : 'Option A',
        explanation: `This is the explanation for question ${i + 1}.`
      }))
    });

    await quiz.save();
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/quiz/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Flashcard routes
app.post('/api/flashcards/generate', async (req, res) => {
  try {
    const { topic } = req.body;
    
    // Here you would integrate with Google's Gemini 2.0 API
    const flashcardSet = new FlashcardSet({
      title: `Flashcards: ${topic}`,
      topic,
      cards: Array.from({ length: 10 }, (_, i) => ({
        front: `Front of card ${i + 1} about ${topic}`,
        back: `Back of card ${i + 1} with detailed explanation about ${topic}`,
        difficulty: Math.random() > 0.5 ? 'easy' : 'medium',
        lastReviewed: null,
        nextReview: new Date()
      }))
    });

    await flashcardSet.save();
    res.json(flashcardSet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Study guide routes
app.post('/api/studyguide/generate', async (req, res) => {
  try {
    const { content, format } = req.body;
    
    // Here you would integrate with Google's Gemini 2.0 API
    const studyGuide = new StudyGuide({
      title: 'Study Guide',
      content,
      format,
      outline: {
        outline: [
          {
            title: 'Key Concepts',
            items: ['Main idea 1', 'Main idea 2', 'Main idea 3']
          },
          {
            title: 'Important Terms',
            items: ['Term 1: Definition', 'Term 2: Definition', 'Term 3: Definition']
          }
        ],
        summary: 'This is a comprehensive summary of the provided content.',
        keyPoints: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5']
      }
    });

    await studyGuide.save();
    res.json(studyGuide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'StudyAI API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;