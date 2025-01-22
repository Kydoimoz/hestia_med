<<<<<<< HEAD
import connectDB from "../../../libs/medical_db";
import User from "../../../models/User";
export async function fetchUpdatedUserData(userID) {
    try {
        // Verbindung zur DB herstellen
        await connectDB();

        // Benutzer basierend auf der ID abrufen und sicherstellen, dass die Practice auch mitgeliefert wird
        const updatedUser = await User.findById(userID).populate("practice");

        // Falls kein Benutzer gefunden wurde, Fehler werfen
        if (!updatedUser) {
            throw new Error("Benutzer nicht gefunden");
        }

        return updatedUser;
    } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error);
        throw new Error("Fehler beim Abrufen der Benutzerdaten");
    }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:0eedbc3576b9f8915aa8043c850a747260b09d389cffbf945a0f5e382280c8f7
size 783
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
