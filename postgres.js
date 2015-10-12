/**
 * Created by thangnv on 9/22/15.
 */

var Sequelize = require('sequelize');

var db = new Sequelize('postgres://thangnv:admin@127.0.0.1:5432/benchmark',{logging : false});
db['users'] = db.define('users' ,{
    user_login : Sequelize.STRING,
    user_pass : Sequelize.STRING,
    user_email : Sequelize.STRING,
    user_url : Sequelize.STRING,
    user_registered : Sequelize.STRING,
    display_name : Sequelize.STRING,
    user_image_url : Sequelize.STRING,
    role : Sequelize.STRING,
    phone : Sequelize.STRING,
    desc : Sequelize.STRING
}, {tableName : 'users',createdAt: false,
    updatedAt: false});

db.sync().then(function () {
    addData(0);
});

function addData(i){
    "use strict";
    db.users.create({
        user_login : 'test_'+i,
        user_pass : 'SP3J0QeqZq9I7fRMxZnan1DwSfeppFV/l5DQX2tS9/8rOCjyOyRSXGaxFWfN0bjAkKW3GtaqFW2IzQD2R+RpKA==',
        user_email : 'test_'+i+'@techmaster.vn',
        user_url : 'http://facebook.com/test_'+i,
        user_registered : ''+Date.now(),
        display_name : 'Fullname Test_'+i,
        user_image_url : 'http://image.com/test_'+i,
        role : 'admin',
        phone : '0123456789',
        desc : 'Bài benchmark tốc độ giữa mongodb và postgres'
    }).then(function (result) {
        console.log('------------------- '+i);
        if(i<200000){
            addData(++i);
        }
    }).catch(function (err) {
        console.log("ERROR : "+err)
    })
}