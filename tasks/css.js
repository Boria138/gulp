import groupcssmedia from "gulp-group-css-media-queries";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const scss = gulpSass(dartSass);

const css = () => {
  return app.gulp
    .src(app.path.src.css)
    .pipe(
      app.plugins.gulpPlumber(
        app.plugins.notify.onError({
          title: "CSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(scss(app.setings.scss))
    .pipe(groupcssmedia())
    .pipe(autoPrefixer(app.setings.autoprefixer))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(GulpCleanCss(app.setings.cleancss))
    .pipe(app.plugins.rename(app.setings.rename))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};

export default css;
