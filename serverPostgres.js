/**
 * Created by thangnv on 10/5/15.
 */
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://thangnv:admin@127.0.0.1:5432/benchmark',{logging : false});
var app = require('express')();
var data = require('./data');

db['users'] = db.import('./models/postgres/user');
db.sync();


app.route('/').get(function (req,res) {
    console.log('postgres request')
    db.users.findAll({
        where : {
            user_login : {
                $ilike: '%100'
            }
        },
        limit : 200
    }).then(function (results) {
        res.json(results);
    })
})

app.listen(3000, function (req,res) {
    console.log('server postgres is running ...')
})