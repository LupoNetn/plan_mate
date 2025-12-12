import api from "../utils/axios";

interface CreateWorkspaceParams {
  name: string;
  description: string;
}

export interface Workspace {
  id: string;
  name: string;
  projects: {
    id: string;
    name: string;
    tasks: { id: string; title: string }[];
  }[];
}

export const fetchWorkspaces = async () => {
  try {
    const response = await api.get("/workspaces");
    return response.data;
  } catch (error: any) {
    console.error("Error creating workspace:", error);
    throw error;
  }
};


export const fetchWorkspace = async (id: string): Promise<Workspace> => {
  try {
    const res = await api.get<{ workspace: Workspace }>(`/workspaces/${id}`);
    return res.data.workspace;
  } catch (error) {
    console.error("Failed to fetch workspace:", error);
    throw error;
  }
};


export const createWorkspace = async ({
  name,
  description,
}: CreateWorkspaceParams) => {
  try {
    const response = await api.post("/workspaces/", {
      name,
      description,
    });

    return response.data;
  } catch (error: any) {
    console.error("Error creating workspace:", error);
    throw error; // re-throw so calling code can handle it (e.g., toast)
  }
};
