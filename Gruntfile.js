module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      shell: {
        restore: {
          command: function() {
            return 'cd Rentler.Web && kpm restore && cd ..';
          }
        },
        run: {
          command: function() {
            return 'cd Rentler.Web && k kestrel';
          }
        }
      }
  });

  grunt.registerTask('restore', function() {
    grunt.task.run(['shell']);
  });

  grunt.registerTask('default', [
    'shell:restore',
    'shell:run'
  ]);

};
