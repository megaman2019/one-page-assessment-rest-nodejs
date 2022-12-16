import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config.js';
import errorHandler from './middleware/error-handler.js';
import mongoose from 'mongoose';

import applicationRoutes from './server/routes/applicationRoutes.js';
import applicantTabInputRoutes from './server/routes/applicantTabInputRoutes.js';
import applicantInputRoutes from './server/routes/applicantInputRoutes.js';
import assetAndLiabilityTabInputRoutes from './server/routes/assetAndLiabilityTabInputRoutes.js';
import conditionTabInputRoutes from './server/routes/conditionTabInputRoutes.js';
import creditHistoryTabInputRoutes from './server/routes/creditHistoryTabInputRoutes.js';
import decisionSummaryTabInputRoutes from './server/routes/decisionSummaryTabInputRoutes.js';
import exceptionTabInputRoutes from './server/routes/exceptionTabInputRoutes.js';
import exitStrategyTabInputRoutes from './server/routes/exitStrategyTabInputRoutes.js';
import incomeTabInputRoutes from './server/routes/incomeTabInputRoutes.js';
import livingExpenseTabInputRoutes from './server/routes/livingExpenseTabInputRoutes.js';
import responsibleLendingTabInputRoutes from './server/routes/responsibleLendingTabInputRoutes.js';
import securityTabInputRoutes from './server/routes/securityTabInputRoutes.js';
import servicingTabInputRoutes from './server/routes/servicingTabInputRoutes.js';
import transactionTabInputRoutes from './server/routes/transactionTabInputRoutes.js';

import homeRoutes from './server/routes/homeRoutes.js'
import exceptionRoutes from './server/routes/exceptionRoutes.js';
import creditHistoryRoutes from './server/routes/creditHistoryRoutes.js';

const app = express();

const PORT = config.port || 5001;
const CONNECTION_URL = config.mongodb.connectionString;
const CONTEXT_PATH = `${config.context_path}/api`;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ imit: '30mb', extended: true  }));
app.use(cors());

/*
    api mongodb routes
*/ 
app.use(`/${CONTEXT_PATH}/applicantInput`, applicantInputRoutes); 
app.use(`/${CONTEXT_PATH}/applicantTabInput`, applicantTabInputRoutes); 
app.use(`/${CONTEXT_PATH}/assetAndLiabilityTabInput`, assetAndLiabilityTabInputRoutes);
app.use(`/${CONTEXT_PATH}/conditionTabInput`, conditionTabInputRoutes);
app.use(`/${CONTEXT_PATH}/creditHistoryTabInput`, creditHistoryTabInputRoutes);
app.use(`/${CONTEXT_PATH}/decisionSummaryTabInput`, decisionSummaryTabInputRoutes);
app.use(`/${CONTEXT_PATH}/exceptionTabInput`, exceptionTabInputRoutes);
app.use(`/${CONTEXT_PATH}/exitStrategyTabInput`, exitStrategyTabInputRoutes);
app.use(`/${CONTEXT_PATH}/incomeTabInput`, incomeTabInputRoutes);
app.use(`/${CONTEXT_PATH}/livingExpenseTabInput`, livingExpenseTabInputRoutes);
app.use(`/${CONTEXT_PATH}/responsibleLendingTabInput`, responsibleLendingTabInputRoutes);
app.use(`/${CONTEXT_PATH}/securityTabInput`, securityTabInputRoutes);
app.use(`/${CONTEXT_PATH}/servicingTabInput`, servicingTabInputRoutes);
app.use(`/${CONTEXT_PATH}/transactionTabInput`, transactionTabInputRoutes);

/*
    api mssql routes
*/
app.use(`/${CONTEXT_PATH}/home`, homeRoutes) 
app.use(`/${CONTEXT_PATH}/application`, applicationRoutes) 
app.use(`/${CONTEXT_PATH}/exception`, exceptionRoutes) 
app.use(`/${CONTEXT_PATH}/creditHistory`, creditHistoryRoutes) 

// global error handler
app.use(errorHandler);

// set context path
// app.use(CONTEXT_PATH, app);


/* Server & MongoDB connection initialization */
mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${config.uri}/${CONTEXT_PATH}`)))
    .catch((error) => console.log(`${error} did not connect`));

