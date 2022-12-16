import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    loanTermExceedRetAge: Boolean,
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const ExitStrategyTabInput = mongoose.model('ExitStrategyTabInput', model, 'ExitStrategyTabInput');

export default ExitStrategyTabInput;