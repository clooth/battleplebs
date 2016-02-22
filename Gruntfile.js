// collar.io-client
const Paths = {
  Build: 'dist/collar.io.js',
  MinifiedBuild: 'dist/collar.io.min.js',
  SourceIndex: './index.ts',
  SourceFiles: './src/**/*.ts'
};

module.exports = function(grunt) {
  // configure
  grunt.initConfig({
    // uglifyjs configuration
    uglify: {
      build: {
        src: Paths.Build,
        dest: Paths.MinifiedBuild
      }
    },
    // typescript compilation configuration
    typescript: {
      base: {
        src: [Paths.SourceIndex, Paths.SourceFiles],
        dest: Paths.Build,
        options: {
          module: 'commonjs',
          target: 'es5',
          outFile: Paths.Build,
          sourceMap: true,
          declaration: true,
          references: [
            "bower_components/Kiwi.js/build/kiwi.d.ts",
            Paths.SourceFiles
          ]
        }
      }
    },
    // file watcher configuration
    watch: {
      scripts: {
        files: [Paths.SourceIndex, Paths.SourceFiles],
        tasks: ['typescript'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['typescript', 'watch']);
  grunt.registerTask('build', ['typescript', 'uglify']);
  grunt.registerTask('build-dev', ['typescript']);
};