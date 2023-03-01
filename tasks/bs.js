import browsersync from "browser-sync";

const browserSync = () => {
  browsersync.init(app.settings.browsersync);
};

export default browserSync;
