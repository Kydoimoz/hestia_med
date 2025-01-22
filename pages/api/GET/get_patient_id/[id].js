<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:28e3ee715a97127a3d6684771f960f6177597b67f865e3d4bd9cdff5d0a7dd44
size 1165
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
