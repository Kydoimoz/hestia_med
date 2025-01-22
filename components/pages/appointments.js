
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'moment/locale/de';
import classes from './appointments.module.css';
import { useSession } from 'next-auth/react';

moment.locale('de');
const localizer = momentLocalizer(moment);

const messages = {
  week: 'Woche',
  day: 'Tag',
  previous: 'Zurück',
  next: 'Weiter',
  today: 'Heute',
  agenda: 'Agenda',
  showMore: (total) => `+${total} mehr`,
};

export default function Appointments() {
  const router = useRouter();
  const {data: session} = useSession();
  const practice_id = session?.user?.practice;
  const [error, setError] = useState();
  const { id } = router.query;
  const [events, setEvents] = useState([{
    id: 1,
    title: "Max Mustermann - Untersuchung",
    start: new Date(2025, 0, 7, 10, 0), // Startzeit: 7. Januar 2025, 10:00 Uhr
    end: new Date(2025, 0, 7, 10, 30), // Endzeit: 7. Januar 2025, 10:30 Uhr
    patient: "Max Mustermann",
    purpose: "Untersuchung",
  },
  {
    id: 2,
    title: "Anna Müller - Nachuntersuchung",
    start: new Date(2025, 0, 8, 14, 0), // Startzeit: 8. Januar 2025, 14:00 Uhr
    end: new Date(2025, 0, 8, 14, 30), // Endzeit: 8. Januar 2025, 14:30 Uhr
    patient: "Anna Müller",
    purpose: "Nachuntersuchung",
  }]);
  const [modalOpen, setModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [loading, setLoading] = useState(false);
  //Patient ID methode
  const [patientId, setPatientId] = useState();
  const [formData, setFormData] = useState({
    patientId: '',
    startTime: '',
    endTime: '',
    purpose: '',
  });
  

  useEffect(() => {
    let isMounted = true; // Track ob die Komponente noch gemountet ist
    const fetchAppointments = async () => {
      if (!isMounted) return;
      try {
        const response = await fetch('/api/appointment', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Termine');
        }
  
        const data = await response.json();
  
        if (!data.appointments || !Array.isArray(data.appointments)) {
          throw new Error('Unerwartetes Format der API-Daten');
        }
  
        // Prüfe die Struktur der API-Daten, um sicherzustellen, dass patientId populiert wird
        console.log("API Antwort:", data.appointments);
  
        // Formatieren der Events
        const formattedEvents = data.appointments.map((appointment) => ({
          id: appointment._id,
          title: `${appointment.patientId?.full_name || 'Unbekannt'} - ${appointment.purpose}`,
          start: new Date(appointment.startTime),
          end: new Date(appointment.endTime),
          patient: appointment.patientId?.full_name || 'Unbekannt',
          purpose: appointment.purpose,
          patientId: appointment.patientId, // Achte darauf, dass patientId korrekt übergeben wird
        }));
  
        console.log("Formatierte Events:", formattedEvents);
  
        setEvents(formattedEvents);
      } catch (err) {
        console.error("Fehler beim Laden der Termine:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchAppointments();
  
    return () => {
      isMounted = false; // Cleanup bei Unmount
    };
  }, []);
  
  
  



  const [patients, setPatients] = useState([]);  


  const fetchPatients = async () => {
    try {
      const response = await fetch(`/api/GET/patients?practice_id=${practice_id}`,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log("PATIENT DATA ", data);
      setPatients(data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Patienten:', error);
    }
  };


  useEffect(() => {
    fetchPatients();
  }, [id]);



  const handleSelectSlot = (slotInfo) => {
    if (!slotInfo) return; // Sicherstellen, dass slotInfo existiert
    setSelectedSlot(slotInfo);
    setFormData({
      ...formData,
      startTime: moment(slotInfo.start).format('YYYY-MM-DDTHH:mm'),
      endTime: moment(slotInfo.end).format('YYYY-MM-DDTHH:mm'),
    });
    setModalOpen(true);
  };
  

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    console.log("Event selected:", event);
    console.log("Patient ID:", event.patientId); // Überprüfe die patientId
    setInfoModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSlot(null);
    setFormData({ patientId: '', startTime: '', endTime: '', purpose: '' });
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
    setSelectedEvent(null);
  };

  const saveAppointment = async () => {
    try {
      // Debugging: Logge die Daten, die an die API gesendet werden

      console.log("FormData vor dem Senden:", formData);
  
      const body = {
        patientId: formData.patientId,
        startTime: new Date(formData.startTime).toISOString(),
        endTime: new Date(formData.endTime).toISOString(),
        purpose: formData.purpose.trim(),
      };
  
      console.log("Body vor dem Senden an die API:", body);
  
      const res = await fetch(`/api/appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Fehlerdetails von der API:", errorData);
        throw new Error(errorData.message || "Fehler beim Speichern des Termins");
      }

      const { appointment } = await res.json();
  
      // Füge den neuen Termin zu den Events hinzu
      setEvents([
        ...events,
        {
          patientId: formData.patientId?._id,
          id: appointment._id || Date.now(), // Fallback-ID, falls _id fehlt
          title: `${formData.patientId} - ${formData.purpose}`,
          startTime: new Date(formData.startTime),
          endTime: new Date(formData.endTime),
          patient: formData.patientId,
          purpose: formData.purpose,
        },
      ]);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error('Fehler beim Speichern des Termins:', error.message);
    }
  };
  
  const deleteAppointment = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
    closeInfoModal();
  };

  const editAppointment = () => {
    setFormData({
      patient: selectedEvent.patientId,
      startTime: moment(selectedEvent.startTime).format('YYYY-MM-DDTHH:mm'),
      endTime: moment(selectedEvent.endTime).format('YYYY-MM-DDTHH:mm'),
      purpose: selectedEvent.purpose,
    });
    setModalOpen(true);
    closeInfoModal();
  };

  return (
    <div className={`${classes.divContainer}`}>
<Calendar
  localizer={localizer}
  events={events}
  startAccessor="start" // Muss mit dem Feld in deinen Events übereinstimmen
  endAccessor="end" // Muss mit dem Feld in deinen Events übereinstimmen
  messages={messages}
  views={['week', 'day']}
  defaultView="week"
  selectable
  onSelectSlot={handleSelectSlot}
  onSelectEvent={(event) => handleSelectEvent(event)} 
  min={new Date(0, 0, 0, 8)}
  max={new Date(0, 0, 0, 18)}
/>


      {modalOpen && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContainer}>
            <h2>Termin erstellen</h2>

            <label>Patient:</label>
            <select
              name="patientId"
              value={formData.patientId}
              onChange={handleInputChange}
              className={classes.inputField}
            >
              <option value="">Bitte wählen</option>
              {patients.map((patient) => (
                <option onClick={() => setFormData({...formData, patientId: patient._id})} key={patient._id} value={patient._id}>
                  {patient.full_name}
                </option>
              ))}
            </select>

            <label>Anfangszeit:</label>
            <input
              type="datetime-local"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className={classes.inputField}
            />

            <label>Endzeit:</label>
            <input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className={classes.inputField}
            />

            <label>Zweck des Termins:</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              className={classes.inputField}
            />

            <div className={classes.buttonContainer}>
              <button onClick={closeModal} className={classes.cancelButton}>
                Abbrechen
              </button>
              <button onClick={saveAppointment} className={classes.saveButton}>
                Termin speichern
              </button>
            </div>
          </div>
        </div>
      )}

      {infoModalOpen && selectedEvent && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContainer}>
            <h2>Termindetails</h2>
            <p><strong>Patient:</strong> {selectedEvent.patient}</p>
            <p><strong>Von:</strong> {moment(selectedEvent.startTime).format('LLLL')}</p>
            <p><strong>Bis:</strong> {moment(selectedEvent.endTime).format('LLLL')}</p>
            <p><strong>Zweck:</strong> {selectedEvent.purpose}</p>

            <div className={classes.buttonContainer}>
              <button onClick={() => router.push(`/patient/${selectedEvent.patientId?._id}`)} className={classes.viewButton}>
                Zum Patienten
              </button>
              <button onClick={() => deleteAppointment(selectedEvent.id)} className={classes.deleteButton}>
                Löschen
              </button>
              <button onClick={closeInfoModal} className={classes.cancelButton}>
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
