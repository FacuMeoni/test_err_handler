import { config } from 'dotenv'
config();
import { Sequelize } from "sequelize";
const { DBHOST, DBNAME, DBUSER, DBPASS} = process.env;


export const sequelize = new Sequelize(`postgres://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}`, {
    logging: console.log()
});
