module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-dev-update');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-githooks');

    grunt.initConfig({
        devUpdate: {
            main: {
                options: {
                    updateType: 'prompt', //just report outdated packages 
                    reportUpdated: true, //don't report up-to-date packages 
                    semver: true, //stay within semver when updating 
                    packages: {
                        devDependencies: true, //only check for devDependencies 
                        dependencies: true
                    },
                    packageJson: null, //use matchdep default findup to locate package.json 
                    reportOnlyPkgs: [] //use updateType action on all packages 
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:3001/#/list',
                app: 'google-chrome-stable'
            }               
        },
        wiredep: {
            task: {
                src: ['views/index.ejs'],
                ignorePath: '../public'
            }
        },
        watch: {
            files: ['public/assets/lib/*'],
            tasks: ['wiredep']
        },
        ngAnnotate: {

            options: {
                // Task-specific options go here. 
                singleQuotes: true
            },

            versApp: {
                files: [
                    {
                        expand: true,
                        src: [ 'public/ng/*.js','public/ng/**/*.js' ]
                    }
                ]
            }
        },
        concat: {  
            options: {
                sourceMap: true
            }, 

            production: {
                src: [
                    'public/assets/lib/jquery/dist/jquery.js',
                    // 'public/assets/lib/bootstrap/dist/js/bootstrap.js',
                    'public/assets/lib/angular/angular.min.js',
                    'public/assets/lib/angular-resource/angular-resource.min.js',
                    'public/assets/lib/angular-route/angular-route.min.js',
                    'public/assets/lib/angular-sanitize/angular-sanitize.min.js',
                    'public/assets/lib/bootstrap/dist/js/bootstrap.min.js',
                    'public/assets/lib/angular-ui-select/dist/select.min.js',
                    'public/assets/lib/jquery-ui/jquery-ui.min.js',
                    'public/assets/lib/angular-ui-date/src/date.js',
                    'public/assets/lib/angular-css/angular-css.min.js',
                    'public/ng/main.js',
                    'public/ng/config.js',
                    'public/ng/auth/config/authConfig.js',
                    'public/ng/poem/config/poemConfig.js',
                    'public/ng/shared/filters.js',
                    'public/ng/poem/services/poemFactory.js',
                    'public/ng/auth/services/userFactory.js',
                    'public/ng/auth/services/signupFactory.js',
                    'public/ng/auth/services/userLoggedInFactory.js',
                    'public/ng/auth/services/profileFactory.js',
                    'public/ng/shared/navbar/navCtrl.js',
                    'public/ng/poem/components/listing/listingCtrl.js',
                    'public/ng/poem/components/viewer/viewerCtrl.js',
                    'public/ng/poem/components/editor/editorCtrl.js',
                    'public/ng/poem/components/uploader/uploaderCtrl.js',
                    'public/ng/poem/components/editor/selectLink/selectLinkEditCtrl.js',
                    'public/ng/poem/components/uploader/selectLink/selectLinkUpCtrl.js',
                    'public/ng/poem/components/uploader/selectDate/selectDateCtrl.js',
                    'public/ng/poem/components/uploader/selectDate/selectDateFromCtrl.js',
                    'public/ng/poem/components/uploader/selectDate/selectDateToCtrl.js',
                    'public/ng/poem/components/editor/selectDate/selectDateEditCtrl.js',
                    'public/ng/poem/components/editor/selectDate/selectDateFromEditCtrl.js',
                    'public/ng/poem/components/editor/selectDate/selectDateToEditCtrl.js',
                    'public/ng/auth/components/signup/signupCtrl.js',
                    'public/ng/auth/components/login/loginCtrl.js',
                    'public/ng/auth/components/profile/profileCtrl.js',
                    'public/ng/auth/components/users/usersCtrl.js',
                    'public/ng/auth/components/users/editUsersCtrl.js',
                    'public/ng/auth/components/unauth/unauthCtrl.js',
                    'public/ng/auth/components/profile/profileCtrl.js'
                ],
                dest: 'public/build/production.js'
            },
            style : {
                src: [
                    'public/assets/css/style.css',
                    // 'public/assets/lib/bootstrap/dist/css/bootstrap.css',
                    // 'public/assets/lib/jquery-ui/themes/smoothness/jquery-ui.min.css',
                    'public/assets/lib/angular-ui-select/dist/select.min.css'
                ],
                dest: 'public/build/productionStyle.css'
            }
        },
        uglify: {
            options: { sourceMap: true },
            production: {
              files: {
                'public/build/production.js': ['public/build/production.js']
              }
            }
        },
        cssmin:{
            options: { sourceMap: true },
            style: {
                files: {
                    'public/build/productionStyle.css':
                    ['public/build/productionStyle.css']
                }
            }
        },
         htmlmin: {                                     // Task
            production: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeOptionalTags: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyCSS: true
                },
              
                files: {

                    'public/ng/poem/components/listing/listView.html': 
                    'public/ng/poem/components/listing/listView.html',
                    
                    'public/ng/poem/components/viewer/readView.html':
                    'public/ng/poem/components/viewer/readView.html',

                    'public/ng/poem/components/editor/editorView.html':
                    'public/ng/poem/components/editor/editorView.html',

                    'public/ng/poem/components/editor/poemFormEdit.html':
                    'public/ng/poem/components/editor/poemFormEdit.html',

                    'public/ng/poem/components/editor/poemFormEditCon.html':
                    'public/ng/poem/components/editor/poemFormEditCon.html',

                    'public/ng/poem/components/editor/poemFormEditMet.html':
                    'public/ng/poem/components/editor/poemFormEditMet.html',

                    'public/ng/poem/components/editor/poemFormEditRef.html':
                    'public/ng/poem/components/editor/poemFormEditRef.html',

                    'public/ng/poem/components/uploader/poemFormUp.html':
                    'public/ng/poem/components/uploader/poemFormUp.html',

                    'public/ng/poem/components/uploader/poemFormUpCon.html':
                    'public/ng/poem/components/uploader/poemFormUpCon.html',

                    'public/ng/poem/components/uploader/poemFormUpMet.html':
                    'public/ng/poem/components/uploader/poemFormUpMet.html',

                    'public/ng/poem/components/uploader/poemFormUpRef.html':
                    'public/ng/poem/components/uploader/poemFormUpRef.html',

                    'public/ng/poem/components/uploader/uploadView.html':
                    'public/ng/poem/components/uploader/uploadView.html',

                    'public/ng/poem/components/uploader/selectDate/selectDateFromView.html':
                    'public/ng/poem/components/uploader/selectDate/selectDateFromView.html',

                    'public/ng/poem/components/uploader/selectDate/selectDateToView.html':
                    'public/ng/poem/components/uploader/selectDate/selectDateToView.html',

                    'public/ng/poem/components/uploader/selectDate/selectDateView.html':
                    'public/ng/poem/components/uploader/selectDate/selectDateView.html',

                    'public/ng/shared/forms/formRefButtons.html':
                    'public/ng/shared/forms/formRefButtons.html',

                    'public/ng/shared/forms/userForm.html':
                    'public/ng/shared/forms/userForm.html',

                    'public/ng/shared/navbar/navView.html':
                    'public/ng/shared/navbar/navView.html',

                    'public/ng/auth/components/signup/signupView.html':
                    'public/ng/auth/components/signup/signupView.html',

                    'public/ng/auth/components/login/loginView.html':
                    'public/ng/auth/components/login/loginView.html',

                    'public/ng/auth/components/login/loginForm.html':
                    'public/ng/auth/components/login/loginForm.html',

                    'public/ng/auth/components/profile/editProfileForm.html':
                    'public/ng/auth/components/profile/editProfileForm.html',

                    'public/ng/auth/components/profile/profileView.html':
                    'public/ng/auth/components/profile/profileView.html',

                    'public/ng/auth/components/users/editUserForm.html':
                    'public/ng/auth/components/users/editUserForm.html',

                    'public/ng/auth/components/users/editUsersView.html':
                    'public/ng/auth/components/users/editUsersView.html',

                    'public/ng/auth/components/users/usersView.html':
                    'public/ng/auth/components/users/usersView.html',
                    
                    'public/ng/auth/components/unauth/unauthView.html':
                    'public/ng/auth/components/unauth/unauthView.html'                    
                }
            }
        },
         githooks: {
            all: {
              'pre-push': 'build'
            }
        }
    });

    // Default tasks
    grunt.registerTask('default',   ['devUpdate', 'githooks']);
    grunt.registerTask('dev',       ['devUpdate', 'wiredep', 'open:dev', 'githooks']);
    grunt.registerTask('build',     
        [
            'devUpdate', 
            'ngAnnotate', 
            'concat', 
            'uglify', 
            'cssmin',
            'htmlmin',
            'githooks'
        ]
    );
    grunt.registerTask('changes',   ['watch']);  
};