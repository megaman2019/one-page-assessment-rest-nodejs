import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    costAndRiskOngoingFee: Boolean,
    costAndRiskBreakCosts: Boolean,
    costAndRiskLMI: Boolean,
    costAndRiskRefinanceCosts: Boolean,
    loanRepayTypePrincipalAndInterest: Boolean,
    loanRepayTypeInterestOnly: Boolean,
    loanRepayTypeFixed: Boolean,
    loanRepayTypeVariable: Boolean,
    objectivePurchase: Boolean,
    objectiveRefinance: Boolean,
    objectiveDebtConsolidation: Boolean,
    objectiveLowInterestRate: Boolean,
    objectiveFinancialGoals: Boolean,
    objectiveOther: Boolean,
    applicationNotSuitable: Boolean,
    applicationMeetRequirements: Boolean,
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const ResponsibleLendingTabInput = mongoose.model('ResponsibleLendingTabInput', model, 'ResponsibleLendingTabInput');

export default ResponsibleLendingTabInput;