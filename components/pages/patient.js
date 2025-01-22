<<<<<<< HEAD
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./patient.module.css";
import PatientCard from "../reusables/PatientCard";
import AnamneseForm from "../forms/AnamneseForm";
import ArztbriefForm from "../forms/ArztbriefForm";
import UntersuchungsprotokollForm from "../forms/UntersuchungsprotokollForm";
import AUForm from "../forms/AUForm";
import RezeptForm from "../forms/RezeptForm";
import Link from "next/link";
import { useSession } from "next-auth/react";
 
 
 
 
const forms = [
  { label: "Anamnese", value: "ana", component: AnamneseForm },
  { label: "Untersuchungsprotokoll", value: "unt", component: UntersuchungsprotokollForm },
  { label: "Arztbrief", value: "bri", component: ArztbriefForm },
  { label: "Rezept", value: "rez", component: RezeptForm },
  { label: "Arbeitsunfähigkeitsbescheinigung", value: "aub", component: AUForm },
];
 
export default function Patient() {
 const {data: session, status} = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [patientData, setPatientData] = useState(null);
  const [editModal, setEditModal] = useState()
  const [selectedDocument, setSelectedDocument] = useState();
  const [errors, setErrors] = useState();
  useEffect(() => {
    if (status === "unauthenticated") {
        router.push("/login");
    }
}, [status]);
  useEffect(() => {
    const fetchPatient = async () => {
        try {
            console.log(id, "Patient - ID")
            if (id) {
                const res = await fetch(`/api/GET/get_patient_id/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
 
                if (res.ok) {
                    const data = await res.json();
                    setPatientData(data);
                    console.log(data);
                } else {
                    console.log("Response not ok");
                }
            } else {
                console.log("ID is undefined");
            }
        } catch (err) {
            console.error(err);
        }
    };
 
    fetchPatient();
}, [router.query.id]);
 
 

useEffect(() => {
  console.log(selectedDocument)
}, [selectedDocument])
 

 /* const [sampleDocuments, setSampleDocuments] = useState([
    {
      id: 1,
      date: "2024-10-07",
      type: "ana",
      title: "Anamnese - Orthopädie und orthopädische Chirurgie",
      content: "Beispielinhalte der Anamnese",
    },
    {
      id: 2,
      date: "2024-10-07",
      type: "bri",
      title: "Turnbefreiung",
    },
    {
      id: 3,
      date: "2024-10-08",
      type: "unt",
      title: "I10 - Hypertonie",
    },
  ]);*/
 
  const [sampleDocuments, setSampleDocuments] = useState([]);
  const [documents, setDocuments] = useState([]); // Für die gefilterten Dokumente
 
  const [loading, setLoading] = useState(false); // Zustand für das Laden

    const [formData, setFormData] = useState({
      Name: patientData?.full_name,
      Krankenversicherung: "",
      Privat: "Nein",
      Geburtsdatum: "",
      Geschlecht: "",
      Adresse: "",
      Telefonnummer: "",
      Email: "",
      Notfallkontakt: "",
    });
 
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        if (id && !loading) {
          setLoading(true); // Beginne das Laden
          const response = await fetch(`/api/GET/documents?patient_id=${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
 
          if (response.ok) {
            const data = await response.json();
 
            if (Array.isArray(data)) {
              // Konvertiere das Datum für jedes Dokument
              const documentsWithDate = data.map((doc) => ({
                ...doc,
                createdAt: doc.createdAt ? new Date(doc.createdAt) : null,
              }));
 
              setSampleDocuments(documentsWithDate); // State-Update mit API-Daten
              setDocuments(documentsWithDate); // Dokumente initialisieren
            } else {
              console.error("Die API-Daten sind nicht im erwarteten Format.");
            }
          } else {
            console.log("API-Response war nicht erfolgreich.");
          }
        } else {
          console.log("ID ist nicht definiert oder Ladevorgang läuft bereits.");
        }
      } catch (err) {
        console.error("Fehler beim Abrufen der Dokumente:", err);
      } finally {
        setLoading(false); // Ladevorgang abgeschlossen
      }
    };
 
    fetchDocuments();
  }, [id]); // Effekt wird nur bei Änderung von 'id' ausgelöst
 
 
 
  // SampleDocuments immer synchron mit documents halten
  useEffect(() => {
      setDocuments(sampleDocuments);
      console.log("DOCUMENTS: ",documents);
  }, [sampleDocuments]);
  console.log("MEDICAL DOCUMENTS: ", documents);
  const ids = documents.map(doc => doc._id);
console.log(ids); // Ausgabe: ["1", "2", "3"]
 
  const [deleteModal, setDeleteModal] = useState({ open: false, document_id: documents._id});
  console.log("Delete Modal Object ", deleteModal)
  const [selectedForm, setSelectedForm] = useState(forms[0]); // Default to the first form
  const [formMode, setFormMode] = useState("view"); // Modes: 'view' or 'edit'
  const [currentDocument, setCurrentDocument] = useState(null);
  const [query, setQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
 
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      const matchedForm = forms.find(
        (form) =>
          form.label.toLowerCase() === query.toLowerCase() ||
          form.value.toLowerCase() === query.toLowerCase()
      );
      if (matchedForm) {
        setSelectedForm(matchedForm);
        setFormMode("edit");
        setCurrentDocument(null); // Open a blank form
        setQuery("");
        setDropdownVisible(false);
        setModalOpen(true);
      }
      e.preventDefault();
    }
  };
 
  const handleOpenDocument = (doc) => {
    setCurrentDocument(doc);
    console.log("DES IS DOC: " , doc)
    console.log("CURRENT ", documents);
    setSelectedForm(forms.find((form) => form.value === doc.type) || forms[0]);
    setFormMode("view"); // Open in view mode
    setModalOpen(true);
    setSelectedDocument(doc);
  };
 
  const handleEditDocument = () => {
    setFormMode("edit");
  };
 
  const delete_document = async (id) => {
    try {
        const response = await fetch(`/api/DELETE/medical_record/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch...");
        }
        // Hole die Antwort vom Server (wenn benötigt)
        const getdeletedData = await response.json();
        console.log("Data to delete: ", getdeletedData);
        return getdeletedData;
    } catch (err) {
        console.error("Error: ", err);
        return null;
    }
};
 
const handleDelete = async () => {
    setDeleteModal(false);
    window.location.reload();
    console.log("Attempting to delete document with ID:", deleteModal.document_id);
    try {
        const deletedData = await delete_document(deleteModal.document_id);
        console.log("DELETED DATA: ", deletedData);
        if (deletedData) {
            setDocuments((prev) => prev.filter((doc) => doc._id !== deleteModal.document_id));
            setModalOpen(false);
            console.log("Document deleted successfully!");
            
            
        } else {
            console.error("Error: Dokument konnte nicht gelöscht werden.");
        }
        
    } catch (error) {
        console.error('Fehler beim Löschen:', error);
    }
    
};

const delete_patient = async (id) => {
  try {
      const response = await fetch(`/api/DELETE/patient/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (!response.ok) {
          throw new Error("Failed to fetch...");
      }
      // Hole die Antwort vom Server (wenn benötigt)
      const getdeletedData = await response.json();
      console.log("Data to delete: ", getdeletedData);
      router.replace("/appointment")
      return getdeletedData;
  } catch (err) {
      console.error("Error: ", err);
      return null;
  }
};

const handleDeletePatient = async () => {
  setDeleteModal(false);
  window.location.reload();
  console.log("Attempting to delete document with ID:", id);
  try {
      const deletedData = await delete_patient(id);
      console.log("DELETED DATA: ", deletedData);
      if (deletedData) {
          setDocuments((prev) => prev.filter((doc) => doc._id !== id));
          setModalOpen(false);
          console.log("Document deleted successfully!");
          
          
      } else {
          console.error("Error: Dokument konnte nicht gelöscht werden.");
      }
      
  } catch (error) {
      console.error('Fehler beim Löschen:', error);
  }
  
};


 
 
 
  const openDeleteModal = (document) => {
    if (!document || !document._id) {
      console.error("Ungültiges Dokument oder fehlende ID.", document);
      return;
    }
    console.log("Selected document ID: ", document._id); // Logging hier
    setDeleteModal({ open: true, document_id: document._id });
  };
 
 
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedForm(null);
    setCurrentDocument(null);
    setSelectedDocument(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log("Formdata before update", formData)
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`/api/GET/patients/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
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
            emergency_contact: formData.Notfallkontakt,
          }),
        });
  
        if (response.ok) {
          console.log("Patientendaten aktualisiert:", formData);
          setEditModal(false);
          window.location.reload();
        } else {
          console.error("Fehler beim Aktualisieren der Patientendaten:", response.statusText);
        }
      } catch (err) {
        console.error("Error:", err.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSave = (updatedDocument) => {
  
    // Prüfen, welcher Typ ausgewählt ist
    let newDoc = {
      ...updatedDocument,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      type: updatedDocument.type, // Der Typ wird direkt aus dem Formular verwendet
    };
  
    console.log("Neues Dokument: ", newDoc);
  
    // Erweiterung für spezifische Typen (falls nötig)
    switch (updatedDocument.type) {
      case "ana": // Anamnese
        newDoc = {
          ...newDoc,
          firstName: updatedDocument.firstName || "",
          lastName: updatedDocument.lastName || "",
          birthDate: updatedDocument.birthDate || "",
          gender: updatedDocument.gender || "",
          allergies: updatedDocument.allergies || "",
          currentMedications: updatedDocument.currentMedications || "",
          chronicDiseases: updatedDocument.chronicDiseases || "",
          currentSymptoms: updatedDocument.currentSymptoms || "",
          familyHistory: updatedDocument.familyHistory || "",
          smoking: updatedDocument.smoking || false,
          alcohol: updatedDocument.alcohol || false,
          weight: updatedDocument.weight || 0,
          height: updatedDocument.height || 0,
          bloodPressure: updatedDocument.bloodPressure || "",
          additionalNotes: updatedDocument.additionalNotes || "",
        };
        break;
  
      case "bri": // Arztbrief
        newDoc = {
          ...newDoc,
          patientName: updatedDocument.patientName || "",
          patientID: updatedDocument.patientID || "",
          dateOfBirth: updatedDocument.dateOfBirth || "",
          gender: updatedDocument.gender || "",
          address: updatedDocument.address || "",
          diagnosis: updatedDocument.diagnosis || "",
          findings: updatedDocument.findings || "",
          therapy: updatedDocument.therapy || "",
          medication: updatedDocument.medication || "",
          recommendations: updatedDocument.recommendations || "",
          followUp: updatedDocument.followUp || "",
          doctorName: updatedDocument.doctorName || "",
          doctorSignature: updatedDocument.doctorSignature || "",
          issueDate: updatedDocument.issueDate || new Date().toISOString().split("T")[0],
        };
        break;
  
      case "aub": // Arbeitsunfähigkeitsbescheinigung
        newDoc = {
          ...newDoc,
          patientFirstName: updatedDocument.patientFirstName || "",
          patientLastName: updatedDocument.patientLastName || "",
          birthDate: updatedDocument.birthDate || "",
          startDate: updatedDocument.startDate || "",
          endDate: updatedDocument.endDate || "",
          partialIncapacity: updatedDocument.partialIncapacity || false,
          incapacityReason: updatedDocument.incapacityReason || "",
          prescribingDoctor: updatedDocument.prescribingDoctor || "",
          issueDate: updatedDocument.issueDate || new Date().toISOString().split("T")[0],
          additionalNotes: updatedDocument.additionalNotes || "",
        };
        break;
  
      case "rezept": // Rezept
        newDoc = {
          ...newDoc,
          patientFirstName: updatedDocument.patientFirstName || "",
          patientLastName: updatedDocument.patientLastName || "",
          birthDate: updatedDocument.birthDate || "",
          medications: updatedDocument.medications || [],
          prescribingDoctor: updatedDocument.prescribingDoctor || "",
          issueDate: updatedDocument.issueDate || new Date().toISOString().split("T")[0],
          additionalNotes: updatedDocument.additionalNotes || "",
        };
        break;
  
      case "unt": // Untersuchungsprotokoll
        newDoc = {
          ...newDoc,
          Titel: updatedDocument.Titel || "",
          UntersuchungsDatum: updatedDocument.UntersuchungsDatum || "",
          Untersucher: updatedDocument.Untersucher || "",
          Befunde: updatedDocument.Befunde || "",
          Diagnose: updatedDocument.Diagnose || "",
          Empfehlungen: updatedDocument.Empfehlungen || "",
          NachkontrollDatum: updatedDocument.NachkontrollDatum || "",
          Bildgebung: updatedDocument.Bildgebung || "",
          LaborErgebnisse: updatedDocument.LaborErgebnisse || "",
          Vitalzeichen: updatedDocument.Vitalzeichen || {},
          KörperlicheUntersuchung: updatedDocument.KörperlicheUntersuchung || {},
          ZusätzlicheNotizen: updatedDocument.ZusätzlicheNotizen || "",
        };
        break;
  
      default:
        console.error("Unbekannter Typ: ", updatedDocument.type);
    }
  
    if (currentDocument) {
      // Update bestehendes Dokument
      setDocuments((prev) =>
        prev.map((doc) => (doc.id === currentDocument.id ? newDoc : doc))
      );
    } else {
      // Neues Dokument hinzufügen
      setDocuments((prev) => [...prev, newDoc]);
    }
  
    // Modal schließen
    setModalOpen(false);
  };

  const openEditModal = () => {
    if (patientData) {
      setFormData({
        Name: patientData.full_name || "",
        Krankenversicherung: patientData.insurance || "",
        Privat: patientData.is_private || "Nein",
        Geburtsdatum: patientData.birth_date || "",
        Geschlecht: patientData.gender || "",
        Adresse: patientData.address || "",
        Telefonnummer: patientData.phoneNumber || "",
        Email: patientData.email || "",
        Notfallkontakt: patientData.emergency_contact || "",
      });
      setEditModal(true);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.Name) errors.Name = "Name ist erforderlich.";
    if (!formData.Krankenversicherung) errors.Krankenversicherung = "Krankenversicherung ist erforderlich.";
    if (!formData.Geburtsdatum) errors.Geburtsdatum = "Geburtsdatum ist erforderlich.";
    if (!formData.Email) errors.Email = "Email ist erforderlich.";
    return errors;
  };
  
 
  const filteredDocuments =
    selectedFilter === "all"
      ? documents
      : documents.filter((doc) => doc.type === selectedFilter);
 
  const groupedFilteredDocuments = filteredDocuments.reduce((acc, doc) => {
    acc[doc.createdAt] = acc[doc.createdAt] || [];
    acc[doc.createdAt].push(doc);
    return acc;
  }, {});
 
  console.log("DOCUMENTS ARRAY: ", documents);
console.log("DELETE MODAL STATE: ", deleteModal);
 
  return (
    <div className={classes.container}>
      <Link href={"/appointment"}><h3>Zurück zum Terminkalendar</h3></Link>
      <h1>Patientendetails</h1>
      <p>Patient ID: {id}</p>
      <div className={classes.patient}>
        <div className={classes.content}>
          <div
            className={classes.search}
            onFocus={() => setDropdownVisible(true)}
            onBlur={() => setDropdownVisible(false)}
          >
            <input
              type="text"
              placeholder="Geben Sie [tag] + Leertaste ein."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className={classes.input}
            />
            {dropdownVisible && (
              <ul className={classes.dropdown}>
                {forms
                  .filter(
                    (form) =>
                      form.label.toLowerCase().includes(query.toLowerCase()) ||
                      form.value.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((form) => (
                    <li key={form.value} onClick={() => setQuery(form.value)}>
                      {form.label} <span>{form.value} + Leertaste</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>
 
          <div>
            <div className={classes.filters}>
              <button
                className={`${classes.filterButton} ${
                  selectedFilter === "all" ? classes.selected : ""
                }`}
                onClick={() => setSelectedFilter("all")}
              >
                Alle Einträge
              </button>
              {forms.map((form) => (
                <button
                  key={form.value}
                  className={`${classes.filterButton} ${
                    selectedFilter === form.value ? classes.selected : ""
                  }`}
                  onClick={() => setSelectedFilter(form.value)}
                >
                  {form.label}
                </button>
              ))}
            </div>
 
            {Object.keys(groupedFilteredDocuments).map((createdAt) => (
              <div className={classes.query} key={createdAt}>
                  <h3>
                  {createdAt &&
                    new Date(createdAt).toLocaleDateString("de-DE", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </h3>
                {groupedFilteredDocuments[createdAt].map((doc) => (
                  <div key={doc.id} className={classes.documentItem}>
                      <span className={classes.docType}>{doc.type}</span>
                      <span className={classes.docTitle}>{doc.title}</span>
                      <span className={classes.docDate}>
                          {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString("de-DE", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                          }) : "Kein Datum"}
                      </span>
                      <button
                          className={classes.viewButton}
                          onClick={() => handleOpenDocument(doc)}
                      >
                          Anzeigen
                      </button>
                      <button
                          className={classes.deleteButton}
                          onClick={() => openDeleteModal(doc)}
                      >
                          Löschen
                      </button>
                  </div>
              ))}
 
              </div>
            ))}
          </div>
        </div>
       <PatientCard onDelete={handleDeletePatient} onEdit={openEditModal} patientData={patientData || null}/>
      </div>
 
      {modalOpen && (
  <div className={classes.fullscreenModal}>
    <div className={classes.modalContent}>
      <button onClick={handleModalClose} className={classes.closeButton}>
        ✖
      </button>
      {selectedForm?.component ? (
        <selectedForm.component
          document={selectedDocument}
          onClose={() => handleModalClose()}
          onSave={handleSave}
          mode={formMode}
          documents={documents} // Weitergabe der aktuellen Dokumente
          setSampleDocuments={setDocuments} // Die Funktion korrekt übergeben
        />
      ) : (
        <p>Kein Formular verfügbar</p>
      )}
 
 
    </div>
 
  </div>
)}
    {deleteModal.open && (
      <div className={classes.deleteModal}>
        <div className={classes.modalContent}>
          <p>Sind Sie sicher, dass Sie dieses Dokument löschen möchten?</p>
          <button
           onClick={handleDelete}
            className={classes.deleteButton}
          >
            Dokument löschen
          </button>
          <button
            onClick={() => setDeleteModal({ open: false, document_id: documents._id })}
            className={classes.cancelButton}
          >
            Abbrechen
          </button>
        </div>
      </div>
    )}
    {editModal && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h2>Patienten bearbeiten</h2>
            <form className={classes.zindex} onSubmit={handleUpdate}>
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
              
                </div>
              ))}
              <div className={classes.modalActions}>
                <button type="submit">Hinzufügen</button>
                <button
                  type="button"
                  onClick={() => setEditModal(false)}
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:924353179c08dbad617b338b504622cd4b32e91539f6a095f8ae270769e9fc54
size 25084
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
