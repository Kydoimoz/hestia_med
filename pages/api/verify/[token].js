<<<<<<< HEAD
import connectDB from '../../../libs/medical_db';
import User from "../../../models/User";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { code, token } = req.body;

    try {
        await connectDB();

        const user = await User.findOne({
            verificationCode: code,  
            verificationToken: token, 
            expirationTime: { $gte: new Date() },  
            isVerified: false, 
        });

        if (!user) {
            return res.status(400).json({ error: 'Ungültiger oder abgelaufener Code oder Token.' });
        }

        await User.updateOne(
            { _id: user._id },
            {
                $set: { isVerified: true },
                $unset: { 
                    verificationCode: "", 
                    verificationToken: "",  
                    expirationTime: ""       
                }
            });

        return res.status(200).json({ message: 'E-Mail erfolgreich verifiziert.' });
    } catch (error) {
        console.error('Verifizierungsfehler:', error);
        return res.status(500).json({ error: 'Interner Serverfehler.' });
    }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:fd00fab80698841bca836dcc930282c6e02b2d4c22054547995fbba75357c3dd
size 1277
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
