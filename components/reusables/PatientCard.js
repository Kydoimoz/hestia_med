<<<<<<< HEAD
import React, { useState } from "react";
import classes from "./PatientCard.module.css";
import CaretDown from "./../../public/icons/Caret_Down_MD.svg";
import Button from '@mui/material/Button';
const patient = {
  id: "13fß%!KJKLHhdfskfkad",
  allgemein: [
    { label: "Name", value: "Mariam Aly Farag" },
    { label: "Krankenversicherung", value: "Krankenversicherer" },
    { label: "Privat", value: "Nein" },
    { label: "Geburtsdatum", value: "25.09.2006" },
    { label: "Geschlecht", value: "weiblich" },
    { label: "Adresse", value: "Van-der-null-gasse 24b 21 2" },
    { label: "Telefonnummer", value: "+43 681 814 848 96" },
    { label: "Email", value: "ALY210465@spengergasse.at" },
    { label: "Notfallkontakt", value: "+43 660 587 207 8" },
  ],
};

export default function PatientCard({ patientData, onDelete, onEdit }) {  // patientData direkt als Prop
  const [isOpen, setIsOpen] = useState(true);
  console.log(patientData);
  const patient = patientData || {};
  console.log(patient);
  return (
    <div className={classes.patientCard}>
      <div className={classes.cardHeader} onClick={() => setIsOpen(!isOpen)}>
        <h3>
          {patient.full_name || "Kein Name"}{" "}
          <span className={classes.c}>
            {isOpen ? (
              <CaretDown className={classes.caret} />
            ) : (
              <CaretDown
                className={`${classes.rotate} ${classes.caret}`}
              />
            )}
          </span>
        </h3>
      </div>
      {isOpen && (
        <div className={classes.cardContent}>
         <Button onClick={onDelete}>Patient löschen</Button> 
         <Button onClick={onEdit}>Patient bearbeiten</Button> 
         
          <div className={classes.cardRow}>
            <strong>Name:</strong> <span>{patient.full_name || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Krankenversicherung:</strong>{" "}
            <span>{patient.insurance || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Privat:</strong> <span>{patient.is_private || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Geburtsdatum:</strong>{" "}
            <span>{patient.birth_date || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Geschlecht:</strong>{" "}
            <span>{patient.gender || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Adresse:</strong> <span>{patient.address || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Telefonnummer:</strong>{" "}
            <span>{patient.phoneNumber || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Email:</strong> <span>{patient.email || "Keine Angabe"}</span>
          </div>
          <div className={classes.cardRow}>
            <strong>Notfallkontakt:</strong>{" "}
            <span>{patient.emergency_contact || "Keine Angabe"}</span>
          </div>
        </div>
      )}
    </div>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:45fea596bc495d84c2915ad1d95a0420581129f828791297ad38c6f3128b3910
size 3296
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
