/**
 * Created by thangnv on 10/7/15.
 */

module.exports = function (sequelize,DataTypes) {
    var user = sequelize.define('users' ,{
        user_login : DataTypes.STRING,
        user_pass : DataTypes.STRING,
        user_email : DataTypes.STRING,
        user_url : DataTypes.STRING,
        user_registered : DataTypes.STRING,
        display_name : DataTypes.STRING,
        user_image_url : DataTypes.STRING,
        role : DataTypes.STRING,
        phone : DataTypes.STRING,
        desc : DataTypes.STRING
    },
    {
        tableName : 'users',
        createdAt: false,
        updatedAt: false
    });
    return user;
}