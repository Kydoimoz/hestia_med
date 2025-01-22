<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:1b9ba77a26ce1c109e05e0ae955921d686fac85ba5b58532f767283c8ed9ad2e
size 1189
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
