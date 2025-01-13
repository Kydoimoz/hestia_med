import { useState } from "react";

export default function RezeptForm({ document, onSave, mode }) {
  const [formData, setFormData] = useState({
    type: "rezept",
    title: document?.title || "Rezept",
    patientFirstName: document?.patientFirstName || "",
    patientLastName: document?.patientLastName || "",
    birthDate: document?.birthDate || "",
    medications: document?.medications || [
      {
        id: Date.now(), // Unique ID for each medication
        medicationName: "",
        dosage: "",
        intakeFrequency: "",
        duration: "",
        specialInstructions: "",
      },
    ],
    prescribingDoctor: document?.prescribingDoctor || "",
    issueDate: document?.issueDate || new Date().toISOString().split("T")[0],
    additionalNotes: document?.additionalNotes || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = formData.medications.map((med, i) =>
      i === index ? { ...med, [field]: value } : med
    );
    setFormData({
      ...formData,
      medications: updatedMedications,
    });
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      medications: [
        ...formData.medications,
        {
          id: Date.now(),
          medicationName: "",
          dosage: "",
          intakeFrequency: "",
          duration: "",
          specialInstructions: "",
        },
      ],
    });
  };

  const removeMedication = (index) => {
    const updatedMedications = formData.medications.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      medications: updatedMedications,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Titel */}
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Rezepttitel"
      />

      {/* Patientendaten */}
      <input
        name="patientFirstName"
        value={formData.patientFirstName}
        onChange={handleChange}
        placeholder="Vorname des Patienten"
      />
      <input
        name="patientLastName"
        value={formData.patientLastName}
        onChange={handleChange}
        placeholder="Nachname des Patienten"
      />
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        placeholder="Geburtsdatum"
      />

      {/* Medikamentendetails */}
      <h3>Medikamente</h3>
      {formData.medications.map((medication, index) => (
        <div key={medication.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <input
            name="medicationName"
            value={medication.medicationName}
            onChange={(e) => handleMedicationChange(index, "medicationName", e.target.value)}
            placeholder="Medikamentenname"
          />
          <input
            name="dosage"
            value={medication.dosage}
            onChange={(e) => handleMedicationChange(index, "dosage", e.target.value)}
            placeholder="Dosierung (z.B. 500mg)"
          />
          <input
            name="intakeFrequency"
            value={medication.intakeFrequency}
            onChange={(e) => handleMedicationChange(index, "intakeFrequency", e.target.value)}
            placeholder="Einnahmehäufigkeit (z.B. 3x täglich)"
          />
          <input
            name="duration"
            value={medication.duration}
            onChange={(e) => handleMedicationChange(index, "duration", e.target.value)}
            placeholder="Dauer der Einnahme (z.B. 7 Tage)"
          />
          <textarea
            name="specialInstructions"
            value={medication.specialInstructions}
            onChange={(e) => handleMedicationChange(index, "specialInstructions", e.target.value)}
            placeholder="Besondere Hinweise (z.B. nach dem Essen einnehmen)"
          />
          <button
            type="button"
            onClick={() => removeMedication(index)}
            style={{ color: "red", marginTop: "5px" }}
          >
            Medikament entfernen
          </button>
        </div>
      ))}

      <button type="button" onClick={addMedication} style={{ marginTop: "10px" }}>
        Medikament hinzufügen
      </button>

      {/* Arztinformationen */}
      <input
        name="prescribingDoctor"
        value={formData.prescribingDoctor}
        onChange={handleChange}
        placeholder="Verschreibender Arzt"
      />
      <input
        type="date"
        name="issueDate"
        value={formData.issueDate}
        onChange={handleChange}
      />

      {/* Zusätzliche Notizen */}
      <textarea
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
        placeholder="Zusätzliche Notizen"
      />

      {/* Speichern-Button */}
      <button type="submit">Rezept speichern</button>
    </form>
  );
}
