import { useState } from "react";
import { fetchWorkspace } from "../services/workspaceService";
import type { Workspace } from "../services/workspaceService";
import useWorkspaceStore from "../stores/workspaceStore";


const useWorkspace = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Workspace | null>(null);
  const [error, setError] = useState<string | null>(null);
  const setCurrentWorkspace = useWorkspaceStore((state) => state.setCurrentWorkspace)

  const fetchSpace = async (id: string) => {
    if (!id) {
      setError("Workspace ID is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const workspace = await fetchWorkspace(id);
      setData(workspace);
      setCurrentWorkspace(workspace)
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to fetch workspace");
    } finally {
      setLoading(false);
    }
  };

  return { fetchSpace, data, loading, error };
};

export default useWorkspace;
