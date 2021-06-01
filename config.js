require('dotenv').config()

const config = {
    db: { /* don't expose password or any sensitive info, done only for demo */
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASS,
      database: process.env.DB_NAME,
    },
  };
  
  
export default config;