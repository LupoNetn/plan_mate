import { db } from "../db/db.js";

export const createNewWorkspace = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validation
    if (!name || name.trim() === "") {
      return res.status(400).json({
        message: "Workspace name is required",
      });
    }
    const userId = req.user?.id;

    const newWorkspace = await db.workspace.create({
      data: {
        name: name.trim(),
        description: description?.trim() || null,
        ...(userId && { ownerId: userId }),
      },
    });

    return res.status(201).json({
      message: "Workspace created successfully",
      workspace: newWorkspace,
    });
  } catch (error) {
    console.error("Error creating workspace:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

export const fetchAllMyWorkspaces = async (req, res) => {
  try {
    const { userId } = req.user;

    const myWorkSpaces = await db.workspace.findMany({
      where: { userId },
    });

    return res.status(200).json({
      message: "Fetched workspaces successfully",
      myWorkSpaces,
    });
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};
