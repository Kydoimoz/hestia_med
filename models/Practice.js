
import mongoose from 'mongoose';

const practiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    practice_address: {
        type: String,
        required: true
    },
    practice_phoneNumber: {
        type: String,
        required: true
    },
    appointments:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Appointment',
        default: [],
    }
});

const Practice = mongoose.models.Practice || mongoose.model('Practice', practiceSchema);

export default Practice;
