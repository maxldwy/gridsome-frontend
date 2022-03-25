<!--
 * @Author: 王越
 * @Date: 2022-03-22 10:32:00
 * @LastEditTime: 2022-03-25 11:17:40
 * @LastEditors: 王越
 * @Description:
-->
<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">
            {{ $page.post.title }}
          </h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span
              ><span class="author-name" v-if="$page.post.created_by"
                >{{ $page.post.created_by.firstname }}
                {{ $page.post.created_by.lastname }}</span
              >
            </div>
            <div class="journal-date">
              <span class="label">Create Date</span>
              <div>{{ $page.post.published_at }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Update Date</span
              ><span>{{ $page.post.updated_at }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content">
          <h4 id="use-forestry-as-a-cms-for-gridsome">
            <g-link
              v-for="tag in $page.post.tags"
              :to="'/tag/' + tag.id"
              style="margin-left:10px"
            >
              <span class="icon icon-link">{{ tag.title }}</span>
            </g-link>
          </h4>
          <div v-html="mdToHtml($page.post.content)"></div>
          <div>
            <g-image :src="$page.post.cover.url | getImageFullPath"></g-image>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
   post:wyStrapiPost(id:$id){
    id
    title
    content
    cover{
      url
    }
    tags{
      id
      title
    }
    created_by{
      firstname
      lastname
    }
    published_at
    updated_at
  }
}
</page-query>

<script>
import MarkdownIt from "markdown-it"
const md = new MarkdownIt()

export default {
  name: "ContentPage",
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
  methods: {
    mdToHtml(mdHtml) {
      return md.render(mdHtml)
    },
  },
}
</script>

<style scoped>
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
</style>
