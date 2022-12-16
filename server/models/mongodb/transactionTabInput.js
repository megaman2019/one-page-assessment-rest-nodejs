import mongoose from 'mongoose';

const model = mongoose.Schema({
    appId: { type: Number, required: true, unique: true },
    refinanceConductSatisfactory: { 
        type: Number, 
        min: [0, 'Value must be 0 to 2 but got {VALUE}. 0 = N/A, 1 = YES, 2 = NO'], 
        max: [2, 'Value must be 0 to 2 but got {VALUE}. 0 = N/A, 1 = YES, 2 = NO']
    },
    notes: String,
    policyException: Boolean,
    modifiedBy: { type: Number, required: true },
    modifiedDate: { type: Date, default: new Date() },
});

var TransactionTabInput = mongoose.model('TransactionTabInput', model, 'TransactionTabInput');

export default TransactionTabInput;