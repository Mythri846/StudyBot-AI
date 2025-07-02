import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  BookOpen, 
  FileText, 
  Target, 
  Lightbulb, 
  PenTool,
  BarChart3,
  Users,
  CheckCircle,
  Rocket
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const tools = [
    {
      id: 'quiz-generator',
      title: 'Quiz Generator',
      description: 'Generate multiple-choice, true/false, and open-ended questions from any text or topic',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Auto-grading', 'Difficulty levels', 'Topic customization'],
      buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
    },
    {
      id: 'flashcard-creator',
      title: 'Flashcard Creator',
      description: 'Create interactive flashcards with spaced repetition algorithms for optimal learning',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      features: ['Spaced repetition', 'Progress tracking', 'Visual aids'],
      buttonColor: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
    },
    {
      id: 'study-guide-generator',
      title: 'Study Guide Generator',
      description: 'Transform lengthy materials into concise, structured study guides',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      features: ['Key points extraction', 'Summary generation', 'Outline creation'],
      buttonColor: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
    },
    {
      id: 'practice-test-builder',
      title: 'Practice Test Builder',
      description: 'Create comprehensive practice tests to simulate real exam conditions',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      features: ['Timed tests', 'Performance analytics', 'Question banks'],
      buttonColor: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
    },
    {
      id: 'concept-explainer',
      title: 'Concept Explainer',
      description: 'Get detailed explanations of complex concepts in simple terms',
      icon: Lightbulb,
      color: 'from-indigo-500 to-purple-500',
      features: ['Step-by-step breakdown', 'Visual examples', 'Related concepts'],
      buttonColor: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
    },
    {
      id: 'essay-assistant',
      title: 'Essay Assistant',
      description: 'Get help with essay structure, research, and writing improvement',
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
      features: ['Outline generation', 'Grammar check', 'Citation help'],
      buttonColor: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700'
    }
  ];

  const features = [
    {
      title: 'AI-Powered Quiz Generation',
      description: 'Create comprehensive quizzes from any topic or text using advanced AI technology.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Smart Flashcards',
      description: 'Generate interactive flashcards that adapt to your learning pace and style.',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Study Guide Creator',
      description: 'Transform complex topics into structured, easy-to-follow study guides.',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your learning progress with detailed analytics and insights.',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Multi-Subject Support',
      description: 'Cover any subject from mathematics to literature with AI assistance.',
      icon: Target,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Collaborative Learning',
      description: 'Share study materials and collaborate with classmates and study groups.',
      icon: Users,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const handleGetStarted = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDemo = () => {
    navigate('/quiz-generator');
  };

  const handleTryTool = (toolId) => {
    navigate(`/${toolId}`);
  };

  const handleStartLearning = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Transform Your Learning with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Study Tools
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness the power of Google's Gemini 2.0 API to create personalized quizzes, 
            flashcards, study guides, and more. Make studying smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </button>
            <button
              onClick={handleViewDemo}
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Better Learning
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered tools can revolutionize your study experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Study Tools{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by Google's Gemini 2.0 API for the most advanced learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{tool.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleTryTool(tool.id)}
                    className={`w-full ${tool.buttonColor} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                  >
                    Try {tool.title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                StudyAI
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing education through artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that learning should be personalized, efficient, and accessible to 
                everyone. Our AI-powered study tools leverage the latest advancements in 
                artificial intelligence to create customized learning experiences that adapt to each 
                student's unique needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Built with cutting-edge technology including React, Node.js, MongoDB, and Google's 
                Gemini 2.0 API, our platform provides students with the tools they need to 
                succeed in their academic journey.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Powered by Google's Gemini 2.0 API</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Built with React, Node.js and MongoDB</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Personalized learning experience</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-12 rounded-3xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Rocket className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Learning?
              </h3>
              <p className="text-gray-600 mb-8">
                Join thousands of students who are already using AI to enhance their 
                study experience.
              </p>
              <button
                onClick={handleStartLearning}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Learning Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;