import { create } from "zustand";
import { persist } from "zustand/middleware";

// Types for workspace, project, and task
export interface Task {
  id: string;
  title: string;
}

export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
  ownerId?: string;
  projects: Project[];
}

interface WorkspaceState {
  workspaces: Workspace[];
  currentWorkspace: Workspace | null;

  setWorkspaces: (spaces: Workspace[]) => void;
  setCurrentWorkspace: (workspace: Workspace) => void;
  clearCurrentWorkspace: () => void;
}

const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      workspaces: [],
      currentWorkspace: null,

      setWorkspaces: (spaces) => set({ workspaces: spaces }),
      setCurrentWorkspace: (workspace) => set({ currentWorkspace: workspace }),
      clearCurrentWorkspace: () => set({ currentWorkspace: null }),
    }),
    {
      name: "workspace-storage", // key in localStorage
      partialize: (state) => ({
        workspaces: state.workspaces,
        currentWorkspace: state.currentWorkspace,
      }),
    }
  )
);

export default useWorkspaceStore;
