<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f88a096b125f35697ae925fe2bfbf2d7d8e7d9f91958c47bea8c2d3d48b3f2fb
size 589
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
