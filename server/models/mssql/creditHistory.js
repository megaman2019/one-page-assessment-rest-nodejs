import { DataTypes } from "sequelize";

const CreditHistory = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppCreditSummaryID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        custId: { type: DataTypes.INTEGER, allowNull: true, field: 'iCustID' },
        borrowerId: { type: DataTypes.INTEGER, allowNull: true, field: 'iBorrowerID' },
        defaults: { type: DataTypes.INTEGER, allowNull: true, field: 'iDefaults' },
        writsAndSummons: { type: DataTypes.INTEGER, allowNull: true, field: 'iWritsAndSummons' },
        bankruptcies: { type: DataTypes.INTEGER, allowNull: true, field: 'iBankruptcies' },
        judgements: { type: DataTypes.INTEGER, allowNull: true, field: 'iJudgements' },
        directorships: { type: DataTypes.INTEGER, allowNull: true, field: 'iDirectorships' },
        enquiriesLastYear: { type: DataTypes.INTEGER, allowNull: true, field: 'iEnquiriesLastYear' },
        totalEnquiries: { type: DataTypes.INTEGER, allowNull: true, field: 'iTotalEnquiries' },
        score: { type: DataTypes.INTEGER, allowNull: true, field: 'cVedaScore' },
        firstName: { type: DataTypes.STRING, allowNull: true, field: 'cFirstName' },
        middleName: { type: DataTypes.STRING, allowNull: true, field: 'cMiddleName' },
        surname: { type: DataTypes.STRING, allowNull: true, field: 'cSurname' },
    };

    return sequelize.define('vCreditHistory', attributes, { freezeTableName: true, timestamps: false });

};

export default CreditHistory;