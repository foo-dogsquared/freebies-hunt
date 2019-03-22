/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { data, schema } = require("freebies-hunt-api");
const jaysonDB = require("jayson-db");
const {kebabCase} = require("./src/scripts");

const categorySet = new Set();

for (const item in data) {
    categorySet.add(data[item].type);
}

const freebiesDB = new jaysonDB("freebies", {data, schema});

exports.createPages = ({ actions: { createPage }}) => {
    // let's create the freebies index page
    createPage({
        path: '/',
        component: require.resolve("./src/pages/categories.js"),
        context: { categories: Array.from(categorySet) }
    })

    // individual freebies category
    categorySet.forEach(category => {
        createPage({
            path: `/${kebabCase(category)}`,
            component: require.resolve("./src/pages/category.js"),
            context: {
                category, 
                items: freebiesDB.read(item => item.type === category), 
            }
        })
    })
}
