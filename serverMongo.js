/**
 * Created by thangnv on 10/5/15.
 */
var mongo=require('mongoose');
var app = require('express')();
var user = require('./models/mongo/user');
mongo.connect('mongodb://localhost:27017/benchmark', function (err,db) {
    if(err) throw err;
})
app.route('/').get(function (req,res) {
    console.log('mongo request ')
    user.find({
        user_login : /[100]$/ig
    }).sort([['user_login', 1]]).limit(200).exec(function (err,results) {
        if(err)
            console.log(err);
        res.json(results);
    })
})
app.listen(3000, function (req,res) {
    console.log('server Mongo is running ...')
})