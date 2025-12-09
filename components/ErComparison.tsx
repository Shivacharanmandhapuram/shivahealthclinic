import React from 'react';
import { Clock, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const ErComparison: React.FC = () => {
  return (
    <div id="er-comparison" className="bg-sage py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal sm:text-4xl">
            ER Can Wait?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-teal-dark font-serif">
            Know when to visit us versus the Emergency Room. Save time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Urgent Care Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-teal py-3 sm:py-4 px-4 sm:px-6">
              <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" /> Blessings Clinic
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4 text-teal text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold">Avg. Wait: 15-30 Minutes</span>
              </div>
              <div className="flex items-center mb-4 sm:mb-6 text-teal text-sm sm:text-base">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold">Cost: Lower Copay ($)</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-sage rounded-full mr-2"></span>
                    Minor fractures & sprains
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-sage rounded-full mr-2"></span>
                    Fevers, flu, & colds
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-sage rounded-full mr-2"></span>
                    Cuts needing stitches
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-sage rounded-full mr-2"></span>
                    Rashes & infections
                </li>
              </ul>
            </div>
          </div>

          {/* ER Card */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden opacity-90">
            <div className="bg-gray-500 py-3 sm:py-4 px-4 sm:px-6">
              <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" /> Emergency Room
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold">Avg. Wait: 2-4 Hours</span>
              </div>
              <div className="flex items-center mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold">Cost: High Deductible ($$$)</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                 <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Chest pain or difficulty breathing
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Severe head injuries
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Uncontrolled bleeding
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-1.5 sm:mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Stroke symptoms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErComparison;