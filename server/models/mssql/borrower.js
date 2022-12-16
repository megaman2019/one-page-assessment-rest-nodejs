import { DataTypes } from "sequelize";

const Borrower = (sequelize) => {

    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        custId: { type: DataTypes.INTEGER, allowNull: true, field: 'iCustID' },
        firstName: { type: DataTypes.STRING, allowNull: true, field: 'cFirstName' },
        middleName: { type: DataTypes.STRING, allowNull: true, field: 'cMiddleName' },
        surname: { type: DataTypes.STRING, allowNull: true, field: 'cSurname' },
        maritalStatus: { type: DataTypes.STRING, allowNull: true, field: 'cMaritalStatus' },
        address: { type: DataTypes.STRING, allowNull: true, field: 'cCurrentAddress' },
        dateOfBirth: { type: DataTypes.DATE, allowNull: true, field: 'dDOB' },
        totalDependents: { type: DataTypes.INTEGER, allowNull: true, field: 'iDependents' },
        primary: { type: DataTypes.TINYINT, allowNull: true, field: 'bPrimary'},
        corporate: { type: DataTypes.TINYINT, allowNull: true, field: 'bCorporate'},
        currentEmpName: { type: DataTypes.STRING, allowNull: true, field: 'cCurrentEmpName' },
        currentAbn: { type: DataTypes.STRING, allowNull: true, field: 'cCurrentEmpABN' },
        currentEmpIncome: { type: DataTypes.FLOAT, allowNull: true, field: 'fCurrentEmpIncome' },
        currentEmpNetIncome: { type: DataTypes.FLOAT, allowNull: true, field: 'fCurrentEmpNetIncome' },
        currentEmpType: { type: DataTypes.STRING, allowNull: true, field: 'cCurrentEmploymentType' },
        currentEmpYears: { type: DataTypes.INTEGER, allowNull: true, field: 'iCurrentEmpYears' },
        currrentEmpMonths: { type: DataTypes.INTEGER, allowNull: true, field: 'iCurrentEmpMonths' },
        currentOccupation: { type: DataTypes.STRING, allowNull: true, field: 'cOccupation' },
        previousEmpName: { type: DataTypes.STRING, allowNull: true, field: 'cPreviousEmpName' },
        previousOccupation: { type: DataTypes.STRING, allowNull: true, field: 'cPrevOccupation' },
        previousEmploymentType: { type: DataTypes.STRING, allowNull: true, field: 'cPreviousEmploymentType' },
        previousEmpIncome: { type: DataTypes.FLOAT, allowNull: true, field: 'fPreviousEmpIncome' },
        previousEmpNetIncome: { type: DataTypes.FLOAT, allowNull: true, field: 'fPreviousEmpNetIncome' },
        previousEmpYears: { type: DataTypes.INTEGER, allowNull: true, field: 'iPreviousEmpYears' },
        residencyStatus: { type: DataTypes.STRING, allowNull: true, field: 'cResidencyStatus' },
        guarantor: { type: DataTypes.TINYINT, allowNull: true, field: 'bGuarantor'},
    }

    return sequelize.define('vBorrowers', attributes, { freezeTableName: true, timestamps: false });
}

export default Borrower;