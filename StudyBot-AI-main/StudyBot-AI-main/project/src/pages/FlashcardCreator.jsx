import React, { useState } from 'react';
import { BookOpen, ArrowLeft, RotateCcw, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function FlashcardCreator() {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [flashcards, setFlashcards] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState('review'); // review, practice

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const sampleFlashcards = {
        title: `Flashcards: ${topic}`,
        cards: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          front: `Front of card ${i + 1} about ${topic}`,
          back: `Back of card ${i + 1} with detailed explanation about ${topic}. This would contain the answer or explanation for the concept.`,
          difficulty: Math.random() > 0.5 ? 'easy' : 'medium',
          lastReviewed: null,
          nextReview: new Date()
        }))
      };
      
      setFlashcards(sampleFlashcards);
      setIsGenerating(false);
    }, 2000);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.cards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.cards.length) % flashcards.cards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  if (flashcards) {
    const card = flashcards.cards[currentCard];
    const progress = ((currentCard + 1) / flashcards.cards.length) * 100;

    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <button
              onClick={() => {
                setFlashcards(null);
                setCurrentCard(0);
                setIsFlipped(false);
              }}
              className="text-gray-600 hover:text-gray-700 font-medium"
            >
              Create New Set
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{flashcards.title}</h1>
                <span className="text-sm text-gray-500">
                  Card {currentCard + 1} of {flashcards.cards.length}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Flashcard */}
            <div className="mb-8 flex justify-center">
              <div 
                className="relative w-full max-w-lg h-80 cursor-pointer"
                onClick={flipCard}
              >
                <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-gpu preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center p-8 backface-hidden">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {card.front}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Click to reveal answer
                      </p>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center p-8 backface-hidden rotate-y-180">
                    <div className="text-center">
                      <p className="text-white text-lg leading-relaxed">
                        {card.back}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevCard}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous
              </button>

              <div className="flex items-center space-x-4">
                <button
                  onClick={flipCard}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Flip Card
                </button>
              </div>

              <button
                onClick={nextCard}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-1" />
              </button>
            </div>

            {/* Study Progress */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Study Progress</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{flashcards.cards.length}</div>
                  <div className="text-sm text-gray-600">Total Cards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{currentCard + 1}</div>
                  <div className="text-sm text-gray-600">Reviewed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {flashcards.cards.length - currentCard - 1}
                  </div>
                  <div className="text-sm text-gray-600">Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round((currentCard + 1) / flashcards.cards.length * 100)}%
                  </div>
                  <div className="text-sm text-gray-600">Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Flashcard Creator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create interactive flashcards with spaced repetition algorithms. 
              Perfect for memorizing facts, vocabulary, and key concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic or Subject
                </label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter the topic you want to create flashcards for..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="4"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!topic.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Creating Flashcards...
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2" />
                    Create Flashcard Set
                  </>
                )}
              </button>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Spaced repetition algorithm
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Progress tracking and analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Visual aids and multimedia support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Smart difficulty adjustment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Export and sharing options
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Study Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Review cards regularly for better retention</li>
                  <li>• Focus on difficult cards more frequently</li>
                  <li>• Use active recall instead of passive reading</li>
                  <li>• Study in short, focused sessions</li>
                  <li>• Test yourself before looking at answers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashcardCreator;