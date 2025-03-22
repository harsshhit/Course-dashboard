interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = "bg-blue-500" }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}