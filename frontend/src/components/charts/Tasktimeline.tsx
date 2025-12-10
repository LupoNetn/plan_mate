import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { timelineTasks } from '../../constants/constants'

const TaskTimeline = () => {
  const chartData = timelineTasks.map((task) => ({
    name: task.title.length > 20 ? task.title.slice(0, 17) + '...' : task.title,
    duration: new Date(task.end).getTime() - new Date(task.start).getTime(),
    start: new Date(task.start).getTime(),
    color: task.priority === 'high' ? '#F43F5E' : task.priority === 'medium' ? '#FB923C' : '#10B981',
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 120, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          type="number" 
          stroke="#6B7280"
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          dataKey="name" 
          type="category" 
          width={110}
          stroke="#6B7280"
          tick={{ fontSize: 11 }}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
        />
        <Bar dataKey="duration" fill="#8884d8" radius={[0, 8, 8, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default TaskTimeline