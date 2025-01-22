
import * as React from "react";
import connectDB from "../../../libs/medical_db";
import Patient from "../../../models/Patient";

export default async function handler(req, res){
    if(req.method === "POST"){
        const {
            full_name,
            insurance,
            is_private,
            birth_date,
            gender,
            address,
            phoneNumber,
            email,
            emergency_contact,
            practice
        } = req.body;
    try{
        await connectDB();
            if(req.body){
                const patient = await Patient.create({
                    full_name, 
                    insurance, 
                    is_private, 
                    birth_date, 
                    gender, 
                    address,
                    phoneNumber,
                    email,
                    emergency_contact,
                    practice,
                    documents: [],
                    appointments: [],
                });
                res.status(201).json({
                    message: 'Patient erfolgreich hinzugefügt.',
                    patient: patient,
                  });
            }
        }
    catch(err){
        console.error('Fehler beim Erstellen eines Patienten:', err);
        res.status(500).json({ message: 'Interner Serverfehler.' });
    }
    }else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Methode ${req.method} nicht erlaubt.` });
      }
}
