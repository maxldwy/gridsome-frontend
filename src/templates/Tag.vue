<!--
 * @Author: 王越
 * @Date: 2022-03-24 21:53:44
 * @LastEditTime: 2022-03-25 10:28:20
 * @LastEditors: 王越
 * @Description:
-->
<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          {{ $page.tag.title }}
        </h1>
      </div>
    </div>
    <g-link
      v-for="post in $page.tag.posts"
      :key="post.id"
      :to="'/content/' + post.id"
      class="journal-post"
    >
      <div class="container journal">
        <p class="journal-excerpt">
          {{ post.title }}
        </p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query($id:ID!){
  tag:wyStrapiTag(id:$id){
    title
    path
    posts{
      id
      title
    }
  }
}
</page-query>

<script>
export default {
  name: "TagPage",
  metaInfo() {
    return {
      title: this.$page.tag.title,
    }
  },
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style scoped>
.journal-header {
  color: #333;
}
</style>
