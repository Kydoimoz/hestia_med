import * as React from "react";
import connectDB from "../../../libs/medical_db";
import Patient from "../../../models/Patient";
import MedicalDocument from "../../../models/MedicalDocument"; 

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (req.method === "POST") {
        try {
            await connectDB();
            const documentData = req.body;
            console.log(req.body);
            console.log(documentData);
            const newDocument = new MedicalDocument({
                type: documentData.type,
                title: documentData.title,
                author: documentData.author,
                data: documentData.data,
            });
            const savedDocument = await newDocument.save();

            if (!savedDocument) {
                return res.status(500).json({ message: "Dokument konnte nicht gespeichert werden." });
            }
            
            const updatedPatient = await Patient.findByIdAndUpdate(
                documentData.patientId,
                { $push: { documents: savedDocument._id } }, 
                { new: true }
            );

            if (!updatedPatient) {
                return res.status(404).json({ message: "Patient nicht gefunden." });
            }

            console.log('Patient aktualisiert:', updatedPatient);
            return res.status(200).json(updatedPatient);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err.message
            });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}
