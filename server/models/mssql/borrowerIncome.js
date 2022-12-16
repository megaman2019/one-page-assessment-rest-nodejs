import { DataTypes } from "sequelize";

const BorrowerIncome = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iIncomeID', primaryKey: true },
        borrowerId: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerID' },
        incomeType: {type: DataTypes.STRING, allowNull: true, field: 'cIncomeType' },
        incomePeriod: {type: DataTypes.STRING, allowNull: true, field: 'cIncomePeriod' },
        amount: {type: DataTypes.FLOAT, allowNull: true, field: 'fAmount' },
        netAmount: {type: DataTypes.FLOAT, allowNull: true, field: 'fNetAmount' },
        adjustment: {type: DataTypes.FLOAT, allowNull: true, field: 'fAdjustment' },
        correction: {type: DataTypes.FLOAT, allowNull: true, field: 'fCorrection' },
        difference: {type: DataTypes.FLOAT, allowNull: true, field: 'fDifference' },
        manualTotal: {type: DataTypes.FLOAT, allowNull: true, field: 'fManualTotal' },
        reason: {type: DataTypes.STRING, allowNull: true, field: 'cReason' },
        percentage: {type: DataTypes.FLOAT, allowNull: true, field: 'fPercentage' },
    };

    return sequelize.define('vBorrower_Incomes', attributes, { freezeTableName: true, timestamps: false });

};

export default BorrowerIncome;