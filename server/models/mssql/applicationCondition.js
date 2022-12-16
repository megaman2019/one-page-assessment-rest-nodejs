import { DataTypes } from 'sequelize';

const ApplicationCondition = (sequelize) => {
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppConditionID', primaryKey: true },
        appId: { type: DataTypes.INTEGER, allowNull: false, field: 'iAppID' },
        conditionDesc: { type: DataTypes.STRING, allowNull: true, field: 'cConditionDesc' },
        status: { type: DataTypes.STRING, allowNull: true, field: 'cStatus' },
        received: { type: DataTypes.DATE, allowNull: true, field: 'dReceived' },
        completed: { type: DataTypes.DATE, allowNull: true, field: 'dCompleted' },
        order: { type: DataTypes.INTEGER, allowNull: true, field: 'iOrder' },
    }

    return sequelize.define('vApplicationConditions', attributes, { freezeTableName: true, timestamps: false });

}

export default ApplicationCondition;