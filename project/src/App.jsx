import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuizGenerator from './pages/QuizGenerator';
import FlashcardCreator from './pages/FlashcardCreator';
import StudyGuideGenerator from './pages/StudyGuideGenerator';
import PracticeTestBuilder from './pages/PracticeTestBuilder';
import ConceptExplainer from './pages/ConceptExplainer';
import EssayAssistant from './pages/EssayAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-generator" element={<QuizGenerator />} />
          <Route path="/flashcard-creator" element={<FlashcardCreator />} />
          <Route path="/study-guide-generator" element={<StudyGuideGenerator />} />
          <Route path="/practice-test-builder" element={<PracticeTestBuilder />} />
          <Route path="/concept-explainer" element={<ConceptExplainer />} />
          <Route path="/essay-assistant" element={<EssayAssistant />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;