/**
 * Created by thangnv on 10/5/15.
 */
var mongoCli=require('mongodb').MongoClient,
    format = require('util').format;

mongoCli.connect('mongodb://localhost:27017/benchmark', function (err,db) {
    if(err) throw err;
    for(var i = 0 ; i < 200000 ; i++){
        console.log(i);
        db.collection('users').insert({
            user_login : 'test_'+i,
            user_pass : 'SP3J0QeqZq9I7fRMxZnan1DwSfeppFV/l5DQX2tS9/8rOCjyOyRSXGaxFWfN0bjAkKW3GtaqFW2IzQD2R+RpKA==',
            user_email : 'test_'+i+'@techmaster.vn',
            user_url : 'http://facebook.com/test_'+i,
            user_registered : Date.now(),
            display_name : 'Fullname Test_'+i,
            user_image_url : 'http://image.com/test_'+i,
            role : 'admin',
            phone : '0123456789',
            desc : 'Bài benchmark tốc độ giữa mongodb và postgres'
        })
    }
})

