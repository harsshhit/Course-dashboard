"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

interface ComparisonGraphProps {
  percentile: number;
  averagePercentile?: number;
}

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: { isPercentile?: boolean };
}

// ✅ Custom Dot Component (Fixes TypeScript Error)
const CustomDot: React.FC<CustomDotProps> = ({ cx, cy, payload }) => {
  if (payload?.isPercentile) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="#FF0000"
        stroke="#fff"
        strokeWidth={2}
      />
    );
  }
  return null;
};

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
        <span className="font-extrabold">
          You scored {percentile}% percentile
        </span>
        , which is {percentile < averagePercentile ? "lower" : "higher"} than
        the average percentile
        <span className="font-bold"> {averagePercentile}%</span> of all
        engineers who took this assessment.
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="x" type="number" domain={[0, 100]} tickCount={6} />
            <YAxis hide />

            {/* Tooltip for showing percentile */}
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.[0]?.payload?.isPercentile) {
                  return (
                    <div className="bg-white p-2 shadow-lg rounded border">
                      <p className="text-sm font-bold">
                        Your percentile: {percentile}%
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Highlight percentile with a vertical line */}
            <ReferenceLine
              x={percentile}
              stroke="#FF0000"
              strokeDasharray="3 3"
              label={{
                value: `Your Percentile: ${percentile}%`,
                position: "top",
                fill: "#FF0000",
                fontSize: 12,
                fontWeight: "bold",
              }}
            />

            {/* ✅ FIXED: Pass `CustomDot` Component Instead of Inline Function */}
            <Area
              type="monotone"
              dataKey="y"
              stroke="#4F46E5"
              fill="#EEF2FF"
              strokeWidth={2}
              dot={<CustomDot />} // ✅ Fix TypeScript error
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
