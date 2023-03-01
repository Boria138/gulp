import groupcssmedia from "gulp-group-css-media-queries";
import autoPrefixer from "gulp-autoprefixer";
import cssbeautify from "gulp-cssbeautify";
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
    .pipe(scss(app.settings.scss))
    .pipe(groupcssmedia())
    .pipe(autoPrefixer(app.settings.autoprefixer))
    .pipe(cssbeautify())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(GulpCleanCss(app.settings.cleancss))
    .pipe(app.plugins.rename(app.settings.rename))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};

export default css;
