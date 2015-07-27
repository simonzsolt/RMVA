var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;


// var connection = mongoose.createConnection('mongodb://localhost/vers', function(err) {
    
var connection = mongoose.createConnection(process.env.MONGOLAB_URI, function(err) {
    if (err) {
        console.log('DB connection error:' + err);
    }
    else {return}
});

autoIncrement.initialize(connection);

// var poemConnections = new Schema({ link: Number });


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
    },

    only_fest: {
        fest:   String,
        approx: String
    },
};

// var periodObj = {
//     from:   dateObj,
//     to:     dateObj    
// };
/*
var date = {

    single: dateObj,

    period: {

        from: dateObj,
        to:   dateObj
    }
};

*/


var versSchema = new mongoose.Schema({

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
    krono:      String, // kronosztichon
    head:       String, // élőfej. ??

    signo_type: String, // szignáltság - SELECT!

    signo_role_name: String, // szigno előnév
    signo_surname:   String, // szigno vezetéknév: 
    signo_add_name:  String, // szigno középső név:
    signo_forename:  String, // szigno keresztnév

    lenght:     Number, // terjedelem
    lenght_unit:String, // mértékegység - SELECT!
    col:        String, // kolofón

    date:   {

        single: dateObj,

        period: {

            from: dateObj,
            to:   dateObj
        }
    },

    // period: periodObj,
    
    date_info:  String, // honnan tudjuk? - SELECT!
    place:      String, // keletekzés helye
    place_info: String, // honnan tudjuk? - SELECT!
    conf:       String, // felekezet
    source:     String, // forrás
    text:       String, // modern szöveg
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