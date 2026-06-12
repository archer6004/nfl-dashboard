'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface RadarChartCardProps {
  title: string;
  data: any[];
  dataKeys: { key: string; stroke: string }[];
  width?: number | string;
  height?: number;
}

export function RadarChartCard({
  title,
  data,
  dataKeys,
  width = '100%',
  height = 400,
}: RadarChartCardProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width={width as any} height={height}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          {dataKeys.map((item) => (
            <Radar
              key={item.key}
              name={item.key}
              dataKey={item.key}
              stroke={item.stroke}
              fill={item.stroke}
              fillOpacity={0.25}
            />
          ))}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
