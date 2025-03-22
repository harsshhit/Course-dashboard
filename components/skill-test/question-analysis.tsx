"use client";

import { Target } from "lucide-react";

interface QuestionAnalysisProps {
  correct: number;
  total: number;
}

export function QuestionAnalysis({ correct, total }: QuestionAnalysisProps) {
  const percentage = (correct / total) * 100;
  const circumference = 2 * Math.PI * 120; // radius = 120
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Question Analysis</h2>
      <p className="text-sm text-gray-600 mb-6">
        You scored {correct} question correct out of {total}. However it still needs some improvements
      </p>
      
      <div className="relative w-[300px] h-[300px] mx-auto">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="24"
          />
          {/* Progress circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="24"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Target icon in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 p-4 rounded-full">
          <Target className="w-8 h-8 text-red-500" />
        </div>
        
        {/* Score text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12 text-center">
          <span className="text-2xl font-bold text-blue-600">{correct}/{total}</span>
        </div>
      </div>
    </div>
  );
}