const gulp = require('gulp'); // Подключаем Gulp
const sass = require('gulp-sass'); // Подключаем Sass пакет
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer({
            browsers:['last 10 versions'],
        }))
        .pipe(gulp.dest('css')) // Выгружаем результата в папку css
});

gulp.task('default', function () {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], gulp.series('sass')); // Наблюдение за sass файлами в папке sass
});