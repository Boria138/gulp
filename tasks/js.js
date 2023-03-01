import GulpRigger from "gulp-rigger";
import GulpUglify from "gulp-uglify";

const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      app.plugins.gulpPlumber(
        app.plugins.notify.onError({
          title: "JAVASCRIPT",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(GulpRigger())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(GulpUglify(app.settings.uglify))
    .pipe(app.plugins.rename(app.settings.rename))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};

export default js;
