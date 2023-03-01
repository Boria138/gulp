// Библиотеки
import gulp from "gulp";
import path from "./config/path.js";
import settings from "./config/settings.js";
import plugins from "./config/plugins.js";

//Глобальные переменные
global.app = {
  path: path,
  gulp: gulp,
  settings: settings,
  plugins: plugins,
};

// Задачи
import clean from "./tasks/clean.js";
import css from "./tasks/css.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./tasks/fonts.js";
import html from "./tasks/html.js";
import images from "./tasks/images.js";
import js from "./tasks/js.js";
import watchFiles from "./tasks/watch.js";
import browserSync from "./tasks/bs.js";

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const build = gulp.series(clean, fonts, gulp.parallel(js, css, html, images));

const dev = gulp.series(build, gulp.parallel(watchFiles, browserSync));

gulp.task("default", dev);

export { dev };
export { build };
