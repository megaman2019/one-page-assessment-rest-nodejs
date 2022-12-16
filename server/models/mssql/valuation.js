import { DataTypes } from "sequelize";

const SecurityValuation = (sequelize) => {
    
    const attributes = {
        id: { type: DataTypes.INTEGER, allowNull: false, field: 'ID', primaryKey: true },
        securityId: { type: DataTypes.INTEGER, allowNull: false, field: 'iSecurityID' },
        zoning: { type: DataTypes.STRING, allowNull: true, field: 'cZoning' },
        landArea: { type: DataTypes.INTEGER, allowNull: true, field: 'iLandArea' },
        unitOfMeasurement: { type: DataTypes.STRING, allowNull: true, field: 'cUnitOfMeasurement' },
        livingAreaInSquareMetres: { type: DataTypes.FLOAT, allowNull: true, field: 'fLivingAreaInSquareMetres' },
        noOfUnits: { type: DataTypes.INTEGER, allowNull: true, field: 'iNoOfUnits' },
        landRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iLandRating' },
        neighbourhoodRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iNeighbourhoodRating' },
        environmentalRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iEnvironmentalRating' },
        improvementsRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iImprovementsRating' },
        reducedValueNextYearsRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iReducedValueNextYearsRating' },
        marketVolatilityRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iMarketVolatilityRating' },
        marketSegmentConditionRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iMarketSegmentConditionRating' },
        valuationDate: { type: DataTypes.DATE, allowNull: true, field: 'dValuationDate' },
        localEconomyImpactRating: { type: DataTypes.INTEGER, allowNull: true, field: 'iLocalEconomyImpactRating' },
    };

    return sequelize.define('vSecurity_Valuation', attributes, { freezeTableName: true, timestamps: false });

};

export default SecurityValuation;