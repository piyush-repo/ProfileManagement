'use strict';

const Joi = require('joi'),
      path = require('path'),
      logger = require(path.resolve('.')+"/utils/logger");


function validate(){
    this.createProfile = function(req,res,next){
        let data = req.body;
        logger.info("middleware | user | createProfile | validate Input ",data);
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            age: Joi.number().min(1).max(100).required(),
            gender: Joi.string().required(),
            country: Joi.string().required()
        })

        Joi.validate(data,schema,function(err,success){
            if(err){
                logger.error('router | middleware | user | validate | error : ',err);
                res.status(404).json({success:false,error:{
                    message:err
                }})
            }
            else{
                next();
            }
        })
    }
}

module.exports = new validate();