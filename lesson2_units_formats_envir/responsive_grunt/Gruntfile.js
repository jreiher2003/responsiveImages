module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/libs/*.js','js/app.js'], // input 
        dest: 'js/build/app.min.js'  // output
      }
    },
    sass: {

        dist: {
           options: {
            sourceMap: true
            },
            files: {
                'static/build/main.css': 'static/main.scss'
            }
        }


    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
