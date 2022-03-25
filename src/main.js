/*
 * @Author: 王越
 * @Date: 2022-03-18 17:21:14
 * @LastEditTime: 2022-03-25 10:04:33
 * @LastEditors: 王越
 * @Description:
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/styles.css"

import DefaultLayout from "~/layouts/Default.vue"

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  Vue.filter("getImageFullPath", (path) => {
    return `${process.env.GRIDSOME_API_URL}${path}`
  })
}
