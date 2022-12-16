import { DataTypes } from "sequelize";

const AppDLAProfile = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID', primaryKey: true },
        financier: {type: DataTypes.STRING, allowNull: true, field: 'cFinancier' },
        profileName: {type: DataTypes.STRING, allowNull: true, field: 'cProfileName' },
        approvalLimit: {type: DataTypes.FLOAT, allowNull: true, field: 'fApprovalLimit' },
        firstname: {type: DataTypes.STRING, allowNull: true, field: 'cFirstName' },
        surname: {type: DataTypes.STRING, allowNull: true, field: 'cSurname' },
    };

    return sequelize.define('vAppDLAProfile', attributes, { freezeTableName: true, timestamps: false });

};

export default AppDLAProfile;