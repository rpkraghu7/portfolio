module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2000,
            suffix: '_large_2x',
            quality: 40
          },{
            width: 1400,
            suffix: '_large_1x',
            quality: 30
          },{
            width: 650,
            suffix: '_medium',
            quality: 20
          },{
            width: 350,
            suffix: '_small',
            quality: 20
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    clean: {
      dev: {
        src: ['images'],
      }
    },

    mkdir: {
      dev: {
        options: {
          create: ['images']
        }
      }
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*{jpg,png,gif}',
          dest: 'images/'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean','mkdir','copy','responsive_images']);
}
