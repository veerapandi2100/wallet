/************************************************************************************************
 *	Filename  	: WalletTranscation.js							
 *	Author	  	: Veerapandi M
 *	Date		    : 29-11-2023							
 *	Description	: Create a model file.
 ***********************************************************************************************/
const sequelize  = require('sequelize');
const db = require('../config/database');

const WalletTranscation = db.define('wallet_transcation', {
   
    transcation_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: sequelize.FLOAT,     
      },
      type: {
          type: sequelize.STRING,
          allowNull: false,    
        },
      createdAt: {
      type: sequelize.TIME,    
      allowNull: false, 
      },
      updatedAt: {
        type: sequelize.TIME, 
        allowNull: true,   
      },  deleted_status: {
        type: sequelize.BOOLEAN    
      }, wallet_id: {
        type: sequelize.INTEGER,
        allowNull: false,    
      },
    });

  module.exports = WalletTranscation;