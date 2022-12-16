import { DataTypes } from 'sequelize';

const Application = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID', primaryKey: true },
        loanName: { type: DataTypes.STRING, allowNull: false, field: 'cLoanName' },
        finalLVR: { type: DataTypes.FLOAT, allowNull: true, field: 'fFinalLVR' },
        fundsPositionTotal: { type: DataTypes.FLOAT, allowNull: true, field: 'fFundsPositionTotal' },
        fundsRequiredTotal: { type: DataTypes.FLOAT, allowNull: true, field: 'fFundsRequiredTotal' },
        surplusTotal: { type: DataTypes.FLOAT, allowNull: true, field: 'fSurplusTotal' },
        mortgageInsurerPremium: { type: DataTypes.FLOAT, allowNull: true, field: 'fMortgageInsurerPremium' },
        insurerName: { type: DataTypes.STRING, allowNull: true, field: 'cInsurerName' },
        loanPurpose: { type: DataTypes.STRING, allowNull: true, field: 'cLoanPurpose' },
        totalHouseholds: { type: DataTypes.INTEGER, allowNull: true, field: 'iNumberOfHouseholds' },
        owner: { type: DataTypes.STRING, allowNull: true, field: 'cOwner' },
        branch: { type: DataTypes.STRING, allowNull: true, field: 'cBranch' },
        salesConsultant: { type: DataTypes.STRING, allowNull: true, field: 'cSalesConsultant' },
        consultantBranch: { type: DataTypes.STRING, allowNull: true, field: 'cConsultantBranch' },
        consultantRANNo: { type: DataTypes.STRING, allowNull: true, field: 'cConsultantRANNo' },
        isLocked: { type: DataTypes.BOOLEAN, allowNull: true }
    }

    return sequelize.define('vAppMain', attributes, { freezeTableName: true, timestamps: false });

}

export default Application;