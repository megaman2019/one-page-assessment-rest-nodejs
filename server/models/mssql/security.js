import { DataTypes } from 'sequelize';

const Security = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iSecurityID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        propertyType: { type: DataTypes.STRING, allowNull: true, field: 'cPropertyType' },
        purchasePrice: { type: DataTypes.FLOAT, allowNull: true, field: 'fPurchasePrice' }, 
        estimatedValue: { type: DataTypes.FLOAT, allowNull: true, field: 'fEstimatedValue' },
        valuationValue: { type: DataTypes.FLOAT, allowNull: true, field: 'fValuationValue' },
        insuranceReplacementAmount: { type: DataTypes.FLOAT, allowNull: true, field: 'fInsuranceReplacementAmount' },
        legalFees: { type: DataTypes.FLOAT, allowNull: true, field: 'fLegalFees' },
        capitalized: { type: DataTypes.STRING, allowNull: false, field: 'cCapitalized' },
        securityAddress: { type: DataTypes.STRING, allowNull: false, field: 'cSecurityAddress' },
        category: { type: DataTypes.STRING, allowNull: false, field: 'cCategory' }
    }

    return sequelize.define('vSecurities', attributes, { freezeTableName: true, timestamps: false });

}

export default Security;