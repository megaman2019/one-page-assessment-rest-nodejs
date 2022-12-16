import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const AssetAndLiabilityTabInput = mongoose.model('AssetAndLiabilityTabInput', model, 'AssetAndLiabilityTabInput');

export default AssetAndLiabilityTabInput;