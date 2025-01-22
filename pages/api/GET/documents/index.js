<<<<<<< HEAD
import connectDB from "../../../../libs/medical_db";
import User from "../../../../models/User";
import Patient from "../../../../models/Patient";
import MedicalDocument from "../../../../models/MedicalDocument";
export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        await connectDB();
        const { patient_id } = req.query; 
        console.log(patient_id);
        if (!patient_id) {
          return res.status(400).json({ message: "Patient ID is required" });
        }
        const patient = await Patient.findById(patient_id);
        console.log("PATIENT ", patient);
        if (!patient) {
          return res.status(404).json({ message: "Patient not found" });
        }
        const documents = await MedicalDocument.find({
          _id: { $in: patient.documents }
        });
        console.log("Documents ", documents);
        res.status(200).json(documents);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Error fetching documents" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  
=======
version https://git-lfs.github.com/spec/v1
oid sha256:4c27f835e4cc31d19c0ef425beea037c5ecef5e06cac2ed1f712387b4aa2c40a
size 1186
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
