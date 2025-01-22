
import connectDB from "../../../libs/medical_db";
import Appointment from "../../../models/Appointment";
import Patient from "../../../models/Patient";
import Practice from "../../../models/Practice";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { patientId, startTime, endTime, purpose } = req.body;

    console.log("Empfangene Daten:", { patientId, startTime, endTime, purpose });

    

    try {
      // Verbinde mit der Datenbank
      await connectDB();

      // Validierung der Eingabedaten
      if (!patientId || !startTime || !endTime || !purpose) {
        return res.status(400).json({
          message: "Alle Felder (patientId, startTime, endTime, purpose) sind erforderlich.",
        });
      }

      if (new Date(startTime) >= new Date(endTime)) {
        return res.status(400).json({
          message: "Startzeit muss vor der Endzeit liegen.",
        });
      }

      // Überprüfe, ob der Patient existiert
      const patient = await Patient.findById(patientId);
      if (!patient) {
        return res.status(404).json({ message: "Patient nicht gefunden." });
      }

      console.log("Patient wurde gefunden")

      // Erstelle einen neuen Termin
      const newAppointment = new Appointment({
        patientId: patientId,
        startTime: new Date(startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        purpose: purpose.trim(),
      });

      console.log("Neuer Appointment wurde erstellt")

      // Speichere den Termin in der Datenbank
      const savedAppointment = await newAppointment.save();

      console.log("Neuer Appointment wurde gespeichert")

      // Verknüpfe den Termin mit der Praxis, falls benötigt
      // (Optional: Falls der Termin auch in der Praxis gespeichert werden muss)
      if (patient.practice) {
        await Practice.findByIdAndUpdate(patient.practice, {
          $push: { appointments: savedAppointment._id },
        });
      }



      // Rückgabe der Antwort
      res.status(201).json({
        message: "Termin erfolgreich hinzugefügt.",
        appointment: savedAppointment,
      });
    } catch (err) {
      console.error("Fehler beim Erstellen eines Termins:", err);
      res.status(500).json({ message: "Interner Serverfehler." });
    }
  } else if (req.method === "GET") {
    try {
      // Mit der DB verbinden
      await connectDB();

      // Alle Termine abrufen
      const appointments = await Appointment.find().populate('patientId'); // Verknüpfung mit Patient-Modell

      res.status(200).json({ appointments }); // Rückgabe der Termine
    } catch (err) {
      console.error('Fehler beim Abrufen der Termine:', err);
      res.status(500).json({ message: 'Interner Serverfehler' });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Methode ${req.method} nicht erlaubt.` });
  } 
}
