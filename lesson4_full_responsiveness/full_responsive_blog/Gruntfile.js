/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 1600,
            suffix: '_large',
            quality: 30
          },{
            width: 1600,
            suffix: '_HD_large',
            quality: 75
          },{
            width: 800,
            suffix: '_medium',
            quality: 30
          },{
            width: 800,
            suffix: '_HD_medium',
            quality: 75
          },{
            width: 400,
            suffix: '_small',
            quality: 30
          },{
            width: 400,
            suffix: '_HD_small',
            quality: 75
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,webp}'],
          cwd: 'blog/static/images_src/',
          dest: 'blog/static/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['blog/static/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['blog/static/images']
        },
      },
    },
    imagemin: {
      dev: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          src: ['*.{jpg,webp}'],
          cwd: 'blog/static/images',
          dest: 'blog/static/images'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.registerTask('img', ['clean', 'mkdir','responsive_images']);
  grunt.registerTask('min', ['imagemin'])

};
