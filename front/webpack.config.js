module.exports = {
    entry: {
        slider: "./scripts/slider/slider.js",
        cards: "./scripts/cards/render.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name]_bundle.js"
    },
};