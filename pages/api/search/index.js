import connectDB from "../../../libs/medical_db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Datenbankverbindung herstellen
    const { db } = await connectDB();

    const { query, practiceId } = req.query;

    if (!practiceId || !query) {
      return res.status(400).json({ error: "practiceId and query are required" });
    }

    const lowerCaseQuery = query.toLowerCase();

    // Patienten und Dokumente abrufen
    const patients = await db.collection("patients").aggregate([
      {
        $match: { practice: new ObjectId(practiceId) },
      },
      {
        $lookup: {
          from: "documents", // Name der Dokument-Sammlung
          localField: "documents",
          foreignField: "_id",
          as: "documentDetails",
        },
      },
    ]).toArray();

    const filteredResults = [];

    // Patienten- und Dokumentensuche
    patients.forEach((patient) => {
      // Patientensuche
      if (patient.full_name.toLowerCase().includes(lowerCaseQuery)) {
        filteredResults.push({
          type: "patient",
          label: patient.full_name,
          id: patient._id,
        });
      }

      // Dokumentensuche
      patient.documentDetails.forEach((doc) => {
        if (doc.title.toLowerCase().includes(lowerCaseQuery)) {
          filteredResults.push({
            type: "document",
            label: `${doc.title} (${patient.full_name})`,
            id: patient._id,
          });
        }
      });
    });

    res.status(200).json(filteredResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
