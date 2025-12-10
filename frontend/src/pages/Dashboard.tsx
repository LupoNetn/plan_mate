import { Funnel, Plus } from "lucide-react";
import { overviewStats } from "../constants/constants";
import DashboardOverviewStats from "../components/DashboardOverviewStats";
import TaskCompletionChart from "../components/charts/TaskCompletionCharts";
import UpcomingTasksChart from "../components/charts/UpcomingTasksChart";
import TaskTimeline from "../components/charts/Tasktimeline";

const Dashboard = () => {
  return (
    <>
      <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 mt-4 md:mt-5">
        <header>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-between items-start md:items-center">
            <div className="py-2.5 bg-white border border-gray-200 rounded-lg px-3 sm:px-4 hidden md:block">
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                01 jun 2025 - 31 december 2025
              </p>
            </div>

            <div className="md:hidden block text-gray-900 text-base sm:text-lg font-semibold">
              <p>Dashboard</p>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 py-2 px-3 sm:px-4 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 text-xs sm:text-sm font-medium flex-1 md:flex-none">
                <Funnel size={16} className="hidden sm:block flex-shrink-0" />
                <span>Filter</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2 px-3 sm:px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-xs sm:text-sm font-medium flex-1 md:flex-none">
                <Plus size={16} className="hidden sm:block flex-shrink-0" />
                <span>Add Task</span>
              </button>
            </div>
          </div>
          <hr className="mt-4 md:mt-6 lg:mt-8 border-gray-200" />
        </header>

        <div className="mt-4 md:mt-6 lg:mt-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Stay Organized, Stay Jiggy{" "}
            <span className="text-2xl">🔥</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 md:mt-2 lg:mt-3 leading-relaxed max-w-2xl">
            Effortlessly Manage tasks, track progress, and achieve all your
            goals in one place.
          </p>
        </div>

        {/* Overview Stats Grid */}
        <div className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {overviewStats.map((stat) => (
            <DashboardOverviewStats key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="mt-6 md:mt-8 lg:mt-10 space-y-4 md:space-y-6 lg:space-y-8">
          {/* Line and Bar Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Task Completion Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm col-span-2">
              <div className="flex items-center justify-between mb-2 md:mb-3 lg:mb-4">
                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                  Task Completion Over Time
                </h2>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="text-lg">⋯</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mb-3 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500" />
                  <span className="text-gray-600">In Completed</span>
                </div>
              </div>
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <TaskCompletionChart />
              </div>
            </div>

            {/* Upcoming Tasks Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2 md:mb-3 lg:mb-4">
                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                  Upcoming Tasks by Status
                </h2>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="text-lg">⋯</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mb-3 text-xs md:text-sm flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-rose-500" />
                  <span className="text-gray-600">Backlog</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-teal-500" />
                  <span className="text-gray-600">To Do</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-orange-500" />
                  <span className="text-gray-600">In Progress</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-gray-600">Done</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-500" />
                  <span className="text-gray-600">In Review</span>
                </div>
              </div>
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <UpcomingTasksChart />
              </div>
            </div>
          </div>

          {/* Task Timeline */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2 md:mb-3 lg:mb-4">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                Task Completion Over Time
              </h2>
              <button className="text-gray-500 hover:text-gray-700">
                <span className="text-lg">⋯</span>
              </button>
            </div>
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-x-auto">
              <TaskTimeline />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
