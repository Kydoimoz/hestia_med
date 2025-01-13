import { useState } from "react";

export default function ArztbriefForm({ document, onSave, mode }) {
  const [formData, setFormData] = useState({
    type: "bri",
    title: document?.title || "",
    patientName: document?.patientName || "",
    patientID: document?.patientID || "",
    dateOfBirth: document?.dateOfBirth || "",
    gender: document?.gender || "",
    address: document?.address || "",
    diagnosis: document?.diagnosis || "",
    findings: document?.findings || "",
    therapy: document?.therapy || "",
    medication: document?.medication || "",
    recommendations: document?.recommendations || "",
    followUp: document?.followUp || "",
    doctorName: document?.doctorName || "",
    doctorSignature: document?.doctorSignature || "",
    issueDate: document?.issueDate || new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Arztbrief</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Titel des Arztbriefs"
      />

      <input
        name="patientName"
        value={formData.patientName}
        onChange={handleChange}
        placeholder="Name des Patienten"
      />

      <input
        name="patientID"
        value={formData.patientID}
        onChange={handleChange}
        placeholder="Patienten-ID"
      />

      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />

      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Geschlecht wählen</option>
        <option value="male">Männlich</option>
        <option value="female">Weiblich</option>
        <option value="other">Anderes</option>
      </select>

      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Adresse des Patienten"
      />

      <textarea
        name="diagnosis"
        value={formData.diagnosis}
        onChange={handleChange}
        placeholder="Diagnose"
      />

      <textarea
        name="findings"
        value={formData.findings}
        onChange={handleChange}
        placeholder="Befunde"
      />

      <textarea
        name="therapy"
        value={formData.therapy}
        onChange={handleChange}
        placeholder="Therapie"
      />

      <textarea
        name="medication"
        value={formData.medication}
        onChange={handleChange}
        placeholder="Medikation"
      />

      <textarea
        name="recommendations"
        value={formData.recommendations}
        onChange={handleChange}
        placeholder="Empfehlungen"
      />

      <input
        type="date"
        name="followUp"
        value={formData.followUp}
        onChange={handleChange}
        placeholder="Nachfolgetermin"
      />

      <input
        name="doctorName"
        value={formData.doctorName}
        onChange={handleChange}
        placeholder="Name des Arztes"
      />

      <input
        name="doctorSignature"
        value={formData.doctorSignature}
        onChange={handleChange}
        placeholder="Arztsignatur"
      />

      <input
        type="date"
        name="issueDate"
        value={formData.issueDate}
        onChange={handleChange}
        placeholder="Ausstellungsdatum"
      />

      <button type="submit">Speichern</button>
    </form>
  );
}