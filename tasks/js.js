import GulpRigger from "gulp-rigger";

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
    .pipe(app.plugins.browserSync.stream());
};

export default js;
