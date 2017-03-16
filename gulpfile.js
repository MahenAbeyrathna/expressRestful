/**
 * Created by MaheN on 3/7/2017.
 */
var gulp= require('gulp'),
    nodemon= require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha');
gulp.task('default',function(){
    nodemon({
        script:'server.js',
        ext:'js',
        env:{
            PORT:8000
        },
        ignore:['./node_modules/**']
    })
        .on('restart',function(){
            console.log('Restart');

    });
});
gulp.task('test',function(){
    gulp.src('Tests/*',{read:false})
        .pipe(gulpMocha({reporter:'nyan'}))
})