<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:60538c708642b880ac995b8e84704a8c4c372db8841938fe88f074e5e9cd6f9e
size 928
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
