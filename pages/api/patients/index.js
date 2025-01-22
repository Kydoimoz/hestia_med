<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:4c99a6e569239fe0d09fa6a941b08f61aaedead2f10001555a43712774e62ec4
size 1551
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
