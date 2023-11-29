/************************************************************************************************
 *	Filename	: index.js							
 *	Author		: Veerapandi M
 *	Date		  : 29-11-2023					
 *	Description	: Main router file.
 ***********************************************************************************************/
 const express = require('express');
 const app = express();
 const port = 3000;
 const bodyParser = require('body-parser');

 const logger = require('./config/logfile');

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false })); 
  // parse application/json
  app.use(bodyParser.json());

 app.get('/', (req, res) => {
   res.send('Hi...!\n This is sample project of order create.');
 });
 
 // Routes
 app.use('/wallet', authData, require('./routes/bank'));

 // Server running notify
 app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
 });
 

 // Middlware Implementation Getting IP Address
 function authData(req, res, next){
  const ipAddress = req.connection.remoteAddress;
  // console.log();
  logger.info(`Incoming request from IP address: ${ipAddress}`);
  next();
 }