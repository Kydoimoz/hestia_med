<<<<<<< HEAD
import { useState } from "react";
import classes from './AUForm.module.css';

export default function AUForm({ document, onSave, mode }) {
  const [formData, setFormData] = useState({
    type: "aub",
    title: document?.title || "",
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
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      {/* Große Überschrift */}
      <h1 className={classes.titleHeading}>AU</h1>
      <h2 className={classes.h2}>Bescheinigung</h2>

      {/* Titel */}
      <div className={classes.formGroup}>
        <input
          className={classes.inputField}
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Titel der Bescheinigung"
          disabled={mode === "view"}
        />
      </div>

      {/* Patientendaten */}

      <div className={classes.formGroup}>
        <input
          className={classes.inputField}
          name="patientFirstName"
          value={formData.patientFirstName}
          onChange={handleChange}
          placeholder="Vorname des Patienten"
          disabled={mode === "view"}
        />
      </div>
      <div className={classes.formGroup}>
        <input
          className={classes.inputField}
          name="patientLastName"
          value={formData.patientLastName}
          onChange={handleChange}
          placeholder="Nachname des Patienten"
          disabled={mode === "view"}
        />
      </div>
      <h4>Geburtsdatum</h4>
      <div className={classes.formGroup}>
        <input
          type="date"
          className={classes.inputField}
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>

      {/* Zeitraum der Arbeitsunfähigkeit */}
      <h3>Zeitraum der Arbeitsunfähigkeit</h3>
      <h4>Startdatum</h4>
      <div className={classes.formGroup}>
        <input
          type="date"
          className={classes.inputField}
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>
      <h4>Enddatum</h4>
      <div className={classes.formGroup}>
        <input
          type="date"
          className={classes.inputField}
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>

      {/* Teilweise Arbeitsunfähigkeit */}
      <div className={classes.checkboxGroup}>
        <label className={classes.checkboxLabel}>
          <input
            type="checkbox"
            name="partialIncapacity"
            checked={formData.partialIncapacity}
            onChange={handleChange}
            disabled={mode === "view"}
          />
          Teilweise Arbeitsunfähigkeit
        </label>
      </div>
      {formData.partialIncapacity && (
        <div className={classes.formGroup}>
          <textarea
            className={classes.textareaField}
            name="incapacityReason"
            value={formData.incapacityReason}
            onChange={handleChange}
            placeholder="Grund der teilweisen Arbeitsunfähigkeit"
            disabled={mode === "view"}
          />
        </div>
      )}

      {/* Arztinformationen */}
      <h3>Arztinformationen</h3>
      <div className={classes.formGroup}>
        <input
          className={classes.inputField}
          name="prescribingDoctor"
          value={formData.prescribingDoctor}
          onChange={handleChange}
          placeholder="Verschreibender Arzt"
          disabled={mode === "view"}
        />
      </div>
      <div className={classes.formGroup}>
        <input
          type="date"
          className={classes.inputField}
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>

      {/* Zusätzliche Notizen */}
      <div className={classes.formGroup}>
        <textarea
          className={classes.textareaField}
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Zusätzliche Notizen"
          disabled={mode === "view"}
        />
      </div>

      {/* Speichern-Button */}
      {mode !== "view" && (
        <div className={classes.formGroup}>
          <button type="submit" className={classes.submitButton}>
             speichern
          </button>
        </div>
      )}
    </form>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:fa9de0dc663ea0502e10cb399da4119fea4866a43b1c421aa32056bcb99e9a97
size 5556
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
