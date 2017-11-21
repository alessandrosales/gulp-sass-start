const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const concat = require('gulp-concat');

gulp.task('scss', function(){
    return gulp.src('src/scss/style.scss')
                .pipe(debug({title: 'leitura de arquivos:'}))
                .pipe(sass({outputStyle: 'compressed'}))
                .pipe(debug({title: 'processamento dos arquivos:'}))
                .pipe(concat('style.css'))
                .pipe(debug({title: 'concatenação:'}))
                .pipe(gulp.dest('build/css'))
                .pipe(debug({title: 'salvando arquivos finais:'}));
});

gulp.task('copy', function(){
    return gulp.src('src/html/index.html')
            .pipe(gulp.dest('build/'))
            .pipe(debug({title: 'arquivo index.html copiado:'}));
});

gulp.task('watch', function(){
    gulp.watch('src/scss/*', ['scss']);
    gulp.watch('src/html/*', ['copy']);
})

gulp.task('default', ['scss', 'copy', 'watch']);