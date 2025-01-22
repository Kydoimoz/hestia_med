
import connectDB from "../../../libs/medical_db";
import User from "../../../models/User";
export default async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    try{
        await connectDB();
        const {email} = req.body;
        const user_stored = await User.findOne({email}).select("_id");
        res.status(201).json({user_stored});
    }
    catch(err) {
        console.error(err);
    }
}
