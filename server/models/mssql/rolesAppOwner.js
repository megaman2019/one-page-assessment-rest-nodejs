import { DataTypes } from "sequelize";

const RolesAppOwner = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'ID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        roleName: { type: DataTypes.STRING, allowNull: true, field: 'cRoleName' },
        roleOwner: { type: DataTypes.STRING, allowNull: true, field: 'cRoleOwner' },
    };

    return sequelize.define('vAppRoleOwners', attributes, { freezeTableName: true, timestamps: false });

};

export default RolesAppOwner;