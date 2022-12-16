import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    directoryOrBusinessToQuery: Boolean,
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const CreditHistoryTabInput = mongoose.model('CreditHistoryTabInput', model, 'CreditHistoryTabInput');

export default CreditHistoryTabInput;