
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
