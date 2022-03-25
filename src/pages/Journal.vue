<!--
 * @Author: 王越
 * @Date: 2022-03-22 10:04:44
 * @LastEditTime: 2022-03-25 11:16:59
 * @LastEditors: 王越
 * @Description:
-->
<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          杂志列表
        </h1>
      </div>
    </div>
    <g-link
      v-for="edge in $page.post.edges"
      :key="edge.node.id"
      :to="edge.node.path"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ edge.node.title }}</h2>
        <p class="journal-excerpt">
          {{ edge.node.title }}
        </p>
      </div>
    </g-link>

    <Pager :info="$page.post.pageInfo" />
  </Layout>
</template>

<page-query>
query($page: Int) {
  post:allWyStrapiPost(perPage: 3, page: $page) @paginate {
     pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        cover{
          url
        }
        created_at
        tags{
          id
          title
        }
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome"

export default {
  name: "JournalPage",
  metaInfo: {
    title: "Journal",
  },
  components: {
    Pager,
  },
}
</script>

<style lang="scss">
nav[role="navigation"] {
  text-align: center;
  margin-top: 30px;
  > a {
    margin: 5px;
    &.active--exact {
      color: dodgerblue;
    }
  }
}
</style>
