# StudyBOT- AI-Powered Study Tools Platform

A comprehensive study platform powered by Google's Gemini 2.0 API, built with React, Node.js, MongoDB, and Tailwind CSS.

## Features

### 🧠 AI Study Tools
- **Quiz Generator**: Create comprehensive quizzes with multiple question types
- **Flashcard Creator**: Generate interactive flashcards with spaced repetition
- **Study Guide Generator**: Transform lengthy content into structured guides
- **Practice Test Builder**: Build timed practice tests with analytics
- **Concept Explainer**: Get detailed explanations of complex topics
- **Essay Assistant**: Comprehensive essay writing assistance

### 🎨 Modern Design
- Beautiful, responsive UI with Tailwind CSS
- Smooth animations and micro-interactions
- Apple-level design aesthetics
- Mobile-first responsive design

### 🔧 Technical Stack
- **Frontend**: React, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **AI Integration**: Google's Gemini 2.0 API
- **Routing**: React Router DOM

## Installation

### Prerequisites
- Node.js 
- MongoDB 
- Google Gemini API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studyai-platform
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Environment Configuration**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env with your configuration
   MONGODB_URI=mongodb://localhost:27017/studyai
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5000
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

6. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```

7. **Start the frontend development server**
   ```bash
   # In the root directory
   npm run dev
   ```

## API Endpoints

### Quiz Generation
- `POST /api/quiz/generate` - Generate a new quiz
- `GET /api/quiz/:id` - Retrieve a specific quiz

### Flashcards
- `POST /api/flashcards/generate` - Generate flashcard set

### Study Guides
- `POST /api/studyguide/generate` - Generate study guide

### Health Check
- `GET /api/health` - Server health status

## Project Structure

```
studyai-platform/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── QuizGenerator.jsx
│   │   ├── FlashcardCreator.jsx
│   │   ├── StudyGuideGenerator.jsx
│   │   ├── PracticeTestBuilder.jsx
│   │   ├── ConceptExplainer.jsx
│   │   └── EssayAssistant.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── index.js
│   └── package.json
├── package.json
└── README.md
```

## Features Overview

### Quiz Generator
- Multiple question types (Multiple Choice, True/False, Open-ended)
- Difficulty level adjustment
- Auto-grading with explanations
- Progress tracking

### Flashcard Creator
- Spaced repetition algorithm
- Progress tracking
- Visual flip animations
- Customizable difficulty

### Study Guide Generator
- Content summarization
- Structured outline creation
- Multiple format options
- Export capabilities

### Practice Test Builder
- Timed test environment
- Performance analytics
- Comprehensive scoring
- Detailed result breakdown

### Concept Explainer
- Step-by-step breakdowns
- Visual analogies
- Related concept suggestions
- Adjustable complexity levels

### Essay Assistant
- Outline generation
- Grammar checking
- Citation assistance
- Multiple essay types support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Social Links

- **GitHub**: [https://github.com/Mythri846](https://github.com/Mythri846)
- **LinkedIn**: [https://www.linkedin.com/in/pulivarthi-mythri/](https://www.linkedin.com/in/pulivarthi-mythri/)
- **Twitter/X**: [https://x.com/mythri577721](https://x.com/mythri577721?t=de0VB7NY9090_PZYJE9dzQ&s=09)

