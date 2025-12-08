"use client";

import { Pie, PieChart } from 'recharts';
import type { DataType } from './page';

// #endregion
export default function PieChartWithPaddingAngle({ data, isAnimationActive = true }: { data: DataType[], isAnimationActive?: boolean }) {
  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="00%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
}