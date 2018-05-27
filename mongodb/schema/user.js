"use strict";

module.exports = function (mongoose) {
    let userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        createddate: {
            type: Date,
            default: Date.now
        },
        updateddate: {
            type: Date
        },
        deleted: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: true
        }
    });

    return mongoose.model('users', userSchema);
};
