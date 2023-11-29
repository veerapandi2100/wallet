
/************************************************************************************************
 *	Filename	: database.js							
 *	Author		: Veerapandi M
 *	Date		: 29-11-2023							
 *	Description	: Database connection.
 ***********************************************************************************************/
const {Sequelize} = require('sequelize');

module.exports = new Sequelize('bank', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
  });