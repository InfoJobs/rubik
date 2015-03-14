module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      style: ['css', 'styleguide']
    },
    copy: {
      styleguide: {
        files: [
          { src: ['styleguide.md'], dest: 'css/styleguide.md'}
        ]
      },
      allStyles: {
        files: [
          { src: ['css/styles.css'], dest: 'styleguide/public/styles.css'}
        ]
      },
      copyFonts: {
        files: [
          { src: ['fonts/*'], dest: 'styleguide/'}
        ]
      }
    },
    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: [
          { src: ['rubik-styleguide.scss'], dest: 'css/styles.doc.css'}
        ]
      },
      production: {
        options: {
          style: 'compressed'
        },
        files: [
          { src: ['rubik-styleguide.scss'], dest: 'css/styles.css'}
        ]

      }
    },
    shell: {
      kss: {
//          command: 'kss-node css styleguide --css css/styles.doc.css'
          command: 'kss-node css styleguide --template templates/infojobs --helpers templates/helpers'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['clean', 'sass', 'copy:styleguide', 'shell', 'copy:allStyles', 'copy:copyFonts']);

};
