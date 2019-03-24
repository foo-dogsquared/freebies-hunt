/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { categorizedData, categorizedDataSchema } = require("freebies-hunt-api");
const jaysonDB = require("jayson-db");
const {kebabCase} = require("./src/scripts");

const categorySet = new Set(Object.keys(categorizedData));

exports.createPages = ({ actions: { createPage }}) => {
    // let's create the freebies index page
    createPage({
        path: '/',
        component: require.resolve("./src/pages/categories.js"),
        context: { categories: categorizedData }
    })

    // individual freebies category
    let index = 0;
    for (const category in categorizedData) {
        createPage({
            path: `/${kebabCase(category)}`,
            component: require.resolve("./src/pages/category.js"),
            context: {
                name: category,
                category: categorizedData[category],
                nextCategory: categorySet[index + 1],
                previousCategory: categorySet[index - 1],
            }
        })
    }
}
