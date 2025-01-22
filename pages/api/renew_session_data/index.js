<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f8559f104ade50d5897a4df4406bb59cd56144b679cae8044362eb6bfa7dc717
size 400
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
