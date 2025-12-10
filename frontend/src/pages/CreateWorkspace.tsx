import { Navigate } from "react-router";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../stores/authStore";
import { Plus, X } from "lucide-react";
import { useState, useEffect } from "react";
import CreateWorkspaceDialog from "../components/CreateWorkspaceDialog";

const workspaces = [
  { id: 1, name: "Foodie App", createdAt: "2025-12-01" },
  { id: 2, name: "Project X", createdAt: "2025-11-15" },
  { id: 3, name: "Marketing Hub", createdAt: "2025-10-30" },
];

const CreateWorkspace = () => {
  const user = useAuthStore((state) => state.user);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDialog(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="min-h-screen bg-gray-50">
      <header>
        <Navbar />
      </header>

      <main className="spacing mt-30 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Workspaces
          </h1>
          <p className="text-gray-600 text-md">
            Manage all your projects in one place, stay organized, and
            collaborate efficiently.
          </p>
        </div>

        {/* Workspace Cards */}
        <div className="flex flex-wrap gap-6">
          {workspaces.map((space) => (
            <button
              key={space.id}
              className="w-full sm:w-[250px] sm:h-[200px] h-[200px] bg-gray-100 border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="text-left pl-2">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {space.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  Created: {space.createdAt}
                </p>
              </div>
            </button>
          ))}

          {/* Add New Workspace */}
          <button
            onClick={handleOpenDialog}
            className="w-full sm:w-[250px] sm:h-[200px] h-[200px] bg-gray-100 border border-gray-200 rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
          >
            <Plus className="w-10 h-10 text-gray-500" />
          </button>
        </div>
      </main>

      {/* Overlay & Modal */}
      {openDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={handleCloseDialog}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 max-w-md w-[95%] relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Dialog Content */}
            <CreateWorkspaceDialog closeDialog={handleCloseDialog} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CreateWorkspace;
