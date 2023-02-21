import path from "./path.js";

export default {
  browsersync: {
    server: { baseDir: path.buildFolder },
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
  versionNumber: {
    value: "%DT%",
    append: {
      key: "_v",
      cover: 0,
      to: ["css", "js"],
    },
    output: {
      file: "version.json",
    },
  },
  imagemin:{
    verbose: true,
    interlaced: true,
	progressive: true
  }
};
