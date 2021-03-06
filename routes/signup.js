var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var mongoose=require('mongoose');
var express = require('express');
var router = express.Router();
var findOrCreate = require('mongoose-findorcreate')

var Student=require('./../models/student');
var Influencer=require('./../models/influencer');

router.get('/', function(req, res, next) {
    res.send('respond with   a resource');
});

router.post('/student',function(req,res) {
    Student.findOrCreate(
        {"email":req.body.email},
        function(err,user){
        if(err){return err;}
        if(user){
                user.email=req.body.email;
                user.password=req.body.password;
                user.first_name=req.body.first_name;
                user.last_name=req.body.last_name;
                user.dob=req.body.dob;
                user.gender=req.body.gender;
            user.save(function(e,success){
                if(e){return e;}
                if(success){
                    res.send(success);
                    return success;}
            });
        }

        });
    });

    router.post('/influencer',function(req,res) {
        Influencer.findOrCreate(
            {"email":req.body.email},
            function(err,user){
            if(err){return err;}
            // if(user){
            //   res.send('user existing');
            // }
            if(user){
                    user.email=req.body.email;
                    user.password=req.body.password;
                    user.first_name=req.body.first_name;
                    user.last_name=req.body.last_name;
                    user.dob=req.body.dob;
                    user.gender=req.body.gender;
                user.save(function(e,success){
                    if(e){return e;}
                    if(success){
                        res.send(success);
                    }
                });
            }

            });
        });

    //dummy email check nikhil051097@gmail.com





module.exports = router;
