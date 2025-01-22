<<<<<<< HEAD
import connectDB from "../../../../libs/medical_db";
import Practice from "../../../../models/Practice";
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB();

            const { practice_name, practice_address, practice_phoneNumber } = req.body;
            console.log(practice_name, practice_address, practice_phoneNumber);
            let _practice = await Practice.findOne({ name: practice_name});
            console.log(_practice);
            if (_practice) {
                console.log("Praxis existiert bereits");
                return res.status(400).json({ message: "Praxis existiert bereits" });
            }

            // Erstelle eine neue Praxis
            _practice = new Practice({
                name: practice_name,
                practice_address: practice_address,
                practice_phoneNumber: practice_phoneNumber
            });

            // Logge die Daten, die gespeichert werden
            console.log("Daten zum Speichern:", _practice);

            // Speichere die Praxis
            await _practice.save();

            return res.status(201).json({ _practice });
        } catch (err) {
            console.error("Fehler beim Erstellen der Praxis:", err);
            return res.status(500).json({ message: "Fehler beim Erstellen der Praxis" });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:e754cc82ae6d19b0eacd8c9c5cd5465b81fd9d677ad7f8cd636664a02ce65da7
size 1515
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
