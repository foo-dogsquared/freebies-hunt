const svgSprite = require("svg-sprite");
const fs = require("fs");
const path = require("path");

// the main images directory
const imagesDir = path.resolve(__dirname, "images/");

const outputDir = path.resolve(__dirname, "../static");

// the list of folders inside of the image directory
const directories = ["category-icons", "social-icons"];

for (const directory of directories) {
  const currentDir = path.resolve(imagesDir, directory);
  const svgconfig = {
    dest: path.resolve(__dirname, "../static"),
    mode: {
      symbol: true,
    }
  }

  const svgSpriteInstance = new svgSprite(svgconfig)
  const files = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const file of files) {
    if (path.extname(file.name) !== '.svg') continue;
    const name = path.basename(file.name, ".svg");
    const filePath = path.resolve(currentDir, file.name);

    const svgFile = fs.readFileSync(filePath, "utf8");
    console.log(`Extracting at ${filePath}`);
    svgSpriteInstance.add(filePath, file.name, svgFile);
  }

  svgSpriteInstance.compile((error, result) => {
    for (const type in result) {
      for (const resource in result[type]) {
        fs.writeFile(path.resolve(outputDir, `${directory}.svg`), result[type][resource].contents, (error) => {
          if (error) throw error;
        })
      }
    }
  })

  console.log("Moving on to the next directory...");
}