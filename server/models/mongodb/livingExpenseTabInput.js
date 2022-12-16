import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    dleLesserThanHem: Boolean,
    hem: mongoose.Types.Decimal128,
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const LivingExpenseTabInput = mongoose.model('LivingExpenseTabInput', model, 'LivingExpenseTabInput');

export default LivingExpenseTabInput;