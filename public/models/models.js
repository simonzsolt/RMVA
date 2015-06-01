var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
==============================================================================================
|| 
||
||
||
||
||                       ARRAYS NEED SEPATRE MODELS!!!!!!!!!!!
||
||
||
||
||
==============================================================================================
*/

var versSchema = new mongoose.Schema({

    rmva:       Number, // rmva azonosító (5jegyű, automatikus, szöveghez!, 160-, vagy 17 kezdetű)
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
    date:       Number, // keletkezés - DATE is limited to 1970!
    date_info:  String, // honnan tudjuk? - SELECT!
    place:      String, // keletekzés helye
    place_info: String, // honnan tudjuk? - SELECT!
    conf:       String, // felekezet
    text:       String, // modern szöveg
    imgs:       [],     // array of iamge files
    link_coll:  [{
                    link: Number
                }], // összekapcsolt adatlap azonosítója
    created_at:
        {
            type: Date, 
            default: Date.now()
        }, // létrehozva
    created_by: String, // felhasználónév - USER API!
    last_mod:   
        {
            type: Date, 
            default: Date.now()
        }, // utolsó módosítás
    mod_by:     String, // módosító felhasználóneve - USER API!
});

mongoose.model('Vers', versSchema);

/*
*
*               Updating data structure
*
*               models.js(Schema) > index.js(routing and backend of crud api) >
*               > ng.js(controllers) > index.js and partials(forms and tables) 
*
*/