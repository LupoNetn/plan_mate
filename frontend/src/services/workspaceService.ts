import api from "../utils/axios";

interface CreateWorkspaceParams {
  name: string;
  description: string;
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
