import { useState } from "react";

export default function AUForm({ document, onSave, mode }) {
  const [formData, setFormData] = useState({
    type: "aub",
    title: document?.title || "Arbeitsunfähigkeitsbescheinigung",
    patientFirstName: document?.patientFirstName || "",
    patientLastName: document?.patientLastName || "",
    birthDate: document?.birthDate || "",
    startDate: document?.startDate || "",
    endDate: document?.endDate || "",
    partialIncapacity: document?.partialIncapacity || false,
    incapacityReason: document?.incapacityReason || "",
    prescribingDoctor: document?.prescribingDoctor || "",
    issueDate: document?.issueDate || new Date().toISOString().split("T")[0],
    additionalNotes: document?.additionalNotes || "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
        placeholder="Titel der Bescheinigung"
        disabled={mode === "view"}
      />

      {/* Patientendaten */}
      <input
        name="patientFirstName"
        value={formData.patientFirstName}
        onChange={handleChange}
        placeholder="Vorname des Patienten"
        disabled={mode === "view"}
      />
      <input
        name="patientLastName"
        value={formData.patientLastName}
        onChange={handleChange}
        placeholder="Nachname des Patienten"
        disabled={mode === "view"}
      />
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        placeholder="Geburtsdatum"
        disabled={mode === "view"}
      />

      {/* Zeitraum der Arbeitsunfähigkeit */}
      <h3>Zeitraum der Arbeitsunfähigkeit</h3>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Startdatum"
        disabled={mode === "view"}
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="Enddatum"
        disabled={mode === "view"}
      />
      <label>
        <input
          type="checkbox"
          name="partialIncapacity"
          checked={formData.partialIncapacity}
          onChange={handleChange}
          disabled={mode === "view"}
        />
        Teilweise Arbeitsunfähigkeit
      </label>
      {formData.partialIncapacity && (
        <textarea
          name="incapacityReason"
          value={formData.incapacityReason}
          onChange={handleChange}
          placeholder="Grund der teilweisen Arbeitsunfähigkeit"
          disabled={mode === "view"}
        />
      )}

      {/* Arztinformationen */}
      <h3>Arztinformationen</h3>
      <input
        name="prescribingDoctor"
        value={formData.prescribingDoctor}
        onChange={handleChange}
        placeholder="Verschreibender Arzt"
        disabled={mode === "view"}
      />
      <input
        type="date"
        name="issueDate"
        value={formData.issueDate}
        onChange={handleChange}
        disabled={mode === "view"}
      />

      {/* Zusätzliche Notizen */}
      <textarea
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
        placeholder="Zusätzliche Notizen"
        disabled={mode === "view"}
      />

      {/* Speichern-Button */}
      {mode !== "view" && <button type="submit">Bescheinigung speichern</button>}
    </form>
  );
}
