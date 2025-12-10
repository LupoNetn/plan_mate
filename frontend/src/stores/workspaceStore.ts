import { create } from "zustand";

interface Workspace {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
}

interface WorkspaceState {
  workspaces: Workspace[];
  setWorkspaces: (spaces: Workspace[]) => void;
}

const useWorkspaceStore = create<WorkspaceState>((set) => ({
  workspaces: [],
  setWorkspaces: (spaces) => set({ workspaces: spaces }),
}));

export default useWorkspaceStore;
