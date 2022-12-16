import { DataTypes } from "sequelize";

const Exception = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        appId: {type: DataTypes.INTEGER, allowNull: false },
        tabName: {type: DataTypes.STRING, allowNull: false },
        policyException: {type: DataTypes.BOOLEAN, allowNull: true },
    };

    return sequelize.define('vExceptions', attributes, { freezeTableName: true, timestamps: false });

};

export default Exception;