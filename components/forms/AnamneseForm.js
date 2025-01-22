"use client";
import { useState } from "react";
import { useGlobalSession } from "../../context/SessionContext";
import { useRouter } from "next/router";
import classes from "./AnamneseForm.module.css";
export default function AnamneseForm({ document, onSave, onClose, mode }) {
  const router = useRouter();
  const {id} = router.query;
  const session = useGlobalSession();
  const user = session?.user;
  if(!session){
    router.replace("/login");
    return;
  }
 
    const initial_data = {
      type: "ana",
      title: document?.title || "",
      author: `${user.first_name} ${user.surname}` || "",
      patientId: id || "",
      firstName: document?.data?.firstName || "",
      lastName: document?.data?.lastName || "",
      birthDate: document?.data?.birthDate || "",
      gender: document?.data?.gender || "",
      allergies: document?.data?.allergies || "",
      currentMedications: document?.data?.currentMedications || "",
      chronicDiseases: document?.data?.chronicDiseases || "",
      currentSymptoms: document?.data?.currentSymptoms || "",
      familyHistory: document?.data?.familyHistory || "",
      smoking: document?.data?.smoking || false,
      alcohol: document?.data?.alcohol || false,
      weight: document?.data?.weight || "",
      height: document?.data?.height || "",
      bloodPressure: document?.data?.bloodPressure || "",
      additionalNotes: document?.data?.additionalNotes || "",
    }
    const [formData, setFormData] = useState(initial_data);
 
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };

  
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const documentData = {
        type: formData.type,
        title: formData.title,
        author: formData.author,
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          birthDate: formData.birthDate,
          gender: formData.gender,
          allergies: formData.allergies,
          currentMedications: formData.currentMedications,
          chronicDiseases: formData.chronicDiseases,
          currentSymptoms: formData.currentSymptoms,
          familyHistory: formData.familyHistory,
          smoking: formData.smoking,
          alcohol: formData.alcohol,
          weight: formData.weight,
          height: formData.height,
          bloodPressure: formData.bloodPressure,
          additionalNotes: formData.additionalNotes,
        },
        patientId: formData.patientId,
      };
 
 
   
      try {
        const response = await fetch('/api/medical_record', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(documentData),
        });
   
        const result = await response.json();
        console.log(result);
        if (response.ok) {
          console.log('Dokument erfolgreich gespeichert:', result);
          setFormData(initial_data);
          if(onClose) onClose();
        } else {
          console.error('Fehler beim Speichern des Dokuments:', result);
        }
        
        window.location.reload();
      } catch (error) {
        console.error('Fehler beim Senden der Anfrage:', error);
      }
    };
   
 
    return (
      <form onSubmit={handleSubmit}>
        {/* Titel Input */}
        <h1>Anamnese</h1>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Titel"
          className={classes.input}
        />
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Vorname"
          className={classes.input}
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Nachname"
          className={classes.input}
        />
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          className={classes.input}
        />
        <br></br>
        <select name="gender" className={classes.input} value={formData.gender} onChange={handleChange}>
          <option value="">Geschlecht wählen</option>
          <option value="male">Mann</option>
          <option value="female">Frau</option>
        </select>
        <input
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          placeholder="Allergien"
          className={classes.input}
        />
        <input
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          placeholder="Aktuelle Medikamente"
          className={classes.input}
        />
        <input
          name="chronicDiseases"
          value={formData.chronicDiseases}
          onChange={handleChange}
          placeholder="Chronische Erkrankungen"
          className={classes.input}
        />
        <input
          name="currentSymptoms"
          value={formData.currentSymptoms}
          onChange={handleChange}
          placeholder="Aktuelle Symptome"
          className={classes.input}
        />
        <textarea
          name="familyHistory"
          value={formData.familyHistory}
          onChange={handleChange}
          placeholder="Familienanamnese"
          className={classes.input}
        />
        <br></br>
        <label>
          <input
            type="checkbox"
            name="smoking"
            checked={formData.smoking}
            onChange={handleChange}
          />
          Rauchen
        </label>
        <label>
          <input
            type="checkbox"
            name="alcohol"
            checked={formData.alcohol}
            onChange={handleChange}
          />
          Alkohol
        </label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Gewicht (kg)"
          className={classes.input}
        />

        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          placeholder="Größe (cm)"
          className={classes.input}
        />
        <input
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          placeholder="Blutdruck (bpm)"
          className={classes.input}
        />
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Zusätzliche Notizen"
          className={classes.input}
        />
        
        {mode !== "view" && (
          <button type="submit">Speichern</button>
        )}
      </form>
    );
  }