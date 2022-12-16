import { db } from '../../mssql/db.js'

export const getByCustIdIn =  async (custIdList) => {
    // convert custIdList into array number
    const arrayCustId = custIdList.split(',').map(custId => Number(custId));

    return await db.CreditHistory.findAll({ 
        where: { custId: arrayCustId } // Passing an array directly to the where option will implicitly use the IN operator (Op.In)
    });
}