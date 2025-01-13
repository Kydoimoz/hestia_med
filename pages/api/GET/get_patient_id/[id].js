import * as React from "react";
import mongoose from "mongoose";
import connectDB from "../../../../libs/medical_db";
import Patient from "../../../../models/Patient";
export default async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    try {
        await connectDB();
        const { id } = req.query;
        console.log('Received request for user with ID:', id);
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
          }
        
        if (!id) {
            return res.status(400).json({ error: 'Missing user ID' });
        }

        const user = await Patient.findOne({ _id: id });
        console.log(user);
        if (!user) {
            console.log('Patient not found in MongoDB for ID:', id);
            return res.status(404).json({ error: 'Patient not found in MongoDB' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
}