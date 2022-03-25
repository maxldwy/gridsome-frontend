/*
 * @Author: 王越
 * @Date: 2022-03-18 17:19:55
 * @LastEditTime: 2022-03-25 10:59:12
 * @LastEditors: 王越
 * @Description:
 */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/blog/**/*.md",
        typeName: "BlogPost",
      },
    },
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["post", "tag"],
        typeName: "WyStrapi", //Graphql中的别名
        singleTypes: ["general"], //单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: "wytest1",
        //   password: "1q2w3e4r",
        // },
      },
    },
  ],
  transformers: {
    remark: {
      //Config options can be added here
    },
  },
  templates: {
    //${typeName}+${contentTypes}
    WyStrapiPost: [
      { path: "/content/:id", component: "./src/templates/Content.vue" },
    ],
    WyStrapiTag: [{ path: "/tag/:id", component: "./src/templates/Tag.vue" }],
  },
}
