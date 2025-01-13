import connectDB from "../../../libs/medical_db";
import User from "../../../models/User";
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import schedule from "node-schedule";
import Practice from "../../../models/Practice";

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');

    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        const {
            title,
            first_name,
            surname,
            gender,
            birth_date,
            email,
            phoneNumber,
            country,
            city,
            address,
            password,
            role,
            termsAccepted,
            practice_name,
            practice
        } = req.body;

        console.log('Full Request Body:', req.body);
        console.log('Extracted practice_data:', practice_name);
        const _practice = await Practice.find({ name: practice_name});
        if (!_practice) {
            return res.status(400).json({ error: 'Practice not found or invalid practice ID.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Connect to the database
        await connectDB();

        // Generate verification code and token
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const expirationTime = new Date();
        expirationTime.setMinutes(expirationTime.getMinutes() + 2);

        // Create the user
        const user = await User.create({
            practice: _practice ? practice : null,  
            title,
            first_name,
            surname,
            gender,
            birth_date,
            email,
            phoneNumber,
            country,
            city,
            address,
            password: hashedPassword,
            role,
            termsAccepted,
            verificationCode,
            verificationToken,
            expirationTime,
            isVerified: false,
        });
        console.log(user);

        const smtpTransport = nodemailer.createTransport({
            host: 'smtppro.zoho.eu',
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
            });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Hestia - Med Email Verification',
            html: `<h1>Hi ${first_name}!</h1><br><p>Type in the following code to verify your account: <strong>${verificationCode}</strong></p>`
        };

        try {
            const sendMailResult = await smtpTransport.sendMail(mailOptions);
            if (sendMailResult.accepted && sendMailResult.accepted.length > 0) {
                console.log('Verification email sent successfully.');
                return res.status(200).json({ success: true, verificationToken });
            } else {
                console.error('Failed to send verification email.');
                return res.status(500).json({ success: false, error: 'Failed to send verification email.' });
            }
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            return res.status(500).json({ success: false, error: 'Error sending email.' });
        }

    } catch (err) {
        console.error('Error during registration process:', err);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
}

const deleteExpiredUsers = async () => {
    const currentDate = new Date();
    try {
        const expiredUsers = await User.find({
            expirationTime: { $lt: currentDate }, 
            isVerified: false,
        });

        const deleteResult = await User.deleteMany({
            _id: { $in: expiredUsers.map(user => user._id) }
        });

        console.log(`${deleteResult.deletedCount} expired users have been deleted.`);
    } catch (error) {
        console.error('Error deleting expired users:', error);
    }
};

schedule.scheduleJob('*/2 * * * *', deleteExpiredUsers);
