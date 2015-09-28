var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

// session storage connection
var connection = mongoose.createConnection(process.env.DB_URL, function(err) {
    if (err) {
        console.log('DB connection error:' + err);
    }
    else {return;}
});

autoIncrement.initialize(connection);

// =====================================Date model==================================

var dateObj = {

    exact_date: Date,
    
    only_year: {    
        year:   Number,
        approx: String
    },

    year_month: {
        year:   Number,
        month:  String,
        approx: String
    },

    only_cent: {
        cent:   Number,
        approx: String
    }
};

// =====================================Metric model==================================

var metrumObj = {

    levels: {

        level: [{

            comp: {
                name:       String,
                comp_type:  String,
                quality:    String,
                rep:        String,
                symbols: [{
                    symbol: String,
                    rule:   String,
                    limit:  String,
                    limit_pos: String,
                    num:    String,
                }]
            }
        }]
    }
};


var describeObj = {
    desc: String,
    locus: {
        lg: Number,
        l:  Number
    }
};

var reflectDescObj = {
    name: String,
    desc: String,
    locus: {
        lg: Number,
        l:  Number
    }
};

var reflectionObj = {

    ref_genre:  [reflectDescObj],
    ref_input:  [reflectDescObj],
    ref_edit:   [reflectDescObj],
    ref_func:   [reflectDescObj],
    ref_circum: [reflectDescObj]

};

// =====================================POEM SCHEMA==================================

var versSchema = new mongoose.Schema({

    // ==============================TEXTOLOGY===============================

    rmva:       { type: 'number', unique: true }, // rmva azonosító 
    inc:        String, // incipit


    auth_role_name: String, // szerző előnév
    auth_surname:   String, // szerző vezetéknév
    auth_add_name:  String, // szerző középső név
    auth_forename:  String, // szerző keresztnév
  
    title:      String, // cím
    arg:        String, // argumentum. ??
    adnotam:    String, // nótajelzés
    acro:       String, // akrosztichon
    acro_int:   Boolean,// akrosztichon integráns. ?? 
    chrono:     String, // kronosztichon
    head:       Number, // élőfej. ??

    signo_type: String, // szignáltság - SELECT!

    signo_role_name: String, // szigno előnév
    signo_surname:   String, // szigno vezetéknév: 
    signo_add_name:  String, // szigno középső név:
    signo_forename:  String, // szigno keresztnév

    length:      Number, // terjedelem
    length_unit: String, // mértékegység - SELECT!

    col:         String, // kolofón

    date:   {

        single: dateObj,

        period: {

            from: dateObj,
            to:   dateObj
        }
    },

    
    date_info:  String, // honnan tudjuk? - SELECT!
    place:      String, // keletekzés helye
    place_info: String, // honnan tudjuk? - SELECT!
    conf:       String, // felekezet
    source:     String, // forrás

    text:       [], // modern szöveg
    
    imgs:       [],     // array of iamge files
    link_coll:  {}, // összekapcsolt adatlap azonosítója
    created_at:
        {
            type: Date, 
            default: Date.now()
        }, // létrehozva
    created_by: String, // felhasználónév - USER API!
    last_mod:   
        {
            type: Date
        }, // utolsó módosítás

    mod_by:     String, // módosító felhasználóneve - USER API!

    // ==============================METRUM===============================

    metrum: [ metrumObj ],

    trad_genre:     String,

    exemplum:       describeObj,

    commonplace:    describeObj,

    topos:          describeObj,

    intertext:      describeObj,

    communicate:    describeObj,

    figure:         describeObj,
    trope:          describeObj,
    comm_ret:       describeObj,

    theme:          describeObj,

    reflect: reflectionObj 


});

versSchema.plugin(autoIncrement.plugin, {
    model: 'Vers',
    field: 'rmva',
    startAt: 1,
    incrementBy: 1
});
mongoose.model('Vers', versSchema);

/*
*
*               Updating data structure
*
*               models.js(Schema) > index.js(routing and backend of crud api) >
*               > ng (controllers) > index.ejs and partials(forms and tables) 
*
*/