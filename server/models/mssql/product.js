import { DataTypes } from 'sequelize';

const Product = (sequelize) => {

    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppProductID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        productName: { type: DataTypes.STRING, allowNull: false, field: 'cAPProductName' },
        productType: { type: DataTypes.STRING, allowNull: false, field: 'cAPProductType' },
        borrowerRate: { type: DataTypes.FLOAT, allowNull: true, field: 'fAPBorrowerRate' },
        amount: { type: DataTypes.FLOAT, allowNull: true, field: 'fAPAmount' },
        repayments: { type: DataTypes.FLOAT, allowNull: true, field: 'fAPRepayments' },
        maturity: { type: DataTypes.FLOAT, allowNull: true, field: 'dAPMaturity' },
        termYear: { type: DataTypes.FLOAT, allowNull: true, field: 'iAPTermYear' },
        termMonth: { type: DataTypes.FLOAT, allowNull: true, field: 'iAPTermMonth' },
        financier: { type: DataTypes.STRING, allowNull: false, field: 'cAPFinancier' },
        portionCode: { type: DataTypes.STRING, allowNull: false, field: 'cPortionCode' },
    };

    return sequelize.define('vProducts', attributes, { freezeTableName: true, timestamps: false });

}

export default Product;