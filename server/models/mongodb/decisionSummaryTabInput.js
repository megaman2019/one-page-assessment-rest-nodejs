import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    declineCompleteDate: Date,
    mirCompleteDate: Date,
    conditionalCompleteDate: Date,
    formalCompleteDate: Date,
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const DecisionSummaryTabInput = mongoose.model('DecisionSummaryTabInput', model, 'DecisionSummaryTabInput');

export default DecisionSummaryTabInput;