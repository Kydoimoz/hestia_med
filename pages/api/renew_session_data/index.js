import User from "../../../models/User";

async function fetchUpdatedUserData(userId) {
    try {
        const updatedUser = await User.findById(userId);
        if (!updatedUser) {
            throw new Error("User not found");
        }
        return updatedUser;
    } catch (error) {
        console.error("Error fetching updated user data:", error);
        throw error;
    }
}
