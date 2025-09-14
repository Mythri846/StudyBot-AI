import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              StudyAI
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing education through artificial intelligence. Create personalized study materials 
              powered by Google's Gemini 2.0 API.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mythri846"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pulivarthi-mythri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/mythri577721?t=de0VB7NY9090_PZYJE9dzQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <a href="/quiz-generator" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Quiz Generator
                </a>
              </li>
              <li>
                <a href="/flashcard-creator" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Flashcard Creator
                </a>
              </li>
              <li>
                <a href="/study-guide-generator" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Study Guide Generator
                </a>
              </li>
              <li>
                <a href="/practice-test-builder" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Practice Test Builder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">More Tools</h4>
            <ul className="space-y-2">
              <li>
                <a href="/concept-explainer" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Concept Explainer
                </a>
              </li>
              <li>
                <a href="/essay-assistant" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Essay Assistant
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 StudyAI. All rights reserved. Powered by Google's Gemini 2.0 API.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;