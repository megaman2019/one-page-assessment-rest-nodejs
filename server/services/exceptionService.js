import { db } from '../../mssql/db.js'

export const getByAppId =  async (appId) => await db.Exception.findAll({ where: { appId } });
