import { DataTypes } from "sequelize";

const ProductFee = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iFeeID', primaryKey: true },
        appProductId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppProductID' },
        fundsPosition: { type: DataTypes.STRING, allowNull: true, field: 'cFeeName' },
        amount: { type: DataTypes.FLOAT, allowNull: true, field: 'fAmount' },
    };

    return sequelize.define('vProduct_Fees', attributes, { freezeTableName: true, timestamps: false });

};

export default ProductFee;