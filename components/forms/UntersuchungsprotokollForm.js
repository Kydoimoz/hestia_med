import React, { useState } from "react";

export default function UntersuchungsprotokollForm({ sampleDocuments, setSampleDocuments }) {
  const [formData, setFormData] = useState({
    type: "unt",
    title: "",
    patientName: "",
    patientID: "",
    examinationDate: "",
    examiner: "",
    findings: "",
    diagnosis: "",
    recommendations: "",
    followUpDate: "",
    imaging: "",
    labResults: "",
    vitalSigns: {
      heartRate: "",
      bloodPressure: "",
      respiratoryRate: "",
      temperature: "",
      oxygenSaturation: "",
    },
    physicalExamination: {
      generalAppearance: "",
      headAndNeck: "",
      chest: "",
      abdomen: "",
      extremities: "",
      neurological: "",
    },
    additionalNotes: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle nested fields
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSampleDocuments((prev) => [...(prev || []), formData]);
    setFormData({
      type: "unt",
      title: "",
      patientName: "",
      patientID: "",
      examinationDate: "",
      examiner: "",
      findings: "",
      diagnosis: "",
      recommendations: "",
      followUpDate: "",
      imaging: "",
      labResults: "",
      vitalSigns: {
        heartRate: "",
        bloodPressure: "",
        respiratoryRate: "",
        temperature: "",
        oxygenSaturation: "",
      },
      physicalExamination: {
        generalAppearance: "",
        headAndNeck: "",
        chest: "",
        abdomen: "",
        extremities: "",
        neurological: "",
      },
      additionalNotes: "",
    });
  };

  const filteredFields = Object.entries(formData)
    .filter(([key, value]) => key.includes(searchTerm) || JSON.stringify(value).includes(searchTerm))
    .map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>
        {typeof value === "object" ? (
          Object.entries(value).map(([nestedKey, nestedValue]) => (
            <input
              key={nestedKey}
              name={`${key}.${nestedKey}`}
              value={nestedValue}
              onChange={handleChange}
              placeholder={nestedKey}
            />
          ))
        ) : (
          <input name={key} value={value} onChange={handleChange} placeholder={key} />
        )}
      </div>
    ));

  return (
    <div>
      <h2>Untersuchungsprotokoll erstellen</h2>
      <input
        type="text"
        placeholder="Feldsuche"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <form onSubmit={handleSubmit}>
        {filteredFields.length > 0 ? filteredFields : <p>Keine passenden Felder gefunden.</p>}
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}
