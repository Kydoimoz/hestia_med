"use client";
import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import Search from "../../public/icons/Search_Magnifying_Glass.svg";
import Wifi_High from "../../public/icons/Wifi_High.svg";
import Wifi_Low from "../../public/icons/Wifi_Low.svg";
import Wifi_Medium from "../../public/icons/Wifi_Medium.svg";
import Wifi_None from "../../public/icons/Wifi_None.svg";
import Wifi_Off from "../../public/icons/Wifi_Off.svg";
import Wifi_Problem from "../../public/icons/Wifi_Problem.svg";
import Log_Out from "../../public/icons/Log_Out.svg";
import Bell from "../../public/icons/Bell.svg";
import Help from "../../public/icons/Octagon_Help.svg";
import Settings from "../../public/icons/Settings.svg";
import Users from "../../public/icons/Users.svg";
import Account from "../../public/icons/User_02.svg";
import AddPatient from "../../public/icons/User_Add.svg";
import {useRouter} from 'next/router';
import {signOut, useSession } from "next-auth/react";
import { useGlobalSession } from "../../context/SessionContext";
import Settingss from "../pages/settings";
import Link from "next/link";
import SearchIcon from '../../public/icons/Search_Magnifying_Glass.svg';
import Image from "next/image"

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
export default function Header() {
  const router = useRouter();
  const {data: session} = useSession();
  const practice_id = session?.user?.practice;
  const [patients, setPatients] = useState([]);
  
  const { id } = router.query;

  useEffect(() => {
    if (!session) {
      if (typeof window !== "undefined") {
        router.push("/login");
      }
      return;
    }

    const fetchPatients = async () => {
      if(session?.user?.practice){
        try {
          const response = await fetch(`/api/GET/patients?practice_id=${practice_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
          },
          });
          const data = await response.json();
          console.log("Patient Data ", data);
          setPatients(data);

        } catch (error) {
          console.error("Fehler beim Laden der Patienten:", error);
        }
      }
      else {
        console.error("Practice 404.");
        return;
      }
    };

    fetchPatients();
  }, [id]);


  const handleSignOut = async () => {
      try{
          await signOut();
          router.push("/appointment");
      }
      catch(err){
          console.error("Error,", err);
      }
  } 
  console.log("session: ", session?.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [wifiStatus, setWifiStatus] = useState("high");
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  /*const [patients, setPatients] = useState([
    // Mock-Daten
    { id: 1, name: "Max Mustermann", documents: ["Rezept 1", "AU Bescheinigung"] },
    { id: 2, name: "Anna Müller", documents: ["Röntgenbericht", "Laboranalyse"] },
    { id: 3, name: "Peter Schmidt", documents: ["Therapieplan", "Rechnung"] },
  ]);*/

  const getWifiStatus = () => {
    if (!navigator.onLine) return "off"; // Offline
    const signalStrength = Math.random(); // Simulierte Signalstärke (zwischen 0 und 1)

    if (signalStrength > 0.8) return "high";
    if (signalStrength > 0.5) return "medium";
    if (signalStrength > 0.2) return "low";
    if (signalStrength > 0) return "none";
    return "problem"; // Signalproblem
  };

  useEffect(() => {
    const updateWifiStatus = () => {
      setWifiStatus(getWifiStatus());
    };

    // Initialer Zustand
    updateWifiStatus();

    // Aktualisierung alle 5 Sekunden
    const intervalId = setInterval(updateWifiStatus, 5000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  const renderWifiIcon = () => {
    switch (wifiStatus) {
      case "high":
        return <Wifi_High className={`${classes.high} ${classes.icon}`} />;
      case "medium":
        return <Wifi_Medium className={`${classes.medium} ${classes.icon}`} />;
      case "low":
        return <Wifi_Low className={`${classes.low} ${classes.icon}`} />;
      case "none":
        return <Wifi_None className={`${classes.low} ${classes.icon}`} />;
      case "off":
        return <Wifi_Off className={`${classes.low} ${classes.icon}`} />;
      case "problem":
        return <Wifi_Problem className={`${classes.low} ${classes.icon}`} />;
      default:
        return <Wifi_Problem className={`${classes.low} ${classes.icon}`} />;
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = [];

    patients.forEach((patient) => {
      // Patientensuche
      if (patient.full_name.toLowerCase().includes(lowerCaseQuery)) {
        filteredResults.push({ type: "patient", label: patient.full_name, id: patient._id });
      }
    
    
      // Dokumentensuche
      patient.documents.forEach((doc) => {
        if (doc.toLowerCase().includes(lowerCaseQuery)) {
          filteredResults.push({
            type: "document",
            label: `${doc} (${patient.full_name})`,
            id: patient._id,
          });
        }
      });
    });
    
    setResults(filteredResults);
  };

  const handleSelect = (item) => {
    if (item.type === "patient") {
      console.log(`Navigiere zu Patientendetails: ID ${item.id}`);
      router.push(`/patient/${item.id}`)
    } else if (item.type === "document") {
      console.log(`Navigiere zu Dokumentenansicht: ID ${item.id}`);
    }
    setSearchQuery("");
    setResults([]);
  };

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
            emergency_contact: formData.Notfallkontakt,
            appointments: []
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
          window.location.reload();
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
    <header className={classes.header}>
      <NewPatientButton onClick={() => setShowModal(true)} />
      <div className={classes.search}>
        <Search className={classes.search_icon} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Suche (nach Patienten, Dokumenten, etc.)"
          className={classes.input}
        />
        {results.length > 0 && (
          <div className={classes.dropdown}>
            {results.map((item, index) => (
              <div
                key={index}
                className={`${classes.dropdownItem} ${
                  item.type === "patient" ? classes.patientItem : classes.documentItem
                }`}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={classes.links}>
        <div>{renderWifiIcon()}</div>
        <div><Settings onClick={() => setShowSettingsModal(true)} className={`${classes.icon} ${classes.colorchange}`} /></div>
        <div onClick={() => handleSignOut()}><Log_Out className={`${classes.icon} ${classes.colorchange}`} /></div>
      </div>

      {showModal && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h2>Neuen Patienten hinzufügen</h2>
            <form className={classes.zindex} onSubmit={handleSubmit}>
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
      {showSettingsModal && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h2>Einstellungen</h2>
            <Settingss />
            <div className={classes.modalActions}>
              <button onClick={() => setShowSettingsModal(false)}>Schließen</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}