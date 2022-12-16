import { DataTypes } from "sequelize";

const BorrowerLiability = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iLiabilityID', primaryKey: true },
        borrowerId: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerID' },
        liabilityType: {type: DataTypes.STRING, allowNull: true, field: 'cLiabilityType' },
        liabilityAmount: {type: DataTypes.FLOAT, allowNull: true, field: 'fLiabilityAmount' },
        liabilityOwing: {type: DataTypes.FLOAT, allowNull: true, field: 'fLiabilityOwing' },
        liabilityPerMonth: {type: DataTypes.FLOAT, allowNull: true, field: 'fLiabilityPerMonth' },
        adjustment: {type: DataTypes.FLOAT, allowNull: true, field: 'fAdjustment' },
        correction: {type: DataTypes.FLOAT, allowNull: true, field: 'fCorrection' },
        difference: {type: DataTypes.FLOAT, allowNull: true, field: 'fDifference' },
        manualTotal: {type: DataTypes.FLOAT, allowNull: true, field: 'fManualTotal' },
        percentage: {type: DataTypes.FLOAT, allowNull: true, field: 'fPercentage' },
        payoutOnSettlement: {type: DataTypes.STRING, allowNull: true, field: 'cPayoutOnSettlement' },
        institution: {type: DataTypes.STRING, allowNull: true, field: 'cInstitution' },
        accountNumber: {type: DataTypes.STRING, allowNull: true, field: 'cAccountNumber' },
        arrearsOrOverlimit: {type: DataTypes.BOOLEAN, allowNull: true, field: 'bIsinArrearsorOverLimit' },
        statementWithinPolicy: {type: DataTypes.INTEGER, allowNull: true, field: 'iCurrentIntrimStatement' },
    };

    return sequelize.define('vBorrower_Liabilities', attributes, { freezeTableName: true, timestamps: false });

};

export default BorrowerLiability;