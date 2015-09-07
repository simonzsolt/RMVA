var express = require('express');
    router = express.Router(),
    mongoose = require('mongoose'),
    Vers = mongoose.model('Vers'),
    geonames = require('geonames-stream'),
    request = require('request'),
    through = require('through2');

// =============================BACKEND CRUD API ROUTING=============================

// -----------------------------INDEX-----------------------------

router.get('/', function (req, res, next) {
  res.render('index', {title: "RMVA"});
});

// -----------------------------POST-----------------------------

router.route('/data')

    .post(function(req, res){

         if (!req.isAuthenticated() || req.user.role == 'user') {
                res.sendStatus(401);
            }

        else {

            console.log('authenticated : ' + req.user.username);

            var vers  = new Vers();

            vers.rmva = req.body.rmva;
            vers.inc  = req.body.inc;

            vers.auth_role_name = req.body.auth_role_name;
            vers.auth_surname   = req.body.auth_surname;
            vers.auth_add_name  = req.body.auth_add_name;
            vers.auth_forename  = req.body.auth_forename;

            vers.title    = req.body.title;
            vers.arg      = req.body.arg;
            vers.adnotam  = req.body.adnotam;
            vers.acro     = req.body.acro;
            vers.acro_int = req.body.acro_int;
            vers.chrono    = req.body.chrono;
            vers.head     = req.body.head;

            vers.signo_type      = req.body.signo_type;
            vers.signo_role_name = req.body.signo_role_name; 
            vers.signo_surname   = req.body.signo_surname;    
            vers.signo_add_name  = req.body.signo_add_name;   
            vers.signo_forename  = req.body.signo_forename;  

            vers.length          = req.body.length;
            vers.length_unit     = req.body.length_unit;

            vers.metrum = req.body.metrum;

            vers.col = req.body.col;

            vers.date = req.body.date;

            vers.date_info   = req.body.date_info;
            vers.place       = req.body.place;
            vers.place_info  = req.body.place_info;
            vers.conf        = req.body.conf;
            vers.source      = req.body.source;
            vers.text        = req.body.text;
            vers.imgs        = req.body.imgs;
            vers.link_coll   = req.body.link_coll;

            vers.trad_genre = req.body.trad_genre;  

            vers.exemplum   = req.body.exemplum;  

            vers.commonplace = req.body.commonplace;    

            vers.topos      = req.body.topos;         

            vers.intertext  = req.body.intertext;     

            vers.communicate = req.body.communicate;   

            vers.figure     = req.body.figure;        
            vers.trope      = req.body.trope;         
            vers.comm_ret   = req.body.comm_ret;      

            vers.theme      = req.body.theme;

            vers.reflect = req.body.reflect;

            vers.created_at  = Date.now(); // changed to Date.now()
            vers.created_by  = req.body.created_by;
            vers.last_mod    = req.body.last_mod; // changed to Date.now()
            vers.mod_by      = req.body.mod_by;


            // console.log('req.body.metrum.comp_rep : ' + req.body.metrum.comp_rep);
         
            vers.save(function(err){
                if(err)
                    res.send(err);
                res.json({ msg : 'vers létrehozva req_auth_body :' + req.body.auth});
            });
        }

        })

// -----------------------------GET all data-----------------------------

        .get(function(req, res){


            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            }

            else {

                Vers.find(function(err, data){
                    if (err)
                        res.send(err);
                    res.json(data);
                });
            }
        });

        

// -----------------------------ID ROUTE-----------------------------

// _____________________________GET BY ID_____________________________


// _id --> rmva
router.route('/data/:rmva')

    .get(function(req, res){


        if (!req.isAuthenticated()) {
            res.sendStatus(401);
        }

        else {

            // zerofill unfilled id from mongodb
            rmvaID = zeroFill(5, req.params.rmva);

            // Vers.findById(req.params.vers_id, function(err, vers){
            Vers.findOne({ 'rmva' : rmvaID }, function(err, vers){
                if (err)
                    res.send(err);
                res.json(vers);
            });
        }
    })

// _____________________________UPDATE_____________________________


    .put(function(req, res){

        if (!req.isAuthenticated() || req.user.role == 'user') {
            res.sendStatus(401);
        }

        else {
            console.log('authenticated : ' + req.user.username);

            // Vers.findById(req.params.vers_id, function(err, vers){
            Vers.findOne({ 'rmva' : rmvaID }, function(err, vers){
                if (err)
                   res.send(err);

                vers.rmva   = req.body.rmva;
                vers.inc    = req.body.inc;
           
                vers.auth_role_name = req.body.auth_role_name;
                vers.auth_surname   = req.body.auth_surname;
                vers.auth_add_name  = req.body.auth_add_name;
                vers.auth_forename  = req.body.auth_forename;

                vers.title      = req.body.title;
                vers.arg        = req.body.arg;
                vers.adnotam    = req.body.adnotam;
                vers.acro       = req.body.acro;
                vers.acro_int   = req.body.acro_int;
                vers.chrono      = req.body.chrono;
                vers.head       = req.body.head;

                vers.signo_type = req.body.signo_type;
                vers.signo_role_name = req.body.signo_role_name; 
                vers.signo_surname   = req.body.signo_surname;    
                vers.signo_add_name  = req.body.signo_add_name;   
                vers.signo_forename  = req.body.signo_forename;  


                vers.length      = req.body.length;
                vers.length_unit = req.body.length_unit;

                vers.metrum = req.body.metrum;

                vers.col = req.body.col;

                vers.date = req.body.date;

                vers.date_info  = req.body.date_info;
                vers.place      = req.body.place;
                vers.place_info = req.body.place_info;
                vers.conf       = req.body.conf;
                vers.source     = req.body.source;
                vers.text       = req.body.text;
                vers.imgs       = req.body.imgs;
                vers.link_coll  = req.body.link_coll;

                vers.trad_genre = req.body.trad_genre;  

                vers.exemplum   = req.body.exemplum;  

                vers.commonplace = req.body.commonplace;    

                vers.topos      = req.body.topos;         

                vers.intertext  = req.body.intertext;     

                vers.communicate = req.body.communicate;   

                vers.figure     = req.body.figure;        
                vers.trope      = req.body.trope;         
                vers.comm_ret   = req.body.comm_ret;      

                vers.theme      = req.body.theme;

                vers.reflect         = req.body.reflect;

                vers.created_at = req.body.created_at;
                vers.created_by = req.body.created_by;
                vers.last_mod   = Date.now(); // changed to Date.now()
                vers.mod_by     = req.body.mod_by;

               
                vers.save(function(err){
                    if(err)
                        res.send(err);
                    res.json({ msg : 'vers frissítve'});
                });
            });
        }
    })

// _____________________________DELETE_____________________________


    .delete(function(req, res) {

        if (!req.isAuthenticated() || req.user.role !== 'admin') {
            res.sendStatus(401);
        }

        else {

            rmvaID = zeroFill(5, req.params.rmva);
            // console.log('rmvaID : ' + rmvaID);
            // console.log('authenticated : ' + req.user.username);

            Vers.remove({
                // _id : req.params.vers_id
                rmva : rmvaID
            }, 

            function(err, Vers) {
                if (err)
                res.send(err);

                res.json({ message : 'vers törölve' });
            });
        }
});

router.route('/geo/:name')
    .get(function(req, res){
        request.get(

            'http://api.geonames.org/searchJSON?' 
            + 'formatted=true&'
            + 'orderby=relevance&'
            // + 'country=HU&'
            // + 'country=SK&'
            + 'countryBias=HU&'
            + 'countryBias=SK&'
            + 'lang=en&' 
            + 'name_startsWith=' + encodeURIComponent(req.params.name) + '&'  
            + 'username=' + process.env.GEONAME,

            function(err, response, body){
                if(!err && res.statusCode == 200){
                }
            res.json(JSON.parse(body))
        });
    });

module.exports = router;