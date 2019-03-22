module.exports.kebabCase = (word) => {
    const nonAlphaNumericRegex = /[^A-Za-z0-9]/gi;
    const whitespace = /\s+/gi;
    return word.split(whitespace).map(word => word.replace(nonAlphaNumericRegex, "").toLowerCase()).join("-");
}
