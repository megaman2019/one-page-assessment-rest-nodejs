import { DataTypes } from "sequelize";

const BorrowerIdentification = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerIdentificationID', primaryKey: true },
        borrowerId: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerID' },
        documentNumber: {type: DataTypes.STRING, allowNull: true, field: 'cDocumentNumber' },        
        documentType: {type: DataTypes.STRING, allowNull: true, field: 'cDocumentType' },
    };

    return sequelize.define('vBorrower_Identifications', attributes, { freezeTableName: true, timestamps: false });

};

export default BorrowerIdentification;