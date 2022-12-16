import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true },
    applicantId: { type: Number, required: true, unique: true },
    matrixIdPass: { type: Number },
    pepSanctionMatch: { type: Number },
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const ApplicantInput = mongoose.model('ApplicantInput', model, 'ApplicantInput');

export default ApplicantInput;