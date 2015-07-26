var express = require('express');
    router = express.Router(),
    mongoose = require('mongoose'),
    Vers = mongoose.model('Vers'),

// =============================BACKEND CRUD API ROUTING=============================

// -----------------------------INDEX-----------------------------

router.get('/', function (req, res, next) {
  res.render('index', {title: ""});
});

// -----------------------------POST-----------------------------

router.route('/data')

    .post(function(req, res){

         if (!req.isAuthenticated() || req.user.role == 'user') {
                res.sendStatus(401);
            }

        else {

            console.log('authenticated: ' + req.user.username);

            var vers  = new Vers(); // cahnged vers to vers
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
            vers.krono    = req.body.krono;
            vers.head     = req.body.head;

            vers.signo_type      = req.body.signo_type;
            vers.signo_role_name = req.body.signo_role_name; 
            vers.signo_surname   = req.body.signo_surname;    
            vers.signo_add_name  = req.body.signo_add_name;   
            vers.signo_forename  = req.body.signo_forename;  

            vers.lenght          = req.body.lenght;
            vers.lenght_unit     = req.body.lenght_unit;
            vers.col             = req.body.col;

            // vers.date        = req.body.date;
            // vers.date.month  = req.body.date.month;

            vers.period = req.body.period;

            vers.date.exact_date = req.body.date.exact_date;
            vers.date.year       = req.body.date.year;    
            vers.date.month      = req.body.date.month;   
            vers.date.day        = req.body.date.day;    
            vers.date.cent       = req.body.date.cent;    
            vers.date.fest       = req.body.date.fest;   
            vers.date.approx     = req.body.date.approx; 

            // vers.period.from = req.body.period.from;
            // vers.period.to   = req.body.period.to;

            // vers.date.period   = req.body.date.period;

            vers.date_info   = req.body.date_info;
            vers.place       = req.body.place;
            vers.place_info  = req.body.place_info;
            vers.conf        = req.body.conf;
            vers.source      = req.body.source;
            vers.text        = req.body.text;
            vers.imgs        = req.body.imgs;
            vers.link_coll   = req.body.link_coll;
            vers.created_at  = Date.now(); // changed to Date.now()
            vers.created_by  = req.body.created_by;
            vers.last_mod    = req.body.last_mod; // changed to Date.now()
            vers.mod_by      = req.body.mod_by;


            console.log('req.body.link_coll: ' + req.body.link_coll);
         
            vers.save(function(err){
                if(err)
                    res.send(err);
                res.json({ msg: 'vers létrehozva req_auth_body:' + req.body.auth});
            });
        }

        })

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
            // console.log('rmvaID: ' + rmvaID);

            // Vers.findById(req.params.vers_id, function(err, vers){
            Vers.findOne({ 'rmva': rmvaID }, function(err, vers){
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
            console.log('authenticated: ' + req.user.username);

            // Vers.findById(req.params.vers_id, function(err, vers){
            Vers.findOne({ 'rmva': rmvaID }, function(err, vers){
                if (err)
                   res.send(err);

                vers.rmva = req.body.rmva;
                vers.inc = req.body.inc;
           
                vers.auth_role_name = req.body.auth_role_name;
                vers.auth_surname   = req.body.auth_surname;
                vers.auth_add_name  = req.body.auth_add_name;
                vers.auth_forename  = req.body.auth_forename;

                vers.title = req.body.title;
                vers.arg = req.body.arg;
                vers.adnotam = req.body.adnotam;
                vers.acro = req.body.acro;
                vers.krono = req.body.krono;
                vers.head = req.body.head;

                vers.signo_type = req.body.signo_type;
                vers.signo_role_name = req.body.signo_role_name; 
                vers.signo_surname   = req.body.signo_surname;    
                vers.signo_add_name  = req.body.signo_add_name;   
                vers.signo_forename  = req.body.signo_forename;  


                vers.lenght = req.body.lenght;
                vers.lenght_unit = req.body.lenght_unit;
                vers.col = req.body.col;

                vers.period = req.body.period;

                vers.date.exact_date = req.body.date.exact_date;
                vers.date.year       = req.body.date.year;    
                vers.date.month      = req.body.date.month;   
                vers.date.day        = req.body.date.day;    
                vers.date.cent       = req.body.date.cent;    
                vers.date.fest       = req.body.date.fest;   
                vers.date.approx     = req.body.date.approx;

                vers.date_info = req.body.date_info;
                vers.place = req.body.place;
                vers.place_info = req.body.place_info;
                vers.conf = req.body.conf;
                vers.source = req.body.source;
                vers.text = req.body.text;
                vers.imgs = req.body.imgs;
                vers.link_coll = req.body.link_coll;
                vers.created_at = req.body.created_at;
                vers.created_by = req.body.created_by;
                vers.last_mod = Date.now(); // changed to Date.now()
                vers.mod_by = req.body.mod_by;

               
                vers.save(function(err){
                    if(err)
                        res.send(err);
                    res.json({ msg: 'vers frissítve'});
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
            // console.log('rmvaID: ' + rmvaID);
            // console.log('authenticated: ' + req.user.username);

            Vers.remove({
                // _id: req.params.vers_id
                rmva: rmvaID
            }, 

            function(err, Vers) {
                if (err)
                res.send(err);

                res.json({ message: 'vers törölve' });
            });
        }
});
    
module.exports = router;