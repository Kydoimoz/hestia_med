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

  const [sampleDocuments, setSampleDocuments] = useState([]);
  const [documents, setDocuments] = useState([]); // Für die gefilterten Dokumente
  
  const [loading, setLoading] = useState(false); // Zustand für das Laden

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
    setSelectedForm(forms.find((form) => form.value === doc.type) || forms[0]);
    setFormMode("view"); // Open in view mode
    setModalOpen(true);
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

  
  
  const openDeleteModal = (document) => {
    if (!document || !document._id) {
      console.error("Ungültiges Dokument oder fehlende ID.", document);
      return;
    }
    console.log("Selected document ID: ", document._id); // Logging hier
    setDeleteModal({ open: false, document_id: deleteModal.document_id });
  };
  
  
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedForm(null);
    setCurrentDocument(null);
  };

  const handleSave = (updatedDocument) => {
    if (currentDocument) {
      // Update existing document
      setDocuments((prev) =>
        prev.map((doc) => (doc.id === currentDocument.id ? updatedDocument : doc))
      );
    } else {
      // Add new document
      let newDoc = {
        ...updatedDocument,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        type: selectedForm.value,
      };
  
      // Erweiterung für Anamnese-Dokument
      if (updatedDocument.type === "ana") {
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
      }
  
      // Neues Dokument dem Array hinzufügen
      setDocuments((prev) => [...prev, newDoc]);
      
    }
  
    // Modal schließen
    setModalOpen(false);
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
      <Link href={"/"}><h3>Zurück zum Terminkalendar</h3></Link>
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
                          {doc.createdAt ? doc.createdAt.toLocaleDateString("de-DE", {
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
       <PatientCard patientData={patientData || null}/>
      </div>

      {modalOpen && (
  <div className={classes.fullscreenModal}>
    <div className={classes.modalContent}>
      <button onClick={handleModalClose} className={classes.closeButton}>
        ✖
      </button>
      {selectedForm?.component ? (
        <selectedForm.component
        document={currentDocument}
        onClose={handleModalClose}
        onSave={handleSave}
        mode={formMode}
        documents={documents}
        setSampleDocuments={setDocuments}
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
    </div>
  );
}
