import React, { useState } from 'react';
import { PenTool, ArrowLeft, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function EssayAssistant() {
  const [topic, setTopic] = useState('');
  const [essayType, setEssayType] = useState('argumentative');
  const [length, setLength] = useState('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [essay, setEssay] = useState(null);
  const [activeTab, setActiveTab] = useState('draft');

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const sampleEssay = {
        topic: topic,
        type: essayType,
        outline: {
          introduction: 'Hook, background information, and thesis statement',
          bodyParagraphs: [
            'First main argument with supporting evidence',
            'Second main argument with supporting evidence',
            'Third main argument with supporting evidence'
          ],
          conclusion: 'Restatement of thesis and final thoughts'
        },
        draft: `# ${topic}

## Introduction

This essay explores the important topic of ${topic}. In today's world, understanding this subject is crucial for various reasons. This essay will examine the key aspects, present arguments, and provide a comprehensive analysis of the topic.

## Body Paragraph 1

The first major point to consider regarding ${topic} is its fundamental importance in our society. Research has shown that this topic affects various aspects of daily life and has significant implications for the future.

## Body Paragraph 2

Furthermore, when examining ${topic}, we must consider the various perspectives and viewpoints that exist. Different stakeholders have varying opinions and interests, which creates a complex landscape that requires careful analysis.

## Body Paragraph 3

Additionally, the practical applications of understanding ${topic} extend far beyond theoretical knowledge. Real-world examples demonstrate how this knowledge can be applied to solve problems and create positive change.

## Conclusion

In conclusion, ${topic} represents a multifaceted subject that deserves careful consideration and study. The arguments presented in this essay demonstrate the complexity and importance of this topic in contemporary society.`,
        grammarCheck: {
          issues: [
            { type: 'warning', message: 'Consider using more varied sentence structures', line: 3 },
            { type: 'suggestion', message: 'This paragraph could benefit from more specific examples', line: 7 },
            { type: 'info', message: 'Citation needed for this claim', line: 11 }
          ],
          score: 85
        },
        citations: [
          { type: 'book', author: 'Smith, J.', title: 'Understanding the Topic', year: 2023 },
          { type: 'article', author: 'Johnson, M.', title: 'Recent Developments', journal: 'Academic Journal', year: 2024 },
          { type: 'website', author: 'Research Institute', title: 'Topic Analysis', url: 'https://example.com', accessed: '2024-01-15' }
        ]
      };
      
      setEssay(sampleEssay);
      setIsGenerating(false);
    }, 2000);
  };

  if (essay) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300">
                <Download className="h-4 w-4 mr-2" />
                Export Essay
              </button>
              <button
                onClick={() => setEssay(null)}
                className="text-gray-600 hover:text-gray-700 font-medium"
              >
                New Essay
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8 pt-6">
                {[
                  { id: 'outline', label: 'Outline' },
                  { id: 'draft', label: 'Essay Draft' },
                  { id: 'grammar', label: 'Grammar Check' },
                  { id: 'citations', label: 'Citations' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-pink-500 text-pink-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {/* Outline Tab */}
              {activeTab === 'outline' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Essay Outline</h2>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Introduction</h3>
                      <p className="text-blue-800">{essay.outline.introduction}</p>
                    </div>
                    
                    {essay.outline.bodyParagraphs.map((paragraph, index) => (
                      <div key={index} className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h3 className="font-semibold text-green-900 mb-2">Body Paragraph {index + 1}</h3>
                        <p className="text-green-800">{paragraph}</p>
                      </div>
                    ))}
                    
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Conclusion</h3>
                      <p className="text-purple-800">{essay.outline.conclusion}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Draft Tab */}
              {activeTab === 'draft' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Essay Draft</h2>
                  <div className="prose max-w-none">
                    <textarea
                      value={essay.draft}
                      onChange={(e) => setEssay(prev => ({ ...prev, draft: e.target.value }))}
                      className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono text-sm leading-relaxed"
                    />
                  </div>
                </div>
              )}

              {/* Grammar Check Tab */}
              {activeTab === 'grammar' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Grammar Check</h2>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">Overall Score:</span>
                      <span className={`text-2xl font-bold ${
                        essay.grammarCheck.score >= 80 ? 'text-green-600' : 
                        essay.grammarCheck.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {essay.grammarCheck.score}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {essay.grammarCheck.issues.map((issue, index) => (
                      <div key={index} className={`flex items-start p-4 rounded-lg ${
                        issue.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400' :
                        issue.type === 'suggestion' ? 'bg-blue-50 border-l-4 border-blue-400' :
                        'bg-gray-50 border-l-4 border-gray-400'
                      }`}>
                        <div className="flex-shrink-0 mr-3 mt-0.5">
                          {issue.type === 'warning' ? (
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <p className={`font-medium ${
                            issue.type === 'warning' ? 'text-yellow-800' :
                            issue.type === 'suggestion' ? 'text-blue-800' :
                            'text-gray-800'
                          }`}>
                            Line {issue.line}: {issue.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Citations Tab */}
              {activeTab === 'citations' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Citations</h2>
                  <div className="space-y-4">
                    {essay.citations.map((citation, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2 capitalize">
                              {citation.type}
                            </span>
                            <p className="text-gray-900 font-medium">
                              {citation.author} ({citation.year}). <em>{citation.title}</em>
                              {citation.journal && `. ${citation.journal}`}
                              {citation.url && `. Retrieved from ${citation.url}`}
                              {citation.accessed && ` (accessed ${citation.accessed})`}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Citation Help</h3>
                    <p className="text-blue-800 text-sm">
                      Need more citations? Our AI can help you find relevant sources and format them properly 
                      according to APA, MLA, or Chicago style guidelines.
                    </p>
                  </div>
                </div>
              )}
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
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Essay Assistant</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get help with essay structure, research, and writing improvement. 
              Perfect for academic writing and professional documents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Essay Topic
                </label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter your essay topic or thesis statement..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  rows="4"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Essay Type
                  </label>
                  <select
                    value={essayType}
                    onChange={(e) => setEssayType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="argumentative">Argumentative</option>
                    <option value="persuasive">Persuasive</option>
                    <option value="expository">Expository</option>
                    <option value="narrative">Narrative</option>
                    <option value="descriptive">Descriptive</option>
                    <option value="compare-contrast">Compare & Contrast</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="short">Short (300-500 words)</option>
                    <option value="medium">Medium (500-1000 words)</option>
                    <option value="long">Long (1000-1500 words)</option>
                    <option value="extended">Extended (1500+ words)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!topic.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Generating Essay...
                  </>
                ) : (
                  <>
                    <PenTool className="h-5 w-5 mr-2" />
                    Generate Essay Assistant
                  </>
                )}
              </button>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    AI-powered outline generation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Advanced grammar and style checking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Citation assistance and formatting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Multiple essay type support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Export options for various formats
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Writing Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Start with a strong thesis statement</li>
                  <li>• Use topic sentences for each paragraph</li>
                  <li>• Support arguments with credible evidence</li>
                  <li>• Maintain consistent tone and style</li>
                  <li>• Always cite your sources properly</li>
                  <li>• Proofread and revise before submission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EssayAssistant;