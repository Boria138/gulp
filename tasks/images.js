import newer from "gulp-newer";
import gulpWebp from "gulp-webp";
import imagemin from "gulp-imagemin";

const images = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(
      app.plugins.gulpPlumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(newer(app.path.build.img))
    .pipe(gulpWebp())
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.img))
    .pipe(newer(app.path.build.img))
    .pipe(imagemin(app.settings.imagemin))
    .pipe(app.gulp.dest(app.path.build.img));
};

export default images;
