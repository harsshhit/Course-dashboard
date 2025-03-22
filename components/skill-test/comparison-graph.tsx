"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  DotProps,
} from "recharts";

interface ComparisonGraphProps {
  percentile: number;
  averagePercentile?: number;
}

export function ComparisonGraph({
  percentile,
  averagePercentile = 72,
}: ComparisonGraphProps) {
  // Generate bell curve data points
  const generateBellCurveData = () => {
    const data = [];
    for (let i = 0; i <= 100; i += 5) {
      const y = Math.exp(-Math.pow(i - 50, 2) / 1000);
      data.push({
        x: i,
        y: y,
        isPercentile: i === Math.round(percentile),
      });
    }
    return data;
  };

  const data = generateBellCurveData();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Comparison Graph
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        You scored {percentile}% percentile which is{" "}
        {percentile < averagePercentile ? "lower" : "higher"} than the average
        percentile {averagePercentile}% of all the engineers who took this
        assessment.
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="x" type="number" domain={[0, 100]} tickCount={6} />
            <YAxis hide />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.[0]?.payload?.isPercentile) {
                  return (
                    <div className="bg-white p-2 shadow-lg rounded border">
                      <p className="text-sm">Your percentile: {percentile}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#4F46E5"
              fill="#EEF2FF"
              strokeWidth={2}
              dot={true} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
