import React, { useState } from 'react';
import { Lightbulb, ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function ConceptExplainer() {
  const [concept, setConcept] = useState('');
  const [level, setLevel] = useState('intermediate');
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState(null);

  const handleExplain = async () => {
    if (!concept.trim()) return;

    setIsExplaining(true);
    
    // Simulate API call
    setTimeout(() => {
      const sampleExplanation = {
        concept: concept,
        level: level,
        simpleExplanation: `Here's a simple explanation of ${concept}: This concept involves understanding the fundamental principles and how they apply in practical situations. The basic idea is to break down complex information into manageable parts.`,
        stepByStep: [
          {
            step: 1,
            title: 'Understanding the Basics',
            content: `First, we need to understand what ${concept} actually means and why it's important.`
          },
          {
            step: 2,
            title: 'Key Components',
            content: `The main components that make up ${concept} include several interconnected elements.`
          },
          {
            step: 3,
            title: 'Practical Application',
            content: `Here's how ${concept} is applied in real-world scenarios and why it matters.`
          },
          {
            step: 4,
            title: 'Common Examples',
            content: `Some common examples of ${concept} that you might encounter in everyday life.`
          }
        ],
        visualAnalogy: `Think of ${concept} like a recipe. Just as a recipe has ingredients (components) that must be combined in the right order (process) to create a dish (result), ${concept} has its own set of elements that work together to achieve a specific outcome.`,
        relatedConcepts: [
          `Related Concept 1 to ${concept}`,
          `Another Related Topic`,
          `Connected Principle`,
          `Similar Framework`
        ],
        resources: [
          { title: 'Further Reading on this Topic', url: '#' },
          { title: 'Video Tutorial', url: '#' },
          { title: 'Practice Exercises', url: '#' }
        ]
      };
      
      setExplanation(sampleExplanation);
      setIsExplaining(false);
    }, 2000);
  };

  if (explanation) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <button
              onClick={() => setExplanation(null)}
              className="text-gray-600 hover:text-gray-700 font-medium"
            >
              Explain New Concept
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{explanation.concept}</h1>
                  <span className="text-sm text-gray-500 capitalize">{explanation.level} Level</span>
                </div>
              </div>
            </div>

            {/* Simple Explanation */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Simple Explanation</h2>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">{explanation.simpleExplanation}</p>
              </div>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Step-by-Step Breakdown</h2>
              <div className="space-y-6">
                {explanation.stepByStep.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-sm">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Analogy */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Visual Analogy</h2>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
                <div className="flex items-start">
                  <BookOpen className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{explanation.visualAnalogy}</p>
                </div>
              </div>
            </div>

            {/* Related Concepts */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Concepts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {explanation.relatedConcepts.map((relatedConcept, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-gray-700 font-medium">{relatedConcept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Resources */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h2>
              <div className="space-y-3">
                {explanation.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 group"
                  >
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-3 group-hover:text-blue-700" />
                    <span className="text-blue-700 font-medium group-hover:text-blue-800">
                      {resource.title}
                    </span>
                  </a>
                ))}
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
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Concept Explainer</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed explanations of complex concepts in simple terms. 
              Perfect for understanding difficult topics with step-by-step breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Concept to Explain
                </label>
                <textarea
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  placeholder="Enter the concept or topic you want explained..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complexity Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="beginner">Beginner - Simple terms</option>
                  <option value="intermediate">Intermediate - Moderate detail</option>
                  <option value="advanced">Advanced - Technical depth</option>
                </select>
              </div>

              <button
                onClick={handleExplain}
                disabled={!concept.trim() || isExplaining}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                {isExplaining ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Explaining Concept...
                  </>
                ) : (
                  <>
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Explain This Concept
                  </>
                )}
              </button>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Step-by-step breakdown of complex ideas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Visual examples and analogies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Related concepts and connections
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Adjustable complexity levels
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Additional learning resources
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">How It Works</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    Enter the concept you want to understand
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    Choose your preferred complexity level
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    AI analyzes and breaks down the concept
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    Receive detailed explanation with examples
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptExplainer;