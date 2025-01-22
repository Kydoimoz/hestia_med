<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:2f411005d9aa08aefea909dbd9a6db2fb36d5339dfe8423ee5c01843ce8344cf
size 453
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
