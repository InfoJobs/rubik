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
          { src: ['css/rubik.css'], dest: 'styleguide/public/rubik.css'}
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
          { src: ['rubik-styleguide.scss'], dest: 'css/rubik.doc.css'}
        ]
      },
      production: {
        options: {
          style: 'compressed'
        },
        files: [
          { src: ['rubik-styleguide.scss'], dest: 'css/rubik.css'}
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
