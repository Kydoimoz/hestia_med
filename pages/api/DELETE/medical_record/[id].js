
import * as React from "react";
import connectDB from "../../../../libs/medical_db";
import MedicalDocument from "../../../../models/MedicalDocument";
import { NextResponse } from "next/server";

export default async function DELETE(req) {
        try {
            // Verbindung zur Datenbank herstellen
            await connectDB();

            // Extrahieren der Parameter aus der URL
            const { id } = req.query;
            console.log("DOCUKEMTN IDDD: ", id);
            console.log("ALL: ", req.query);

            // Überprüfen, ob die erforderlichen IDs vorhanden sind
            if (!id) {
                return NextResponse.json({ message: "Patient ID und Dokument ID fehlen." }, { status: 400 });
            }

            // Löschen des Dokuments, das sowohl die Patient-ID als auch die Dokument-ID hat
            const result = await MedicalDocument.findOneAndDelete({
                _id: id
            });

            // Überprüfen, ob das Dokument gelöscht wurde
            if (!result) {
                return NextResponse.json({ message: "Kein Dokument gefunden, das gelöscht werden kann." }, { status: 404 });
            }

            return { status: 200, body: { message: "User deleted successfully" } };

        } catch (err) {
            console.error("Fehler beim Löschen des Dokuments: ", err);
            return NextResponse.json({ message: "Internal Server Error." }, { status: 500 });
        }
    } 

