import { getAllUsers } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).jason(users);  
    } catch (error) {
        res.status(500).jason({message: 'Internal server error'});
    }
}