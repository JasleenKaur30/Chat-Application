import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import User from '../models/user.model.js';

// Controller function
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers)

        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error in getUsers:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


