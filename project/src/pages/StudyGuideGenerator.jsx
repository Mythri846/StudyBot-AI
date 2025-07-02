import React, { useState } from 'react';
import { FileText, ArrowLeft, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

function StudyGuideGenerator() {
  const [content, setContent] = useState('');
  const [format, setFormat] = useState('outline');
  const [isGenerating, setIsGenerating] = useState(false);
  const [studyGuide, setStudyGuide] = useState(null);

  const handleGenerate = async () => {
    if (!content.trim()) return;

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const sampleGuide = {
        title: 'Study Guide',
        content: {
          outline: [
            {
              title: 'Key Concepts',
              items: [
                'Main idea 1: Important concept explanation',
                'Main idea 2: Another crucial point',
                'Main idea 3: Third essential element'
              ]
            },
            {
              title: 'Important Terms',
              items: [
                'Term 1: Definition and explanation',
                'Term 2: Meaning and context',
                'Term 3: Usage and examples'
              ]
            },
            {
              title: 'Summary Points',
              items: [
                'Key takeaway number one',
                'Essential understanding point',
                'Critical knowledge element'
              ]
            }
          ],
          summary: `This is a comprehensive summary of the provided content. It covers the main concepts, important terminology, and key points that students should focus on when studying this material.`,
          keyPoints: [
            'First major point to remember',
            'Second crucial concept',
            'Third important idea',
            'Fourth essential element',
            'Fifth key understanding'
          ]
        }
      };
      
      setStudyGuide(sampleGuide);
      setIsGenerating(false);
    }, 2000);
  };

  if (studyGuide) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </button>
              <button
                onClick={() => setStudyGuide(null)}
                className="text-gray-600 hover:text-gray-700 font-medium"
              >
                Create New Guide
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{studyGuide.title}</h1>
              <div className="flex items-center text-sm text-gray-500">
                <Eye className="h-4 w-4 mr-2" />
                Generated study guide • {new Date().toLocaleDateString()}
              </div>
            </div>

            {/* Summary Section */}
            {format === 'summary' && (
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
                  <p className="text-gray-700 leading-relaxed">{studyGuide.content.summary}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Points to Remember</h2>
                  <ul className="space-y-2">
                    {studyGuide.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Outline Section */}
            {format === 'outline' && (
              <div className="space-y-8">
                {studyGuide.content.outline.map((section, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Format Toggle */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm text-gray-600">View as:</span>
                <button
                  onClick={() => setFormat('outline')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    format === 'outline' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Outline
                </button>
                <button
                  onClick={() => setFormat('summary')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    format === 'summary' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Summary
                </button>
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
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Guide Generator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform lengthy materials into concise, structured study guides. 
              Perfect for exam preparation and quick review sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content to Summarize
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Paste your text content, lecture notes, or reading material here..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows="8"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Output Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="outline">Structured Outline</option>
                  <option value="summary">Executive Summary</option>
                  <option value="both">Both Formats</option>
                </select>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!content.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Generating Guide...
                  </>
                ) : (
                  <>
                    <FileText className="h-5 w-5 mr-2" />
                    Generate Study Guide
                  </>
                )}
              </button>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Key points extraction
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Automatic summary generation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Structured outline creation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Multiple format options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Export and sharing capabilities
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">How to Use</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    Paste your text content or lecture notes
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    Choose your preferred output format
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    AI analyzes and structures the content
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    Review and export your study guide
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

export default StudyGuideGenerator;