'use strict';

var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var profile =  require(path.resolve('.')+'/routes/api/user/controller');
var supertest = require("supertest");
var server = supertest.agent("http://localhost:4000");


describe('profile', function() {
    it('create a profile based on the input', function(done) {
      var input = {
        name: 'piyush',
        country: 'India',
        age:12,
        gender:'Male'

      }

      server
    .post('/createProfile')
    .send(input)
    .expect("Content-type",/json/)
    //.expect(200) // THis is HTTP response
    .end(function(err,res){
        //console.log(err);
        //console.log(res);
        expect(res.status).to.equal(200);
        //res.body.error.should.equal(false);
        expect(res.body.success).to.equal(true);
        done();
      });
    //   profile.createProfile(input).then((success)=>{
    //     if(success){
    //         console.log(success);
    //         expect(success).to.deep.equal({ __v: 0,
    //             name: 'piyush',
    //             country: 'India',
    //             age: 12,
    //             gender: 'Male',
    //             _id: '5b0f6d730e44464d3475ff18',
    //             active: true,
    //             deleted: false,
    //             createddate: '2018-05-31T03:35:15.400Z' });
            
    //         done(success);
            
    //     }
    //   }).catch((error)=>{
    //     done(error);
    //   })
      
    });
  });