import browsersync from "browser-sync";

const browserSync = () => {
  browsersync.init(app.setings.browsersync);
};

export default browserSync;
