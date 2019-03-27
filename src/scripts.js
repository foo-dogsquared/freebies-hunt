const tinycolor = require("tinycolor2");

module.exports.kebabCase = (word) => {
    const nonAlphaNumericRegex = /[^A-Za-z0-9]/gi;
    const whitespace = /\s+/gi;
    return word.split(whitespace).map(word => word.replace(nonAlphaNumericRegex, "").toLowerCase()).join("-");
}

module.exports.generateStyleObject = (color) => {
    const tinycolorInstance = tinycolor(color);
    const lightenedColor = tinycolorInstance.brighten(20);

    return {
        backgroundImage: `linear-gradient(${color}, ${lightenedColor})`,
        color: (tinycolorInstance.isLight()) ? "black" : "white",
    }
}
