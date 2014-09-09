module.exports = function(grunt) {

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: [ 'client/app/scripts/**/*.js', 'client/app/**/*.js' ],
                tasks: [ 'jshint' ],
                options: {
                    livereload: true
                }
            },
            html: {
                files: [ 'client/app/views/**' ],
                options: {
                    livereload: true
                }
            },
            css: {
                files: [ 'client/app/styles/**' ],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: [ 'gruntfile.js', 'client/app/scripts/**/*.js', 'client/app/**/*.js' ]
        },
        shell: {
            install : {
                command : 'npm install'
            },
            start : {
                command : 'npm start'
            }
        }
    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Making grunt default to force in order not to break the project
    grunt.option('force', true);


    // Default task(s)
    grunt.registerTask('default', [ 'jshint', 'shell:install', 'shell:start' ]);
};