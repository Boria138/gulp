const buildFolder = "./dist";
const srcFolder = "./#src";

export default {
  build: {
    html: buildFolder + "/",
    css: buildFolder + "/css/",
    js: buildFolder + "/js/",
    img: buildFolder + "/img/",
    fonts: buildFolder + "/fonts/",
    icons: buildFolder + "/icons/",
    favicon: buildFolder + "/favicons/"
  },
  src: {
    html: srcFolder + "/*.html",
    css: srcFolder + "/scss/style.scss",
    js: srcFolder + "/js/script.js",
    img: srcFolder + "/img/**/*.{jpg,png,webp,svg,gif,ico}",
    fonts: srcFolder + "/fonts/**/*.*",
    icons: srcFolder + "/icons/**/*.*",
    favicon: srcFolder + "/favicon/favicon.svg"
  },
  watch: {
    html: srcFolder + "/**/*.html",
    css: srcFolder + "/scss/**/*.scss",
    js: srcFolder + "/js/**/*.js",
    img: srcFolder + "/img/**/*.{jpg,png,webp,svg,gif,ico}",
  },
  srcFolder: srcFolder,
  buildFolder: buildFolder,
};
