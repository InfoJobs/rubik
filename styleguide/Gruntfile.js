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
      },
      copyRubik: {
        expand: true,
        cwd: 'styleguide/',
        src: ['**'],
        dest: '../../rubik.public/'
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
    // Text replace ------------------------------------------------------------
    replace: {
      casper: {
        src: ['styleguide/*.html'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: ' casper',
          to: ''
        },
        {
          from: 'casper ',
          to: ''
        },
        {
          from: 'class="casper"',
          to: ''
      },
      {
        from: '#disabled#',
        to: ''
      },
      {
        from: '#casper#',
        to: ''
      }]
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "templates/infojobs/public/kss.css": "templates/infojobs/public/kss.less"
        }
      }
    },
    // Shell -------------------------------------------------------------------
    shell: {
        // Kss-node ------------------------------------------------------------
        kss: {
//          command: 'kss-node css styleguide --css css/styles.doc.css'
          command: 'kss-node dist/css styleguide --template templates/infojobs --helpers templates/helpers'
        //   command: 'kss-node dist/css styleguide --helpers templates/helpers'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['clean', 'sass', 'copy:styleguide', 'includereplace', 'less', 'shell', 'replace', 'copy:allStyles', 'copy:copyFonts']);
  grunt.registerTask('public', ['copy:copyRubik']);

};
