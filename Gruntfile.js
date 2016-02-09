module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
          dist: {
              options: {
                  style: 'expanded',
                  sourcemap: 'none'
              },
              files: {
                  'assets/css/style.css': 'assets/scss/style.scss'
              }
          }
      },
      cssmin: {
        target: {
          files: {
            'assets/css/style.css': 'assets/css/style.css'
          }
        }
      },
      watch: {
        files: ['**/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}
