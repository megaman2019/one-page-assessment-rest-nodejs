import { db } from '../../mssql/db.js'

export const getByAppId = async (id) => {

    //const app = await db.Application.findByPk(id, { include: { all: true, nested: true } });

    const app = await db.Application.findByPk(id, {  
        include: [
            {
                model: db.Borrower,
                as: 'borrowers',
                include: [
                    {
                        model: db.BorrowerAsset,
                        as: 'assets'
                    },
                    {
                        model: db.BorrowerIncome,
                        as: 'incomes'
                    },
                    {
                        model: db.BorrowerLiability,
                        as: 'liabilities'
                    },
                    {
                        model: db.BorrowerIdentification,
                        as: 'identifications'
                    },
                ]
            },
            {
                model: db.Mortgagor,
                as: 'mortgagors'
            },
            {
                model: db.Product,
                as: 'products',
                include: [
                    {
                        model: db.ProductFee,
                        as: 'productFees'
                    },
                    {
                        model: db.ProductLoanPurpose,
                        as: 'productLoanPurposes'
                    }
                ]
            },
            {
                model: db.Security,
                as: 'securities',
                include: [
                    {
                        model: db.SecurityValuation,
                        as: 'valuations'
                    }
                ]
            },
            {
                model: db.AppDLAProfile,
                as: 'appDLAProfile'
            },
            {
                model: db.ApplicationCondition,
                as: 'applicationConditions'
            },
            {
                model: db.ApplicationSpecialCondition,
                as: 'applicationSpecialConditions'
            },
            {
                model: db.SettlementCondition,
                as: 'settlementConditions'
            },
            {
                model: db.SettlementSpecialCondition,
                as: 'settlementSpecialConditions'
            },
            {
                model: db.FundsPosition,
                as: 'fundsPositions'
            },
            {
                model: db.RolesAppOwner,
                as: 'rolesAppOwners'
            },
        ]
    });

    return app;

}
