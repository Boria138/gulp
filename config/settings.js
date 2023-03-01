import path from "./path.js";

export default {
  browsersync: {
    server: { baseDir: "./" + path.buildFolder },
    notify: false,
    open: false,
  },
  cleancss: {
    level: 2,
  },
  rename: {
    suffix: ".min",
  },
  fonter: {
    formats: ["ttf"],
  },
  scss: {
    includePaths: ["./node_modules/"],
  },
  uglify: {
    mangle: false,
  },
  autoprefixer: {
    overrideBrowserslist: ["last 8 versions"],
    grid: true,
  },
  imagemin: {
    verbose: true,
    interlaced: true,
    progressive: true,
  },
};
