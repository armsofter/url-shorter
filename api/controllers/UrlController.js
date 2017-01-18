var Urls = require('../models/Urls');

exports.createUrl = function(req, res){
    Urls.findOne({original:req.body.url}, function(err,data){
        if(!data){
            function makeUrl()
            {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for( var i=0; i < 5; i++ ){
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            }
            var shorted = makeUrl();
            Urls.findOne({shorted:shorted}, function(err, data){
                if(!data){
                    console.log(data);
                    var newUrl = new Urls({
                        original:req.body.url,
                        shorted:shorted,
                        created:new Date(),
                        used:0
                    });
                    newUrl.save(function(err, data){
                        if(!err){
                            res.json(data);
                        }
                    })
                }
            });
        }else{
            res.json(data);
        }
    });

};

exports.goTo = function(req, res){//getting the original url from prefix
    console.log(String(req.params.shorted));
    Urls.findOne({shorted:String(req.params.shorted)}, function(err, data){//selecting object from db
        if(!err){
            res.json(data);
        }else{
            console.log(err);
            res.json({error:true});
        }
    });
};