import classes from "./Sidebar.module.css";
import AddPatient from "../../public/icons/User_Add.svg";
import Calendar from "../../public/icons/Calendar_Days.svg";
import Patients from "../../public/icons/Users.svg";
import Stats from "../../public/icons/Chart_Bar_Vertical_01.svg";
import Finance from "../../public/icons/Credit_Card_01.svg";
import Forms from "../../public/icons/File_Edit.svg";
import Settings from "../../public/icons/Settings.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGlobalSession } from "../../context/SessionContext";

const links = [
  { icon: Calendar, label: "Terminkalendar", path: "/appointment" },
  { icon: Patients, label: "Patientenverwaltung", path: "/patients" },
  { icon: Stats, label: "Statistiken", path: "/statistics" },
  { icon: Finance, label: "Finanzmanagement", path: "/finance" },
  { icon: Forms, label: "Formularmanagement", path: "/forms" },
  { icon: Settings, label: "Einstellungen", path: "/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const session = useGlobalSession();
  if (!session) {
    if (typeof window !== "undefined") {
      router.push("/login");
    }
    return;
  }
  const [activeLink, setActiveLink] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Krankenversicherung: "",
    Privat: "Nein",
    Geburtsdatum: "",
    Geschlecht: "",
    Adresse: "",
    Telefonnummer: "",
    Email: "",
    Notfallkontakt: "",
  });
  const [errors, setErrors] = useState({});

  const handleNavigation = (index, path) => {
    setActiveLink(index);
    router.push(path);
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} ist erforderlich`;
      }
    });
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('/api/patients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            full_name: formData.Name,
            insurance: formData.Krankenversicherung,
            is_private: formData.Privat,
            gender: formData.Geschlecht,
            birth_date: formData.Geburtsdatum,
            address: formData.Adresse,
            phoneNumber: formData.Telefonnummer,
            email: formData.Email,
            practice: session?.user?.practice || null,
            emergency_contact: formData.Notfallkontakt
          })
        })
        if(response.ok){
          console.log("Patient hinzugefügt:", formData);
          setShowModal(false);
          setFormData({
            full_name: "",
            insurance: "",
            is_private: "Nein",
            birth_date: "",
            gender: "",
            address: "",
            phoneNumber: "",
            email: "",
            emergency_contact: "",
          });
          setErrors({});
        }
        else {
          console.error("Fehler beim Hinzufügen des Patienten:", response.statusText);
        }
  
      }

      catch(err){
        console.error("Error: ", err.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={classes.sidebar}>
      <NewPatientButton onClick={() => setShowModal(true)} />
      <div className={classes.links}>
        {links.map((link, index) => (
          <SidebarLink
            key={index}
            icon={link.icon}
            label={link.label}
            isActive={activeLink === index}
            onClick={() => handleNavigation(index, link.path)}
          />
        ))}
      </div>

      {showModal && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h2>Neuen Patienten hinzufügen</h2>
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((key) => (
                <div key={key} className={classes.formGroup}>
                  <label>{key}</label>
                  {key === "Privat" ? (
                    <select
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      className={classes.selectInput}
                    >
                      <option value="Ja">Ja</option>
                      <option value="Nein">Nein</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      className={classes.textInput}
                    />
                  )}
                  {errors[key] && <span className={classes.error}>{errors[key]}</span>}
                </div>
              ))}
              <div className={classes.modalActions}>
                <button type="submit">Hinzufügen</button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function NewPatientButton({ onClick }) {
  return (
    <div className={classes.newPatient} onClick={onClick}>
      <div className={classes.add_patient_icon}>
        <AddPatient className={classes.newpatient} />
      </div>
      Neuer Patient
    </div>
  );
}

function SidebarLink({ icon: Icon, label, isActive, onClick }) {
  return (
    <div
      className={`${classes.link} ${isActive ? classes.active_link : ""}`}
      onClick={onClick}
    >
      <Icon className={classes.link_icon} /> {label}
    </div>
  );
}
