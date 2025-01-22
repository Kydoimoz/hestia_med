import connectDB from "../../../libs/medical_db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email: email });

            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            if (!user.isVerified) {
                return res.status(400).json({ error: "Please verify your email before logging in." });
            }
            return res.status(200).json({ message: "User is verified and logged in" });

        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ error: "An unexpected error occurred." });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
}
