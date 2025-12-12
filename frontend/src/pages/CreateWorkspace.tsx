import { Link, Navigate } from "react-router";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../stores/authStore";
import { Loader2, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import CreateWorkspaceDialog from "../components/CreateWorkspaceDialog";
import useWorkspaceStore from "../stores/workspaceStore";
import { fetchWorkspaces } from "../services/workspaceService";
import toast from "react-hot-toast";

const CreateWorkspace = () => {
  const user = useAuthStore((state) => state.user);

  const workspace = useWorkspaceStore((state) => state.workspaces);
  const setWorkspace = useWorkspaceStore((state) => state.setWorkspaces);

  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Fetch workspaces on mount
  useEffect(() => {
    const loadWorkspaces = async () => {
      try {
        const data = await fetchWorkspaces();
        setWorkspace(data.myWorkSpaces || []); // ensure array
      } catch (err) {
        console.error("Failed to fetch workspaces:", err);
        toast.error('Something went wrong try later')
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkspaces();
  }, [setWorkspace]);

  // Close dialog on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDialog(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!user) return <Navigate to="/login" />;

  return (
    <section className="min-h-screen bg-gray-50">
      <header>
        <Navbar />
      </header>

      <main className="spacing mt-30 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Workspaces
          </h1>
          <p className="text-gray-600 text-md">
            Manage all your projects in one place, stay organized, and
            collaborate efficiently.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin"/>
          </div>
        )}

        {/* Workspace Cards */}
        {!loading && (
          <div className="flex flex-wrap gap-6">
            {workspace.map((space: any) => (
             <Link to={`/workspace/${space.id}`} className="w-full sm:w-[250px] sm:h-[200px] h-[200px] bg-gray-100 border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
               <button
                key={space.id}
              >
                <div className="text-left pl-2">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {space.name}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Created: {new Date(space.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </button>
             </Link>
            ))}

            {/* Add Workspace */}
            <button
              onClick={handleOpenDialog}
              className="w-full sm:w-[250px] sm:h-[200px] h-[200px] bg-gray-100 border border-gray-200 rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
            >
              <Plus className="w-10 h-10 text-gray-500" />
            </button>
          </div>
        )}
      </main>

      {/* Modal Overlay */}
      {openDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={handleCloseDialog}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 max-w-md w-[95%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <CreateWorkspaceDialog closeDialog={handleCloseDialog} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CreateWorkspace;
