<<<<<<< HEAD
import mongoose from "mongoose";
/**
 * 
 * @async
 * @returns {Promise<void>}
 * @throws {Error} 
 */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,  
        });

        console.log("Erfolgreich mit der MongoDB-Datenbank verbunden.");
    } catch (err) {
        console.error(`Fehler beim Verbinden mit der MongoDB-Datenbank: ${err.message}`);
        console.error("Stack-Trace: ", err.stack);
        throw new Error("Verbindung zur MongoDB fehlgeschlagen.");
    }
};

export default connectDB;
=======
version https://git-lfs.github.com/spec/v1
oid sha256:827b339096985d5c89fb341daa4b1bd7547e0f0320022efea3b3ec7b1d9e0561
size 651
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
