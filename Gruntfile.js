module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['assets/scripts/js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    debounceDelay: 700
                }
            },
            libstyles: {
                files: ['assets/styles/scss/**/*.scss'],
                tasks: ['libsass', 'autoprefix', 'css-min'],
                options: {
                    spawn: false,
                    debounceDelay: 700
                }
            },
            stylesmin: {
                files: ['assets/styles/style.css'],
                tasks: ['css-min', 'uncss'],
                options: {
                    spawn: false,
                    debounceDelay: 700
                }
            },
            imagemin: {
                files: ['assets/images/src/**/*.{png,jpg,gif}'],
                tasks: ['imageminify', 'delete_sync'],
                options: {
                    spawn: false,
                    debounceDelay: 700
                }
            },
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'assets/styles/style.min.css': [
                    'assets/styles/style.css', 
                    'assets/styles/fonts/stylesheet.css', 
                    'assets/styles/fonts/font-awesome.css',
                    'assets/styles/slick.css'
                    ]
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                sourceMapEmbed: false
                
            },
            dist: {
                files: {
                    'assets/styles/style.css': 'assets/styles/scss/style.scss',
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 10 versions', 'ie 9', '> 1%', 'and_chr >= 2.3'],
                map: true,
                annotation: false
            },
            main: {
                expand: true,
                flatten: true,
                src: 'assets/styles/style.css',
                dest: 'assets/styles/'
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [          
                    'assets/scripts/js/*.js',
                ],
                dest: 'assets/scripts/scripts.js'
            },
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false, removeUselessStrokeAndFill: false}],
                    // use: [mozjpeg()]
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'assets/images/src',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}', '*.svg'],   // Actual patterns to match
                    dest: 'assets/images/dist'                  // Destination path prefix
                }]
            }
        },
        delete_sync: {
            dist: {
                cwd: 'assets/images/dist/',
                src: ['**/*.{png,jpg,gif,svg}'],
                syncWith: 'assets/images/src/'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'assets/scripts/scripts.min.js': ['assets/scripts/scripts.js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('css-min', ['cssmin']);

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('libsass', ['sass']);

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('autoprefix', ['autoprefixer']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('uglify-js', ['uglify']);

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('imageminify', ['imagemin']);

    grunt.loadNpmTasks('grunt-delete-sync');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('concat-js', ['concat']);

};