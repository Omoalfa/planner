import config from './config'
import mysql from 'mysql2/promise'

const db = async (sql, params) => {
    const connection = await mysql.createConnection(config.db);

    const [result, ] = await connection.execute(sql, params)

    return result
}

export default db