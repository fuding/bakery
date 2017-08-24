// 存入access_token表
const d = require('../dbconf/');
let setAccessToken = (token) => {
    var insertAccess = function (db, callback) {
        db.collection('access_token').save({
            "createdAt": new Date(),
            "_id": "access_token",
            "access_token": token
        }, function (err, result) {
            d.assert.equal(err, null);
            console.log("access_token has inserted success");
            callback(result);
        });
    };

    d.MongoClient.connect(d.url, function (err, db) {
        d.assert.equal(null, err);
        insertAccess(db, function (data) {
            db.close();
        });
    })
};

let queryAccessToken = (f) =>{
    var findAccess = function (db, callback) {
        // var result=[];
        var cursor = db.collection('access_token').findOne({"_id": "access_token"});
        // cursor.each(function(err, doc) {
        //     d.assert.equal(err, null);
        //     if (doc != null) {
        //         result=doc
        //     } else {
        //         callback(result);
        //     }
        // });


        // var cursor=db.collection('order').findOne({"_id":o_id});
        cursor.then(function(res){
            if(res===null){
                callback('没有查询到id为'+id+'的记录')
            }else{
                callback(res);
            }
        })


    };

    d.MongoClient.connect(d.url, function (err, db) {
        d.assert.equal(null, err);
        findAccess(db, function (data) {
            console.log(data);
            db.close();
            f(data);
        });
    })

}


module.exports={
    "setAccessToken":setAccessToken,
    "queryAccessToken":queryAccessToken
};