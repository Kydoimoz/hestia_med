<<<<<<< HEAD
import connectDB from "../../../libs/medical_db";
import StaffRoles from "../../../models/StaffRoles";
export default async function handler(req, res) {
  const { id } = req.query; // ID des Mitarbeiters aus der URL
  await connectDB(); // Sicherstellen, dass wir mit der DB verbunden sind

  if (req.method === 'PUT') {
    const { role } = req.body; // Hier nehmen wir an, dass du nur die Rolle aktualisierst
    try {
      const updatedStaff = await StaffRoles.findByIdAndUpdate(
        id,
        { role }, // Nur die Rolle wird hier geändert
        { new: true } // Gibt das aktualisierte Dokument zurück
      );

      if (!updatedStaff) {
        return res.status(404).json({ message: 'Mitarbeiter nicht gefunden' });
      }

      res.status(200).json(updatedStaff); // Rückgabe des aktualisierten Mitarbeiters
    } catch (error) {
      res.status(500).json({ message: 'Fehler beim Aktualisieren des Mitarbeiters' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedStaff = await StaffRoles.findByIdAndDelete(id);
      if (!deletedStaff) {
        return res.status(404).json({ message: 'Mitarbeiter nicht gefunden' });
      }

      res.status(200).json({ message: 'Mitarbeiter erfolgreich gelöscht' });
    } catch (error) {
      res.status(500).json({ message: 'Fehler beim Löschen des Mitarbeiters' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f0dfa06f69ee418756ff3e9457d342a3ddec12483ca8741388b0833451246585
size 1481
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
