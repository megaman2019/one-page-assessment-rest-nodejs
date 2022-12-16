import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    nsr: mongoose.Types.Decimal128,
    nms: mongoose.Types.Decimal128,
    nas: mongoose.Types.Decimal128,
    dti: mongoose.Types.Decimal128,
    lti: mongoose.Types.Decimal128,
    subordination: mongoose.Types.Decimal128,
    lastCreditEvent: Date,
    noOfCreditEvents: { 
        type: Number, 
        min: [0, 'Value must be 0 to 2 but got {VALUE}. 0 = N/A, 1 = YES, 2 = NO'], 
        max: [2, 'Value must be 0 to 2 but got {VALUE}. 0 = N/A, 1 = YES, 2 = NO']
    },
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

const ServicingTabInput = mongoose.model('ServicingTabInput', model, 'ServicingTabInput');

export default ServicingTabInput;