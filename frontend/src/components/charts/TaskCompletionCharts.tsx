import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { lineChart } from '../../constants/constants'

const TaskCompletionChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={lineChart.labels.map((label, idx) => ({
      name: label,
      completed: lineChart.datasets[0].data[idx],
      incomplete: lineChart.datasets[1].data[idx],
    }))}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis 
        dataKey="name" 
        stroke="#6B7280" 
        tick={{ fontSize: 12 }}
      />
      <YAxis 
        stroke="#6B7280"
        tick={{ fontSize: 12 }}
      />
      <Tooltip 
        contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
        cursor={{ strokeDasharray: '3 3' }}
      />
      <Legend 
        wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
      />
      <Line 
        type="monotone" 
        dataKey="completed" 
        stroke={lineChart.datasets[0].borderColor} 
        strokeWidth={2}
        dot={{ fill: lineChart.datasets[0].borderColor, r: 3 }}
        activeDot={{ r: 5 }}
      />
      <Line 
        type="monotone" 
        dataKey="incomplete" 
        stroke={lineChart.datasets[1].borderColor} 
        strokeWidth={2}
        dot={{ fill: lineChart.datasets[1].borderColor, r: 3 }}
        activeDot={{ r: 5 }}
      />
    </LineChart>
  </ResponsiveContainer>
)

export default TaskCompletionChart