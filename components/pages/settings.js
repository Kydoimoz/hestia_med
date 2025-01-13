import React, { useEffect, useState } from "react";
import classes from "./settings.module.css";

export default function Settings() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null); // geändert auf null
  const [newRole, setNewRole] = useState("");
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "Doctor", // Default role
    department: "",
    contactInfo: { phone: "", email: "" },
    qualifications: { degree: "", institution: "", yearOfCompletion: "" },
    emergencyContact: { name: "", relationship: "", phone: "" },
  });

  useEffect(() => {
    console.log(newEmployee)
  }, [newEmployee])
  

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setNewRole(employee.role);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/staff/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp.id !== id)
        );
      } else {
        console.error("Fehler beim Löschen des Mitarbeiters");
      }
    } catch (error) {
      console.error("Fehler beim Löschen des Mitarbeiters:", error);
    }
  };
  

  const confirmDelete = () => {
    setEmployees(employees.filter((emp) => emp.id !== employeeToDelete));
    setEmployeeToDelete(null);
  };

  const handleSave = async (employee) => {
      try {
        const updatedEmployee = { ...employee, role: newRole };
        console.log("before response")
        const response = await fetch(`/api/staff/${employee._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEmployee),
        });
  
        if (response.ok) {
          console.log("response ok")
          const updatedData = await response.json();
          setEmployees((prevEmployees) =>
            prevEmployees.map((emp) =>
              emp._id === updatedData._id ? updatedData : emp // Korrektur hier
            )
          );          
          setEditingEmployee(null); // Bearbeitungsmodus verlassen
        } else {
          console.error("Fehler beim Speichern der Rolle");
        }
      } catch (error) {
        console.error("Fehler beim Speichern der Rolle:", error);
      }
    
  };
  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/api/staff"); // API-URL
        if (response.ok) {
          const data = await response.json();
          setEmployees(data); // Mitarbeiterdaten setzen
        } else {
          console.error("Fehler beim Abrufen der Mitarbeiter");
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Mitarbeiter:", error);
      }
    };

    fetchEmployees(); // Aufruf der Funktion beim ersten Rendern
  }, []);

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    console.log("Neuer Mitarbeiter:", newEmployee); // Debugging
  
    try {
      const response = await fetch("/api/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
  
      if (response.ok) {
        const addedEmployee = await response.json();
        console.log("API Antwort:", addedEmployee); // Debugging
        setEmployees([...employees, addedEmployee]);
        setNewEmployee({
          name: "",
          role: "Doctor",
          department: "",
          contactInfo: { phone: "", email: "" },
          qualifications: { degree: "", institution: "", yearOfCompletion: "" },
          emergencyContact: { name: "", relationship: "", phone: "" },
        });
      } else {
        console.error("Fehler beim Hinzufügen des Mitarbeiters");
        const errorText = await response.text();
        console.error("Fehlermeldung:", errorText);
      }
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Mitarbeiters:", error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts.length === 1) {
      setNewEmployee((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      setNewEmployee((prev) => ({
        ...prev,
        [nameParts[0]]: {
          ...prev[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts.length === 3) {
      setNewEmployee((prev) => ({
        ...prev,
        [nameParts[0]]: {
          ...prev[nameParts[0]],
          [nameParts[1]]: {
            ...prev[nameParts[0]][nameParts[1]],
            [nameParts[2]]: value,
          },
        },
      }));
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <h2>Mitarbeiter hinzufügen</h2>
        <form onSubmit={handleAddEmployee}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newEmployee.name}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={newEmployee.role}
            onChange={handleChange}
            required
          >
            <option value="Doctor">Arzt</option>
            <option value="Administration">Verwaltung</option>
          </select>
          <input
            type="text"
            name="department"
            placeholder="Abteilung"
            value={newEmployee.department}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactInfo.phone"
            placeholder="Telefonnummer"
            value={newEmployee.contactInfo.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="contactInfo.email"
            placeholder="E-Mail"
            value={newEmployee.contactInfo.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="qualifications.degree"
            placeholder="Abschluss"
            value={newEmployee.qualifications.degree}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="qualifications.institution"
            placeholder="Institution"
            value={newEmployee.qualifications.institution}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="qualifications.yearOfCompletion"
            placeholder="Jahr des Abschlusses"
            value={newEmployee.qualifications.yearOfCompletion}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="emergencyContact.name"
            placeholder="Notfallkontakt Name"
            value={newEmployee.emergencyContact.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="emergencyContact.relationship"
            placeholder="Beziehung"
            value={newEmployee.emergencyContact.relationship}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="emergencyContact.phone"
            placeholder="Notfallkontakt Telefonnummer"
            value={newEmployee.emergencyContact.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className={classes.saveBtn}>
            Mitarbeiter hinzufügen
          </button>
        </form>
      </div>
      <br />
      <div className={classes.container}>
        <h2>Mitarbeiterrollen verwalten</h2>
        <ul className={classes.employeeList}>
  {employees.map((employee) => (
    <li key={employee._id} className={classes.employeeItem}>
      {editingEmployee == false ? (
        <>
          {/* Bearbeitungsmodus: Rolle ändern */}
          <select
  value={newRole}
  onChange={(e) => setNewRole(e.target.value)} // Korrektur hier
  className={classes.roleSelect}
>
  <option value="Doctor">Arzt</option>
  <option value="Administration">Verwaltung</option>
</select>
          <button onClick={() => handleSave(employee)} className={classes.saveBtn}>
            Speichern
          </button>
          <button
            onClick={() => setEditingEmployee(null)} // Bearbeitungsmodus verlassen
            className={classes.cancelBtn}
          >
            Abbrechen
          </button>
        </>
      ) : (
        <>
          {/* Anzeige des Mitarbeiters im Normalmodus */}
          <span>{employee.name} - {employee.role}</span>
          <button
            onClick={() => setEditingEmployee(false)} // Bearbeitungsmodus starten
            className={classes.editBtn}
          >
            Bearbeiten
          </button>
          <button
            onClick={() => {
              handleDelete(employee._id);
            }} // Mitarbeiter löschen
            className={classes.deleteBtn}
          >
            Löschen
          </button>
        </>
      )}
    </li>
  ))}
</ul>


        {/* Modal */}
        {employeeToDelete !== null && (
          <div className={classes.modalOverlay}>
            <div className={classes.modal}>
              <p>
                Sind Sie sicher, dass Sie den Mitarbeiter löschen möchten?
              </p>
              <div className={classes.modalActions}>
                <button onClick={confirmDelete} className={classes.saveBtn}>
                  Ja, löschen
                </button>
                <button
                  onClick={() => setEmployeeToDelete(null)}
                  className={classes.cancelBtn}
                >
                  Abbrechen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
