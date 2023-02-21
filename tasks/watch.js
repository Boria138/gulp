import html from "./html.js";
import css from "./css.js";
import js from "./js.js";
import images from "./images.js";

const watchFiles = () => {
  app.gulp.watch([app.path.watch.html], app.gulp.parallel(html));
  app.gulp.watch([app.path.watch.css], app.gulp.parallel(css));
  app.gulp.watch([app.path.watch.js], app.gulp.parallel(js));
  app.gulp.watch([app.path.watch.img], app.gulp.parallel(images));
};

export default watchFiles;
