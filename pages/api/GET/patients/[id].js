<<<<<<< HEAD
import connectDB from "../../../../libs/medical_db"; // Stelle sicher, dass der Pfad korrekt ist
import Patient from "../../../../models/Patient" // Importiere das Patient-Modell

export default async function handler(req, res) {
  await connectDB(); // Verbindung herstellen

  if (req.method === "PUT") {
    const { id } = req.query;
    const {
      full_name,
      insurance,
      is_private,
      gender,
      birth_date,
      address,
      phoneNumber,
      email,
      emergency_contact,
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Patienten-ID ist erforderlich." });
    }

    try {
      // Prüfen, ob Patient existiert, und Daten aktualisieren
      const result = await Patient.findByIdAndUpdate(
        id,
        {
          full_name,
          insurance,
          is_private,
          gender,
          birth_date,
          address,
          phoneNumber,
          email,
          emergency_contact,
        },
        { new: true } // Rückgabe der aktualisierten Daten
      );

      if (!result) {
        return res.status(404).json({ error: "Patient nicht gefunden." });
      }

      res.status(200).json({ message: "Patientendaten erfolgreich aktualisiert.", patient: result });
    } catch (err) {
      console.error("Fehler beim Aktualisieren:", err.message);
      res.status(500).json({ error: "Interner Serverfehler." });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:db0ef3d8c0e640a5cf1a2c203868f2388fb911fc812e124ccd910b2296ac62dc
size 1582
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
