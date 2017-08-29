var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

var Blog=require('./../models/blog')
var Influencer=require('./../models/influencer');
var Student=require('./../models/student');


router.post('/influencer', function(req, res, next) {

    var blogId=new mongoose.mongo.ObjectId();
    // var bloggerId="599f0513357a1d899b9bde0d";
    // var bloggerId=Student.findOne({"email":"nikhil051097@gmail.com"},'_id',function(err,user){
    //     if(err){console.log(err);}
    //     if(user){return user;}
    // })
    // console.log(blog)
    var obj={
        _id:blogId,
        title:req.body.title,
        content:req.body.content,
        blogger_id:req.body.id
    };
    var blog = new Blog(obj);
    blog.save(function (err, results) {
        console.log(results);
    });

 Influencer.findOne(
        {email:req.body.email,password:req.body.password},
     function(err,user){
            if(err){console.log(err)}
            if(user){return user;}
        }).then(function(data){
            data.blogs.push(blogId)
        data.save();
     res.send(data);
         });



});


router.get('/student',function(req,res,next){
   Blog.find(function(err,result){
       if(err){return err;}
       if(result){res.send(result)}
   })
});

module.exports = router;
