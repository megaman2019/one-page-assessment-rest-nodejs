import { db } from '../../mssql/db.js'

export const getUserByUserName = async (username) => 
    await db.User.findOne({ 
        attributes: [ 'id', 'username', 'role' ],
        where: { username }
    });
