"use client";
import { getServerSession } from "next-auth/next";
import connectDB from "../../../../libs/medical_db";
import Patient from "../../../../models/Patient";
import mongoose from "mongoose";
import { getSession } from "next-auth/react";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await connectDB();
            const practice_id = req.query.practice_id;
            console.log(practice_id);
            const patients = await Patient.find({ practice: practice_id }).sort({createdAt: "asc"});
            console.log(patients);
            res.status(200).json(patients);
        } catch (err) {
            console.error("Fehler beim Abrufen der Patienten:", err);
            res.status(500).json({ message: "Interner Serverfehler" });
        }
    } else {
        res.status(405).json({ message: `Methode ${req.method} nicht erlaubt` });
    }
}
