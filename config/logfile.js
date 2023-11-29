
/************************************************************************************************
 *	Filename  	: logfile.js							
 *	Author	  	: Veerapandi M
 *	Date		    : 29-11-2023							
 *	Description	: Create a log file.
 ***********************************************************************************************/
const winston = require('winston');

console.log(__dirname);
var logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: './loginfo.log' })
    ]
  });

  module.exports = logger;