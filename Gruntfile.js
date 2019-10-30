module.exports = function(grunt){
    grunt.initConfig({
        // pass in options to plugins, references to files
        jshint: {
              files: ['*.js', '!*.min.js'],
              options: {
                globals: {
                  jQuery: true
                },
                esversion: 6
              }
            },
        watch: {
            files: ['*.js', '!*.min.js'],
            tasks: ['jshint']
        }
    });
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // register tasks
    grunt.registerTask('checkJS', ['jshint']);
    grunt.registerTask('runWatch', ['watch']);
};
