import { DataTypes } from "sequelize";

const BorrowerAsset = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iAssetID', primaryKey: true },
        borrowerId: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerID' },
        assetType: {type: DataTypes.STRING, allowNull: true, field: 'cAssetType' },
        assetValue: {type: DataTypes.FLOAT, allowNull: true, field: 'fAssetValue' },
        percentage: {type: DataTypes.FLOAT, allowNull: true, field: 'fPercentage' },
        notes: {type: DataTypes.STRING, allowNull: true, field: 'cNotes' },
    };

    return sequelize.define('vBorrower_Assets', attributes, { freezeTableName: true, timestamps: false });

};

export default BorrowerAsset;