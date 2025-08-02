import React from 'react';
import { Shield, Brain, Zap, Award } from 'lucide-react';

export const Thesis: React.FC = () => {
  const achievements = [
    {
      icon: Brain,
      title: 'Machine Learning + XAI',
      description: 'Advanced ML algorithms with Explainable AI for transparent decision making'
    },
    {
      icon: Award,
      title: '99-100% Accuracy',
      description: 'Achieved exceptional fraud detection rates through innovative model design'
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Ethereum smart contracts for immutable fraud prevention infrastructure'
    },
    {
      icon: Zap,
      title: 'Real-time Detection',
      description: 'Instant fraud identification and prevention in live transaction environments'
    }
  ];

  return (
    <section id="thesis" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Academic Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Thesis Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-white/20 dark:border-gray-700/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Fraud Detection and Prevention Using 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Blockchain and Machine Learning</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Developing an innovative fraud detection system that combines the power of machine learning 
                with blockchain technology to create a secure, transparent, and highly accurate fraud prevention platform.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Contributions</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Integration of Explainable AI (XAI) for transparent fraud detection decisions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Ethereum smart contract implementation for immutable fraud records</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Real-time transaction monitoring and instant fraud prevention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>99-100% fraud detection accuracy through advanced ML algorithms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'Solidity', 'Ethereum', 'Web3.js', 'Scikit-learn', 'Pandas', 'NumPy'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Expected Completion</div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-white">July 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};