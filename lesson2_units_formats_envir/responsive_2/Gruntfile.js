module.exports = function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					sizes: [{
						name: 'small',
						width: '25%',
						// suffix: '_small',
						quality: 20
					}, {
						name: 'medium',
						width: '50%',
						// suffix: '_medium',
						quality: 40
					}, {
						name: 'large',
						width: '75%',
						// suffix: '_large',
						quality: 60
					}]

				}
				,
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images/src',
					dest: 'images/dist/',
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
					src: ['*.{gif,png,jpg}'],
					cwd: 'images/dist/',
					dest: 'images/build/'}]
			}
		}
	});


	grunt.loadNpmTasks('grunt-responsive-images')
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-pagespeed');

	grunt.registerTask('img', ['responsive_images'])
	grunt.registerTask('min', ['imagemin'])
};

