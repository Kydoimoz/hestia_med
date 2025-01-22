<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:65e0a48a7f47119a4db62b2b2da6af5d00578401360794fe927aa9adadc70c16
size 1008
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
