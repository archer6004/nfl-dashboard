'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface BarChartCardProps {
  title: string;
  data: any[];
  dataKeys: { key: string; fill: string }[];
  width?: number | string;
  height?: number;
  xAxisKey?: string;
}

export function BarChartCard({
  title,
  data,
  dataKeys,
  width = '100%',
  height = 400,
  xAxisKey = 'name',
}: BarChartCardProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          {dataKeys.map((item) => (
            <Bar key={item.key} dataKey={item.key} fill={item.fill} />
          ))}
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
