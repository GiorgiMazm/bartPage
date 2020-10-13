const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
var browserSync = require("browser-sync").create();

const styles = () => {
  return (
    gulp
      .src("./src/styles/main.scss")
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false
        })
      )
      .pipe(cleanCSS({ compatibility: "ie8" }))
      // .pipe(
      //   autoprefixer({
      //     cascade: false
      //   })
      // )
      .pipe(gulp.dest("css"))
      .pipe(browserSync.stream())
  );
};

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/styles/**/*.scss", styles);
  gulp.watch("./css/main/css").on("change", browserSync.reload);
  gulp.watch("./src/html/**/*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
};

gulp.task("styles", styles);
gulp.task("watch", watcher);
