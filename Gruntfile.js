module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({

    // Clean -------------------------------------------------------------------
    clean: {
      style: ['./styleguide/css', './styleguide/dist', './styleguide/styleguide']
    },
    // Copy --------------------------------------------------------------------
    copy: {
      styleguide: {
        files: [
          { src: ['./styleguide/styleguide.md'], dest: './styleguide/css/styleguide.md'}
        ]
      },
      allStyles: {
        files: [
          { src: ['./styleguide/css/rubik.css'], dest: './styleguide/styleguide/public/rubik.css'},
          { src: ['./styleguide/css/candidates.css'], dest: './styleguide/styleguide/public/candidates.css'},
          { src: ['./styleguide/css/companies.css'], dest: './styleguide/styleguide/public/companies.css'},
          { src: ['./styleguide/css/main.css'], dest: './styleguide/styleguide/public/main.css'}
        ]
      },
      copyFonts: {
        files: [
          { src: ['./fonts/*'], dest: './styleguide/styleguide/'}
        ]
      },
      copyMedia: {
        files: [
          { src: ['./styleguide/images/**'], dest: './styleguide/'}
        ]
      },
      copyJS: {
        files: [
          { src: ['./styleguide/js/**'], dest: 'styleguide/'},
          { src: ['./js/**'], dest: 'styleguide/styleguide/'}
        ]
      },
      copyHTML: {
        files: [
        { src: ['./html/**'], dest: 'styleguide/styleguide/'}
        ]
      },
      copyRubik: {
        expand: true,
        cwd: 'styleguide/styleguide/',
        src: ['**'],
        dest: '../rubik.public/'
      }
    },
    // Sass --------------------------------------------------------------------
    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: [
          { src: ['styleguide/rubik-styleguide.scss'], dest: 'styleguide/css/rubik.doc.css'},
          { src: ['styleguide/templates/infojobs/public/sass/main.scss'], dest: 'styleguide/css/main.doc.css'}

        ]
      },
      production: {
        options: {
          style: 'compressed'
        },
        files: [
          { src: ['styleguide/rubik-styleguide.scss'], dest: 'styleguide/css/rubik.css'},
          { src: ['styles/candidates.scss'], dest: 'styleguide/css/candidates.css'},
          { src: ['styles/companies.scss'], dest: 'styleguide/css/companies.css'},
          { src: ['styleguide/templates/infojobs/public/sass/main.scss'], dest: 'styleguide/css/main.css'}
        ]

      }
    },
    // Include replace ---------------------------------------------------------
    includereplace: {
      dist: {
        options: {},
        files: [
          {src: './styleguide/css/rubik.doc.css', dest: 'styleguide/dist/', expand: true, cwd: ''},
          {src: './styleguide/css/main.doc.css', dest: 'styleguide/dist/', expand: true, cwd: ''},
          {src: 'styleguide/templates/infojobs/index.html', dest: '', expand: true, cwd: ''}
        ]
      }
    },
    // Text replace ------------------------------------------------------------
    replace: {
      casper: {
        src: ['styleguide/styleguide/*.html'],
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
          "./styleguide/templates/infojobs/public/kss.css": "./styleguide/templates/infojobs/public/kss.less"
        }
      }
    },
    // Shell -------------------------------------------------------------------
    shell: {
        // Kss-node ------------------------------------------------------------
        kss: {
//          command: 'kss-node css styleguide --css css/styles.doc.css'
          command: './node_modules/.bin/kss-node styleguide/dist/styleguide/css styleguide/styleguide --template styleguide/templates/infojobs --helpers styleguide/templates/helpers'
        //   command: 'kss-node dist/css styleguide --helpers templates/helpers'
        }
    },
    // Server ------------------------------------------------------------------
    'http-server': {
        'dev': {
            root: 'styleguide/styleguide/',
            port: 8080,
            host: '0.0.0.0',
            cache: 60,
            showDir : true,
            autoIndex: true,
            ext: 'html',
            runInBackground: false,
            openBrowser : true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['clean', 'sass', 'copy:styleguide', 'includereplace', 'less', 'shell', 'replace', 'copy:allStyles', 'copy:copyFonts', 'copy:copyMedia', 'copy:copyJS', 'copy:copyHTML', 'http-server']);
  grunt.registerTask('public', ['copy:copyRubik']);

};
