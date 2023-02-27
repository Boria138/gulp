import gulpWebpHtml from "gulp-webp-html";

const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.gulpPlumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(gulpWebpHtml())
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};

export default html;
