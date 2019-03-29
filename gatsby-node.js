const freebiesHuntApi = require("freebies-hunt-api");
const { kebabCase } = require("./src/scripts")

exports.createPages = async ({ actions: { createPage } }) => {
  const { categorizedData } = freebiesHuntApi;
  const categorySet = Object.keys(categorizedData);

  createPage({
    path: '/',
    component: require.resolve("./src/templates/categories.js"),
    context: {
      categories: categorizedData
    }
  })

  for (const category in categorizedData) {
    const categoryObject = categorizedData[category];
    const recommendCategories = {};

    while (Object.keys(recommendCategories).length <= 2) {
      const randomCategory = categorySet[Math.floor(Math.random() * categorySet.length)];
      if (randomCategory === category) continue;

      recommendCategories[randomCategory] = categorizedData[randomCategory];
    }

    createPage({
      path: `/${kebabCase(category)}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        category: categoryObject,
        name: category,
        categories: categorizedData,
      }
    })
  }
};

// adding some webpack configuration
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
      path: true,
      __dirname: true
    }
  })
}
