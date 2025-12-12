import type { ComponentType, SVGProps } from "react";
import {
  ClipboardList,
  CheckCircle,
  Clock,
  AlertCircle,
  LayoutDashboard,
  CheckSquare,
  Users,
  Inbox,
  BarChart3,
} from "lucide-react";

// Demo data for Dashboard overview

export type OverviewStat = {
  id: string;
  title: string;
  value: number;
  subtitle?: string;
  footnote?: string;
  color?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type LineChartDataset = {
  id: string;
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor?: string;
};

export type LineChart = {
  labels: string[];
  datasets: LineChartDataset[];
};

export type BarSeries = {
  label: string;
  data: number[];
  colors?: string[];
};

export type BarChartUpcoming = {
  labels: string[];
  series: BarSeries[];
};

export type Avatar = {
  name: string;
  color?: string;
};

export type TimelineTask = {
  id: string;
  title: string;
  start: string; // ISO date string
  end: string; // ISO date string
  priority?: "low" | "medium" | "high";
  priorityLabel?: string;
  avatars?: Avatar[];
};

/* Typed demo data */

export const overviewStats: OverviewStat[] = [
  {
    id: "total",
    title: "Total Tasks",
    value: 27,
    subtitle: "Task Today",
    footnote: "in the last 24 hours",
    color: "blue",
    icon: ClipboardList,
  },
  {
    id: "completed",
    title: "Completed Tasks",
    value: 17,
    subtitle: "Completed",
    footnote: "in the last 24 hours",
    color: "teal",
    icon: CheckCircle,
  },
  {
    id: "pending",
    title: "Pending Tasks",
    value: 13,
    subtitle: "Pending",
    footnote: "in the last 24 hours",
    color: "orange",
    icon: Clock,
  },
  {
    id: "overdue",
    title: "Overdue Tasks",
    value: 3,
    subtitle: "Overdue",
    footnote: "in the last 24 hours",
    color: "pink",
    icon: AlertCircle,
  },
];

export const lineChart: LineChart = {
  labels: ["Backlog", "To Do", "In Progress", "Done", "In Review"],
  datasets: [
    {
      id: "completed",
      label: "Completed",
      data: [10, 40, 25, 45, 30],
      borderColor: "#10B981",
      backgroundColor: "rgba(16,185,129,0.06)",
    },
    {
      id: "incomplete",
      label: "In Completed",
      data: [30, 25, 15, 10, 20],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59,130,246,0.06)",
    },
  ],
};

export const barChartUpcoming: BarChartUpcoming = {
  labels: ["Backlog", "To Do", "In Progress", "Done", "In Review"],
  series: [
    {
      label: "Upcoming Tasks by Status",
      data: [20, 45, 60, 22, 60],
      colors: ["#F43F5E", "#06B6D4", "#FB923C", "#10B981", "#6366F1"],
    },
  ],
};

export const timelineTasks: TimelineTask[] = [
  {
    id: "t1",
    title: "Story Telling Bechance Alecia",
    start: "2025-02-13",
    end: "2025-02-14",
    priority: "high",
    priorityLabel: "HIGH PRIORITY",
    avatars: [
      { name: "HA", color: "#F97316" },
      { name: "JS", color: "#06B6D4" },
    ],
  },
  {
    id: "t2",
    title: "Create Dashboard for user Doctor",
    start: "2025-02-13",
    end: "2025-02-14",
    priority: "medium",
    priorityLabel: "MEDIUM PRIORITY",
    avatars: [{ name: "MB", color: "#6366F1" }],
  },
  {
    id: "t3",
    title: "Create Component Design System",
    start: "2025-02-14",
    end: "2025-02-16",
    priority: "low",
    priorityLabel: "LOW PRIORITY",
    avatars: [{ name: "AL", color: "#10B981" }],
  },
  {
    id: "t4",
    title: "Create Page Detail Patient",
    start: "2025-02-19",
    end: "2025-02-21",
    priority: "low",
    priorityLabel: "LOW PRIORITY",
    avatars: [
      { name: "HM", color: "#F43F5E" },
      { name: "JR", color: "#06B6D4" },
    ],
  },
];

export default {
  overviewStats,
  lineChart,
  barChartUpcoming,
  timelineTasks,
};

//Workspace sidebar navigation links
export const getNavLinks = (workspaceId: string) => [
  {
    title: "Dashboard",
    path: `/workspace/${workspaceId}`,
    icon: LayoutDashboard,
  },
  {
    title: "My Projects",
    path: `/workspace/${workspaceId}/projects`,
    icon: CheckSquare,
  },
  {
    title: "Team Members",
    path: `/workspace/${workspaceId}/team`,
    icon: Users,
  },
  {
    title: "Settings",
    path: `/workspace/${workspaceId}/settings`,
    icon: Inbox,
  },
  {
    title: "Analytics",
    path: `/workspace/${workspaceId}/analytics`,
    icon: BarChart3,
  },
];
