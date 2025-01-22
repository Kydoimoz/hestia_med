import connectDB from "../../../../libs/medical_db";
import { NextResponse } from "next/server";
import Patient from "../../../../models/Patient";
import Appointment from "../../../../models/Appointment";

export default async function DELETE(req) {
  try {
    // Verbindung zur Datenbank herstellen
    await connectDB();

    // Extrahieren der Parameter aus der URL
    const { id } = req.query;
    console.log("Patient ID: ", id);

    // Überprüfen, ob die ID vorhanden ist
    if (!id) {
      return NextResponse.json({ message: "Patient ID fehlt." }, { status: 400 });
    }

    // Suchen und Löschen des Patienten
    const patient = await Patient.findByIdAndDelete(id);

    if (!patient) {
      return NextResponse.json({ message: "Kein Patient gefunden, der gelöscht werden kann." }, { status: 404 });
    }

    // Suchen und Löschen aller Termine, die mit diesem Patienten verbunden sind
    const deletedAppointments = await Appointment.deleteMany({ patientId: id });

    console.log(
      `Patient mit ID ${id} wurde gelöscht. Gelöschte Termine: ${deletedAppointments.deletedCount}`
    );

    return NextResponse.json({
      message: "Patient und zugehörige Termine erfolgreich gelöscht.",
      deletedAppointmentsCount: deletedAppointments.deletedCount,
    }, { status: 200 });
  } catch (err) {
    console.error("Fehler beim Löschen des Patienten oder der Termine: ", err);
    return NextResponse.json({ message: "Interner Serverfehler." }, { status: 500 });
  }
}
