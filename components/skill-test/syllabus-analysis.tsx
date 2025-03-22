import { ProgressBar } from '@/components/ui/progress-bar';

interface Topic {
  name: string;
  progress: number;
  color?: string;
}

interface SyllabusAnalysisProps {
  topics: Topic[];
}

export function SyllabusAnalysis({ topics }: SyllabusAnalysisProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Syllabus Wise Analysis</h2>
      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">{topic.name}</span>
              <span className="text-sm font-medium text-gray-900">{topic.progress}%</span>
            </div>
            <ProgressBar value={topic.progress} color={topic.color} />
          </div>
        ))}
      </div>
    </div>
  );
}