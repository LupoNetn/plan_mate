import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { barChartUpcoming } from '../../constants/constants'

const UpcomingTasksChart = () => {
  const chartData = barChartUpcoming.labels.map((label, idx) => ({
    name: label,
    value: barChartUpcoming.series[0].data[idx],
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
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
        />
        <Legend 
          wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
        />
        <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barChartUpcoming.series[0].colors?.[index] || '#8884d8'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default UpcomingTasksChart