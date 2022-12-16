import tedious from 'tedious';
import { Sequelize } from 'sequelize';
import config from '../config.js';
import Application from '../server/models/mssql/application.js'
import Security from '../server/models/mssql/security.js';
import Mortgagor from '../server/models/mssql/mortgagor.js';
import Borrower from '../server/models/mssql/borrower.js';
import Product from '../server/models/mssql/product.js';
import BorrowerAsset from '../server/models/mssql/borrowerAsset.js';
import BorrowerIncome from '../server/models/mssql/borrowerIncome.js';
import BorrowerLiability from '../server/models/mssql/borrowerLiability.js';
import BorrowerIdentification from '../server/models/mssql/borrowerIdentification.js';
import AppDLAProfile from '../server/models/mssql/appDLAProfile.js';
import ApplicationCondition from '../server/models/mssql/applicationCondition.js';
import ApplicationSpecialCondition from '../server/models/mssql/applicationSpecialCondition.js';
import SettlementCondition from '../server/models/mssql/settlementCondition.js';
import SettlementSpecialCondition from '../server/models/mssql/settlementSpecialCondition.js';
import RolesAppOwner from '../server/models/mssql/rolesAppOwner.js';
import FundsPosition from '../server/models/mssql/fundsPosition.js';
import ProductFee from '../server/models/mssql/productFee.js';
import ProductLoanPurpose from '../server/models/mssql/productLoanPurpose.js';
import SecurityValuation from '../server/models/mssql/valuation.js';
import User from '../server/models/mssql/user.js';
import Exception from '../server/models/mssql/exception.js';
import CreditHistory from '../server/models/mssql/creditHistory.js';

export const db = {};

const initialize = async () => {
    const dialect = 'mssql';
    const host = config.sql.server;
    const { username, password } = config.sql.authentication.credential;
    const database = config.sql.database;

    // create db if it doesn't already exist
    //await ensureDbExists(dbName);

    // connect to db
    const sequelize = new Sequelize(database, username, password, { host, dialect, logging: console.log});

    // init models and add them to the exported db object
    db.Application = Application(sequelize);
    db.Security = Security(sequelize);
    db.Mortgagor = Mortgagor(sequelize);
    db.Borrower = Borrower(sequelize);
    db.Product = Product(sequelize);
    db.BorrowerAsset = BorrowerAsset(sequelize);
    db.BorrowerIncome = BorrowerIncome(sequelize);
    db.BorrowerLiability = BorrowerLiability(sequelize);
    db.BorrowerIdentification = BorrowerIdentification(sequelize);
    db.AppDLAProfile = AppDLAProfile(sequelize);
    db.ApplicationCondition = ApplicationCondition(sequelize);
    db.ApplicationSpecialCondition = ApplicationSpecialCondition(sequelize);
    db.SettlementCondition = SettlementCondition(sequelize);
    db.SettlementSpecialCondition = SettlementSpecialCondition(sequelize);
    db.FundsPosition = FundsPosition(sequelize);
    db.RolesAppOwner = RolesAppOwner(sequelize);
    db.ProductFee = ProductFee(sequelize);
    db.ProductLoanPurpose = ProductLoanPurpose(sequelize);
    db.SecurityValuation = SecurityValuation(sequelize)
    db.User = User(sequelize);
    db.Exception = Exception(sequelize);
    db.CreditHistory = CreditHistory(sequelize);

    /* 
        init associations
    */

    // Application - Security One to Many Relationship
    db.Application.hasMany(db.Security, { foreignKey: 'appId', as: 'securities'});
    db.Security.belongsTo(db.Application, { foreignKey: 'id'});

    // Application - Mortgagor One to Many Relationship
    db.Application.hasMany(db.Mortgagor, { foreignKey: 'appId', as: 'mortgagors'});
    db.Mortgagor.belongsTo(db.Application, { foreignKey: 'id' })

    // Application - Borrower One to Many Relationship
    db.Application.hasMany(db.Borrower, { foreignKey: 'appId', as: 'borrowers'});
    db.Borrower.belongsTo(db.Application, { foreignKey: 'id' });

    // Application - AppProducts One to Many Relationship
    db.Application.hasMany(db.Product, { foreignKey: 'appId', as: 'products' });
    db.Product.belongsTo(db.Application, { foreignKey: 'id'});

    // Application - AppDLAProfile One to One Relationship
    db.Application.hasOne(db.AppDLAProfile, { foreignKey: 'id', as: 'appDLAProfile'});
    db.AppDLAProfile.belongsTo(db.Application, { foreignKey: 'id'});

    // Application - ApplicationCondition One to Many Relationship
    db.Application.hasMany(db.ApplicationCondition, { foreignKey: 'appId', as: 'applicationConditions'});
    db.ApplicationCondition.belongsTo(db.Application, { foreignKey: 'id' });

    // Application - ApplicationSpecialCondition One to Many Relationship
    db.Application.hasMany(db.ApplicationSpecialCondition, { foreignKey: 'appId', as: 'applicationSpecialConditions'});
    db.ApplicationSpecialCondition.belongsTo(db.Application, { foreignKey: 'id' });

    // Application - SettlementCondition One to Many Relationship
    db.Application.hasMany(db.SettlementCondition, { foreignKey: 'appId', as: 'settlementConditions'});
    db.SettlementCondition.belongsTo(db.Application, { foreignKey: 'id' });

    // Application - SettlementSpecialCondition One to Many Relationship
    db.Application.hasMany(db.SettlementSpecialCondition, { foreignKey: 'appId', as: 'settlementSpecialConditions'});
    db.SettlementSpecialCondition.belongsTo(db.Application, { foreignKey: 'id' });

    // Application - FundsPosition One To Many Relationship
    db.Application.hasMany(db.FundsPosition, { foreignKey: 'appId', as: 'fundsPositions'});
    db.FundsPosition.belongsTo(db.Application, { foreignKey: 'id' });

    // Application - RolesAppOwner One To Many Relationship
    db.Application.hasMany(db.RolesAppOwner, { foreignKey: 'appId', as: 'rolesAppOwners'});
    db.RolesAppOwner.belongsTo(db.Application, { foreignKey: 'id' });

    // Borrower - Assets One to Many Relationship
    db.Borrower.hasMany(db.BorrowerAsset, { foreignKey: 'borrowerId', as: 'assets' });
    db.BorrowerAsset.belongsTo(db.Borrower, { foreignKey: 'id' });

    // Borrower - Incomes One to Many Relationship
    db.Borrower.hasMany(db.BorrowerIncome, { foreignKey: 'borrowerId', as: 'incomes' });
    db.BorrowerIncome.belongsTo(db.Borrower, { foreignKey: 'id' });

    // Borrower - Liabilities One to Many Relationship
    db.Borrower.hasMany(db.BorrowerLiability, { foreignKey: 'borrowerId', as: 'liabilities' });
    db.BorrowerLiability.belongsTo(db.Borrower, { foreignKey: 'id' });

    // Borrower - Identifications One to Many Relationship
    db.Borrower.hasMany(db.BorrowerIdentification, { foreignKey: 'borrowerId', as: 'identifications' });
    db.BorrowerIdentification.belongsTo(db.Borrower, { foreignKey: 'id' });

    // Product - ProductFees One to Many Relationship
    db.Product.hasMany(db.ProductFee, { foreignKey: 'appProductId', as: 'productFees' });
    db.ProductFee.belongsTo(db.Product, { foreignKey: 'id' });

    // Product - ProductLoanPurpose One to Many Relationship
    db.Product.hasMany(db.ProductLoanPurpose, { foreignKey: 'appProductId', as: 'productLoanPurposes' });
    db.ProductLoanPurpose.belongsTo(db.Product, { foreignKey: 'id' });

    // Security - Valuation One to Many Relationship
    db.Security.hasMany(db.SecurityValuation, { foreignKey: 'securityId', as: 'valuations' });
    db.SecurityValuation.belongsTo(db.Security, { foreignKey: 'id'});

    // sync all models with database
    // await sequelize.sync({ alter: false, create: false });

}

initialize();

// module.exports = db;
// const ensureDbExists = async (dbName) => {
//     return new Promise((resolve, reject) => {
//         const connection = new tedious.Connection(dbConfig);
//         connection.connect((err) => {
//             if (err) {
//                 console.error(err);
//                 reject(`Connection Failed: ${err.message}`);
//             }

//             const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
//             const request = new tedious.Request(createDbQuery, (err) => {
//                 if (err) {
//                     console.error(err);
//                     reject(`Create DB Query Failed: ${err.message}`);
//                 }

//                 // query executed successfully
//                 resolve();
//             });

//             connection.execSql(request);
//         });
//     });
// }