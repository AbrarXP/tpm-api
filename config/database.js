import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("gizi_db", "admin", "bandengpresto", {
  host: "34.58.254.65",
  dialect: "mysql",
  timezone: '+07:00',
});

export default db;