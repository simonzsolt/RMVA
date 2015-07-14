var express = require('express');
    router = express.Router(),
    mongoose = require('mongoose'),
    Account = require('../public/auth/models/usersModels'),
    session = require('express-session'),
    passport = require('passport');

// =========================BACKEND CRUD API ROUTING FOR AUTHENTICATION========================

// -----------------------------REGISTER-----------------------------

router.route('/auth')

    // register new user
    .post(function(req, res, next) {
        console.log('registering user');
        Account.register(new Account({ username: req.body.username }), 
            req.body.password, function(err) {
                if (err) {
                    // console.log('error while user register!', err);
                    // res.json({ myErr: 'mea culpa' });
                    res.json({msg: err});
                    return next(err); 
                }

                console.log('user registered!');
                res.redirect('/');
        });
    });

// -----------------------------GET ALL USERS-----------------------------

// aut middleware built in the router
router.get('/users', function(req, res) {
    console.log('/users get authenticating user');

    if (!req.isAuthenticated()) {
        res.sendStatus(401);
    }

    else {
        console.log('authenticated: ' + req.user.username);
    
        Account.find(function(err, data){
            if (err)
                res.send(err);
            res.json(data);
        });
    }   
});


// -----------------------------GET USER BY ID-----------------------------

// get user by id
router.route('/users/:user_id')
    .get(function(req, res){

        if (!req.isAuthenticated()) {
            res.sendStatus(401);
        }

        else {
            Account.findById(req.params.user_id, function(err, user){
                if (err)
                    res.send(err);
                res.json(user);
            });
        }
    })

// _____________________________DELETE BY ID_____________________________

    .delete(function(req, res) {

        if (!req.isAuthenticated()) {
            res.sendStatus(401);
        }

        else {
            Account.remove({
                _id: req.params.user_id

            }, 
            function(err, Account) {
                if (err)
                res.send(err);

                res.json({ message: 'felhasználó törölve' });
            });
        }            
});

// -----------------------------LOGIN-----------------------------

// authenticate user 
router.post('/login', passport.authenticate('local'), function(req, res) {

  // res.redirect('/');
  console.log('/login post authenticating user');
  res.send(req.user);

  console.log('/login post sent user: ' + req.user.username);
});

router.get('/login', passport.authenticate('local', {failureFlash: true }), function(req, res){
    console.log('/login get authenticating user');
    res.send(req.user);
});

// -----------------------------CHECK IF LOGGEDIN-----------------------------

// route to test if the user is logged in or not
 router.get('/loggedin', function(req, res) { 
    console.log('/loggedin get authenticating user');
    res.send(req.isAuthenticated() ? req.user : '0'); 
}); 

// -----------------------------LOGOUT-----------------------------

// req.logout function to terminate session
router.get('/logout', function(req, res) {
    console.log('/logout get authenticating user');
    req.logout();
    // res.sendStatus(200);
    res.redirect('/');
});

module.exports = router;