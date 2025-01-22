
import connectDB from "../../../libs/medical_db";
import StaffRoles from "../../../models/StaffRoles";

export default async function handler(req, res) {
  await connectDB(); // Verbindet mit der MongoDB-Datenbank

  if (req.method === "POST") {
    try {
      const newEmployee = new StaffRoles(req.body);
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(400).json({ error: "Fehler beim Hinzufügen des Mitarbeiters" });
    }
  } else if (req.method === "GET") {
    try {
      const employees = await StaffRoles.find(); // Holt alle Mitarbeiter aus der Datenbank
      res.status(200).json(employees); // Gibt die Mitarbeiterdaten als JSON zurück
    } catch (error) {
      res.status(500).json({ error: "Fehler beim Abrufen der Mitarbeiterdaten" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
