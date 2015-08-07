module.exports = function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					sizes: [{
						// name: 'resized',
						width: 800,
						quality: 20
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'app/static/images_src/',
					dest: 'app/static/images_dist/',
				}]
			}
		},
		imagemin: {
			dev: {
				options: {
					progressive: true
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'app/static/images_dist/',
					dest: 'app/static/images_build/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('img', ['responsive_images'])
	grunt.registerTask('min', ['imagemin'])
};