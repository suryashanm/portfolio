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
      scss: {
        files: {
          "../../htdocs/assets/dist/css/style.min.css": [
            "../../htdocs/assets/dist/css/style.min.css",
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
          "../../htdocs/assets/dist/css/style.min.css": "dist/style.scss",
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
      bcss: {
        files: [
          {
            expand: true,
            flatten: true,
            filter: "isFile",
            src: ["../bootstrap/css/*"],
            dest: "../../htdocs/assets/dist/css/",
          },
        ],
      },
      bjs: {
        files: [
          {
            expand: true,
            flatten: true,
            filter: "isFile",
            src: ["../bootstrap/js/*"],
            dest: "../../htdocs/assets/dist/js/",
          },
        ],
      },
    },

    watch: {
      js: {
        files: ["../js/**/*.js"],
        tasks: ["concat:js", "uglify"],
        options: {
          spawn: false,
        },
      },
      scss: {
        files: ["../scss/**/*.scss"],
        tasks: ["concat:scss", "sass", "cssmin"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", [
    "copy",
    "concat",
    "cssmin",
    "sass",
    "uglify",
    "watch",
  ]);
};
