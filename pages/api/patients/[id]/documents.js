<<<<<<< HEAD
import connectDB from "./../../../../libs/medical_db";
import MedicalDocument from "./../../../../models/MedicalDocument";
import Patient from "./../../../../models/Patient";

export default async function handler(req, res) {
  const { method } = req;
  const { patientId } = req.query;

  await connectDB();

  if (method === "POST") {
    try {
      const { type, title, author, data } = req.body;

      // Überprüfe, ob alle erforderlichen Felder vorhanden sind
      if (!type || !title || !data) {
        return res.status(400).json({ error: "Missing required fields: type, title, or data" });
      }

      // Neues Medical Document erstellen
      const medicalDocument = new MedicalDocument({
        type,
        title,
        author: author || "Unknown", // Optionales Feld
        data,
      });

      const savedDocument = await medicalDocument.save();

      // Füge das Dokument dem Patienten hinzu
      const patient = await Patient.findById(patientId);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }

      patient.documents.push(savedDocument._id);
      await patient.save();

      res.status(201).json({ message: "Document added successfully", document: savedDocument });
    } catch (error) {
      console.error("Error saving medical document:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:08ee6d81ca91011315880d53c690866b0ce7ffc7edb0bf8b8390392599aa1845
size 1570
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
