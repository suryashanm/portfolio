module.exports = function (grunt) {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "@" +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  grunt.initConfig({
    concat: {
      options: {
        separator: "\n",
        sourceMap: true,
        banner: "/*Processed by SURYA on " + datetime + "*/\n",
      },
      css: {
        src: ["../css/**/*.css"],
        dest: "dist/style.css",
      },
      js: {
        src: ["../js/**/*.js"],
        dest: "dist/script.js",
      },
      scss: {
        src: ["../scss/**/*.scss"],
        dest: "dist/style.scss",
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      css: {
        files: {
          "../../htdocs/assets/dist/css/style.css": ["dist/style.css"],
        },
      },
      scss: {
        files: {
          "../../htdocs/assets/dist/css/main.css": [
            "../../htdocs/assets/dist/css/main.css",
          ],
        },
      },
    },

    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "../../htdocs/assets/dist/css/main.css": "dist/style.scss",
        },
      },
    },

    uglify: {
      minify: {
        options: {
          sourceMap: true,
        },
        files: {
          "../../htdocs/assets/dist/js/script.min.js": ["dist/script.js"],
        },
      },
    },

    copy: {
      jquery: {
        files: [
          {
            expand: true,
            flatten: true,
            filter: "isFile",
            src: ["bower_components/jquery/dist/*"],
            dest: "../../htdocs/assets/dist/js/jquery/",
          },
        ],
      },
    },

    obfuscator: {
      options: {
        banner: "// obfuscated with grunt-contrib-obfuscator.\n",
        debugProtection: true,
        debugProtectionInterval: true,
        domainLock: ["surya.selfmade.fun"],
      },
      task1: {
        options: {
          // options for each sub task
        },
        files: {
          "../../htdocs/assets/dist/js/script.o.js": ["dist/script.js"],
        },
      },
    },

    watch: {
      css: {
        files: ["../css/**/*.css"],
        tasks: ["concat:css", "cssmin:css"],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ["../js/**/*.js"],
        tasks: ["concat:js", "uglify", "obfuscator"],
        options: {
          spawn: false,
        },
      },
      scss: {
        files: ["../scss/**/*.scss"],
        tasks: ["concat:scss", "sass", "cssmin:scss"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-obfuscator");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", [
    "copy",
    "concat",
    "cssmin:css",
    "sass",
    "cssmin:scss",
    "uglify",
    "obfuscator",
    "watch",
  ]);
};
