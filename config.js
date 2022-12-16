import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
    PORT, 
    HOST, 
    HOST_URI, 
    SQL_USER, 
    SQL_PASSWORD, 
    SQL_DATABASE, 
    SQL_SERVER, 
    SQL_PORT, 
    SQL_TRUSTSERVERCERTIFICATE, 
    MONGODB_URI,
    CONTEXT_PATH,
    VERSION
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

export default {
    port: PORT,
    host: HOST,
    uri: HOST_URI,
    context_path: CONTEXT_PATH,
    version: VERSION,
    mongodb: {
        connectionString: MONGODB_URI
    },
    sql: {
        database: SQL_DATABASE,
        server: SQL_SERVER,
            options: {
                port: SQL_PORT,
                trustServerCertificate: SQL_TRUSTSERVERCERTIFICATE
            },
            authentication: {
                type: "default",
                credential: {
                    username: SQL_USER,
                    password: SQL_PASSWORD
                }
            }
    }
}