
module.exports = function (/** @type {import('@11ty/eleventy').UserConfig} */ config) {
    config.addPassthroughCopy("src/_assets/css/app.css");
    config.addWatchTarget("public/css/app.css");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "public",
        },
    };
};