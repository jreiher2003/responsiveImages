module.exports = function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: 'large',
						width: 800,
						quality: 50
					},{
						name: 'medium',
						width: 400,
						quality: 30
					},{
						name: 'small',
						width: 200,
						quality: 20
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images/',
					dest: 'images_build',
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
					src: ['*.{gif,jpg,png,svg}'],
					cwd: 'images_build/',
					dest: 'images_dest/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('img', ['responsive_images'])
	grunt.registerTask('min', ['imagemin'])
};