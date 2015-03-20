module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({

    // Clean -------------------------------------------------------------------
    clean: {
      style: ['css', 'dist', 'styleguide']
    },
    // Copy --------------------------------------------------------------------
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
    // Sass --------------------------------------------------------------------
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
    // Include replace ---------------------------------------------------------
    includereplace: {
      dist: {
        options: {},
        files: [
          {src: 'css/rubik.doc.css', dest: 'dist/', expand: true, cwd: ''}
        ]
      }
    },
    // Shell -------------------------------------------------------------------
    shell: {
        // Kss-node ------------------------------------------------------------
        kss: {
//          command: 'kss-node css styleguide --css css/styles.doc.css'
          command: 'kss-node dist/css styleguide --template templates/infojobs --helpers templates/helpers'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['clean', 'sass', 'copy:styleguide', 'includereplace', 'shell', 'copy:allStyles', 'copy:copyFonts']);

};
