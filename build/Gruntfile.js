
module.exports = function(grunt) {

 // grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-closure-tools');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  	
  	requirejs: {
	  compile: {
	    options: {
	      baseUrl: "../source/js/app",
	      mainConfigFile: "../source/js/app/boot.js",
	      name: "main", // assumes a production build using almond
	      out: "../dist/js/app/main.js"
	    }
	  }
	}



  });

  // Load the plugin that provides the "uglify" task.
 

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('build',[
	'requirejs'
  	]);

};