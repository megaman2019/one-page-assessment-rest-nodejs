import { DataTypes } from "sequelize";

const FundsPosition = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'id', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        fundsPosition: { type: DataTypes.STRING, allowNull: true, field: 'cFundsPosition' },
        amount: { type: DataTypes.FLOAT, allowNull: true, field: 'fAmount' },
        verificationType: { type: DataTypes.STRING, allowNull: true, field: 'cVerificationType' },
        monthlyRepayment: { type: DataTypes.FLOAT, allowNull: true, field: 'fMonthlyRepayment' },
        institution: { type: DataTypes.STRING, allowNull: true, field: 'cInstitution' },
    };

    return sequelize.define('vFundsPosition', attributes, { freezeTableName: true, timestamps: false });

};

export default FundsPosition;