import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    tabName: { type: String, maxLength: 100 },
    input: { type: String, maxLength: 100 },
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const ExceptionTabInput = mongoose.model('ExceptionTabInput', model, 'ExceptionTabInput');

export default ExceptionTabInput;