import { DataTypes } from "sequelize";

const ProductLoanPurpose = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'id', primaryKey: true },
        appProductId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppProductID' },
        loanPurposeDesc: { type: DataTypes.STRING, allowNull: true, field: 'varLoanPurposeDesc' },
        loanPurposeAmount: { type: DataTypes.FLOAT, allowNull: true, field: 'fLoanPurposeAmount' },
    };

    return sequelize.define('vProduct_LoanPurpose', attributes, { freezeTableName: true, timestamps: false });

};

export default ProductLoanPurpose;