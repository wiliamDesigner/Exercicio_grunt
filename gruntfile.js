module.exports =function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files:['src/styles/**/*.less'],
                tasks:['less:development']
            },
            html:{
                files:['src/index.html'],
                tasks:['replace:dev']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match:'enderecodocss',
                            replacement:'./styles/main.css'
                        },


                        {
                            match:'enderecodojs',
                            replacement:'./scriptys/main.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten:true,
                        src:['src/index.html'],
                        dest:'dev/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns:[
                        {
                            match:'enderecodocss',
                            replacement:'./styles/main.min.css'
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten:true,
                        src:['prebuild/index.html'],
                        dest:'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'prebuild/index.html':'src/index.html'
                }
            }
        },
        clean:['prebuild'],

        uglify:{
            target:{
                files:{
                    'dist/scriptys/main.min.js':'src/scriptys/main.js'
                }
            }
        }
    }

    )


    grunt.loadNpmTasks('grunt-contrib-less');//vai precisar desse
    grunt.loadNpmTasks('grunt-contrib-watch');//vai precisar desse
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin')//vai precisar desse
    grunt.loadNpmTasks('grunt-contrib-clean')//vai precisar desse
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default',['watch']);//vai precisar desse
    grunt.registerTask('build',['less:production','htmlmin:dist','replace:dist','clean','uglify']);//vai precisar desse
}