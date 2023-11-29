
 /************************************************************************************************
 *	Filename	: bank.js							
 *	Author		: Veerapandi M
 *	Date	   	: 29-11-2023							
 *	Description	: Wallet transcation operations.
 ***********************************************************************************************/
 const express = require('express');
 const router = express.Router();
 const logger = require('../config/logfile');
 // 
 const Joi = require('joi');
 const walletTranscation = require('../models/WalletTranscation');


 // Transcation Add Api
 router.post('/transaction', (req, res) => {
     try
     {
      //  console.log("Inside Param in body", req.body);
      // Define the validation schema using Joi
        const schema = Joi.object({
          amount: Joi.number().positive().required(),
          type: Joi.string().min(5).max(6).required(),
          walletId: Joi.number().required(),
        });
      const { error, value } = schema.validate(req.body, {stripUnknown: true });
        if (error) {
        // Return validation error
        logger.error(error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
      }
      //    
        walletTranscation.create({
          amount: value.amount,
          type: value.type,
          wallet_id: value.walletId
        }).then((data)=>{
        logger.info("Transaction Added Successfully"); 
        return res.status(200).json({status: 1, message: "Transaction Added Successfully"});
      });
     } catch(e){ logger.error('error', e); }
 });
 
 // Transcation List Api
 router.get('/transaction', (req, res) => {
    try
    {
       // console.log("Inside Param in Query", req.query);
        const limitData = +req.query.limit ? +req.query.limit: null;
        const offsetData = +req.query.offset ? +req.query.offset: null;
        const sort = (req.query.sort == 1) ?  'DESC': 'ASC';         
        const walletId = +req.query.walletId;
        // check the walletId
        if(!walletId || '' || typeof(walletId) == String)  return res.status(400).json({ error: 'Invalid walledId' });
        //
        walletTranscation.findAll({where : {wallet_id : walletId , deleted_status: 0}, order: [['createdAt', sort]], offset: offsetData, limit: limitData }).then((result)=>{
          //
          const output = result.map((data) => {
            const objectData = {};
            objectData.transcationId = data.transcation_id,
            objectData.Amount = data.amount;
            objectData.Type = data.type;
            return objectData;
        });
          logger.info("Transaction list show successfully"); 
          return res.status(200).send({status: 1, message: "Transaction list show successfully", data: output});
        });
    } catch(e){ logger.error('error', e); }
});

 // Transcation Total Amount Get Api
 router.get('/', (req, res) => {
    try
    {
      //  console.log("Inside Param in Query", req.query);
        const walletId = +req.query.walletId;
      // check the walletId
        if(!walletId || '' || typeof(walletId) == String)  return res.status(400).json({ error: 'Invalid walledId' });
        //
        walletTranscation.findAll({where : {wallet_id : walletId }}).then((result)=>{
          let amount = 0;
          result.map((data) => {
            if (data.type == 'CREDIT' && data.deleted_status == 0){
                amount = amount +data.amount
            }
            return 0;
        });
          logger.info("Transaction total amount show successfully"); 
          return res.status(200).send({status: 1, message: "Transaction total amount show successfully", remaingWalletBalance: amount});
        });
    
    } catch(e){ logger.error('error', e); }
});


 // Transcation Update Api
 router.put('/', (req, res) => {
    try
    {
      //  console.log("Inside Param in Query", req.body);

      // Define the validation schema using Joi
      const schema = Joi.object({
        amount: Joi.number().positive().required(),
        type: Joi.string().min(5).max(6).required(),
        transcationId: Joi.number().required(),
      });
     const { error, value } = schema.validate(req.body, {stripUnknown: true });

      if (error) {
      // Return validation error
      logger.error(error.details[0].message);
      return res.status(400).json({ error: error.details[0].message });
    }
        const transcationId = value.transcationId;
         //  console.log("Inside Param in body", req.body);
         walletTranscation.update({amount: value.amount ,  type: value.type, },{where: {transcation_id: transcationId}}).then((data)=>{
          logger.info("Transaction Updated Successfully"); 
        return res.status(200).json({status: 1, message: "Transaction Updated Successfully"});
      });
    
    } catch(e){ logger.error('error', e); }
});

 // Transcation Delete Api
 router.delete('/', (req, res) => {
    try
    {
      //  console.log("Inside Param in Query", req.query, req.body);
      const transcationId = +req.body.transcationId;
      // check the transcationId
      if(!transcationId || '' || typeof(transcationId) == String)  return res.status(400).json({ error: 'Invalid walledId' });
      //
        walletTranscation.update({deleted_status: 1},{where: {transcation_id: transcationId}}).then((data)=>{
          logger.info("Transaction Deleted Successfully"); 
          return res.status(200).json({status: 1, message: "Transaction Deleted Successfully"});
        });    
    } catch(e){ logger.error('error', e); }
});

 
 
 module.exports = router;