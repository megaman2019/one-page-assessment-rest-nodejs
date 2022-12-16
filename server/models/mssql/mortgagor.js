import { DataTypes } from 'sequelize';

const Mortgagor = (sequelize) => {

    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iMortgagorID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        borrowerId: { type: DataTypes.INTEGER, allowNull: false, field: 'iBorrowerID' },
        firstNameOnly: { type: DataTypes.STRING, allowNull: true, field: 'cFirstNameOnly' },
        middleName: { type: DataTypes.STRING, allowNull: true, field: 'cMiddleName' },
        surname: { type: DataTypes.STRING, allowNull: true, field: 'cSurname' },
    }

    return sequelize.define('vMortgagors', attributes, { freezeTableName: true, timestamps: false });
}

export default Mortgagor;
