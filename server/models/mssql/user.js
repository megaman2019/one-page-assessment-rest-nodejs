import { DataTypes } from "sequelize";

const User = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iUserID', primaryKey: true },
        username: {type: DataTypes.STRING, allowNull: false, field: 'cNTUserID' },
        password: {type: DataTypes.STRING, allowNull: false, field: 'cPassword' },
        role: {type: DataTypes.STRING, allowNull: true, field: 'cRole' },
    };

    return sequelize.define('vUser', attributes, { freezeTableName: true, timestamps: false });

};

export default User;