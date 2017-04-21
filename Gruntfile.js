module.exports = function (grunt) {

  var bower = grunt.file.readJSON('bower.json');
  var gruntConfig = {
      name: bower.name,
      version: bower.version,
      srcDir: 'scripts',
      destDir: 'target'
    };

  //project configuration.
  grunt.initConfig({
    gruntConfig: gruntConfig,
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: {
        files: [{
          dot: true,
          src: ['<%= gruntConfig.destDir %>/*']
        }]
      }
    },
    uglify: {
      build: {
        src: '<%= gruntConfig.srcDir%>/*',
        dest: '<%= gruntConfig.destDir%>/main.min.js'
      }
    }
  });

  //load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

  //default task(s).
  grunt.registerTask('default', ['uglify']);

  //build task(s).
  grunt.registerTask('build', [
    'clean',
    'uglify'
  ]);
};
