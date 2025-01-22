
import { useState } from "react";
import classes from "./RezeptForm.module.css"; 
import { useRouter } from "next/router";
import { useGlobalSession } from "../../context/SessionContext";

export default function RezeptForm({ document, onSave }) {
   const router = useRouter();
    const {id} = router.query;
    const session = useGlobalSession();
    const user = session?.user;
  const [formData, setFormData] = useState({
    type: "rez",
    title: document?.title || "Titel",
    author: `${user.first_name} ${user.surname}` || "",
    patientFirstName: document?.data?.patientFirstName || "",
    patientLastName: document?.data?.patientLastName || "",
    birthDate: document?.data?.birthDate || "",
    medications: document?.data?.medications || [
      {
        id: Date.now(),
        medicationName: "",
        dosage: "",
        intakeFrequency: "",
        duration: "",
        specialInstructions: "",
      },
    ],
    prescribingDoctor: document?.data?.prescribingDoctor || "",
    issueDate: document?.data?.issueDate || new Date().toISOString().split("T")[0],
    additionalNotes: document?.data?.additionalNotes || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = formData.medications.map((med, i) =>
      i === index ? { ...med, [field]: value } : med
    );
    setFormData({ ...formData, medications: updatedMedications });
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
    setFormData({ ...formData, medications: updatedMedications });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const documentData = {
      patientId: id,
      type: "rez",
      title: formData.title || "Title",
      author: formData.author,
      data: {
        patientFirstName: formData.patientFirstName,
        patientLastName: formData.patientLastName,
        birthDate: formData.birthDate,
        medications: formData.medications,
        prescribingDoctor: formData.prescribingDoctor,
        issueDate: formData.issueDate,
        additionalNotes: formData.additionalNotes,
    }
  }
    try {
      const response = await fetch("/api/medical_record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentData)
      });
    
      const data = await response.json();
      console.log("Medical doc saved", data)

      if (response.ok) {
        console.log("Dokument gespeichert:", data);
        if (onSave) onSave(data); // Notify parent component, if necessary
      } else {
        console.error("Fehler beim Speichern:", data.error);
      }
    } catch (error) {
      console.error("Fehler bei der Anfrage:", error);
    }
  };
  

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.titleHeading}>Rezept</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label>Rezepttitel</label>
          <input
            className={classes.inputField}
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Vorname des Patienten</label>
          <input
            className={classes.inputField}
            name="patientFirstName"
            value={formData.patientFirstName}
            onChange={handleChange}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Nachname des Patienten</label>
          <input
            className={classes.inputField}
            name="patientLastName"
            value={formData.patientLastName}
            onChange={handleChange}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Geburtsdatum</label>
          <input
            className={classes.inputField}
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Medikamente</label>
          {formData.medications.map((med, index) => (
            <div key={med.id} className={classes.medicationItem}>
              <h3 className={classes.medicationTitle}>
                Medikament {index + 1} {/* Dynamische Überschrift */}
              </h3>
              <input
                className={classes.inputField}
                placeholder="Medikamentenname"
                value={med.medicationName}
                onChange={(e) => handleMedicationChange(index, "medicationName", e.target.value)}
              />
              <input
                className={classes.inputField}
                placeholder="Dosierung (z.B. 500mg)"
                value={med.dosage}
                onChange={(e) => handleMedicationChange(index, "dosage", e.target.value)}
              />
              <input
                className={classes.inputField}
                placeholder="Einnahmehäufigkeit"
                value={med.intakeFrequency}
                onChange={(e) => handleMedicationChange(index, "intakeFrequency", e.target.value)}
              />
              <input
                className={classes.inputField}
                placeholder="Dauer der Einnahme"
                value={med.duration}
                onChange={(e) => handleMedicationChange(index, "duration", e.target.value)}
              />
              <textarea
                className={classes.textareaField}
                placeholder="Besondere Hinweise"
                value={med.specialInstructions}
                onChange={(e) =>
                  handleMedicationChange(index, "specialInstructions", e.target.value)
                }
              />
              <button
                type="button"
                className={classes.removeButton}
                onClick={() => removeMedication(index)}
              >
                Entfernen
              </button>
            </div>
          ))}
          <button type="button" className={classes.addButton} onClick={addMedication}>
            Medikament hinzufügen
          </button>
        </div>

        <div className={classes.formGroup}>
          <label>Verschreibender Arzt</label>
          <input
            className={classes.inputField}
            name="prescribingDoctor"
            value={formData.prescribingDoctor}
            onChange={handleChange}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Ausstellungsdatum</label>
          <input
            className={classes.inputField}
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Zusätzliche Notizen</label>
          <textarea
            className={classes.textareaField}
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </div>

        {mode !== "view" && (
        <button type="submit" className={classes.submitButton}>
          Rezept speichern
        </button>)}
      </form>
    </div>
  );
}