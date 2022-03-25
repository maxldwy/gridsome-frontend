<!--
 * @Author: 王越
 * @Date: 2022-03-18 17:21:14
 * @LastEditTime: 2022-03-25 11:14:36
 * @LastEditors: 王越
 * @Description:
-->
<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">学习使我快乐</h1>
        <h2 class="hero-subtitle">
         {{general.title}}</br>
         {{general.subtitle}}
        </h2>
        <video controls autoplay muted>
          <source :src="general.cover.url  | getImageFullPath" type="video/mp4">
        </video>
      </div>
      <div class="projects">
        <div
          v-for="edge in $page.post.edges"
          :key="edge.node.id"
          class="project"
        >
          <g-link :to="edge.node.path" class="project-link"
            >
            <g-image
              v-if="edge.node.cover"
              :src="edge.node.cover.url | getImageFullPath"
               width="100%"
                class="thumbnail g-image g-image--lazy g-image--loading"
            ></g-image>
            <h3 class="project-title">{{ edge.node.title }}</h3>
            <div class="categories">
              <span v-for="tag in edge.node.tags" class="category">{{
                tag.title
              }}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link
            v-for="edge in $page.newPost.edges"
            :key="edge.node.id"
            :to="edge.node.path"
            class="journal"
            ><h3 class="journal-title">
              {{ edge.node.title }}
            </h3></g-link
          >
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  post:allWyStrapiPost(perPage: 4, page: 1) @paginate {
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
  newPost:allWyStrapiPost(perPage: 4, page: 2) @paginate {
    edges{
      node{
        id
        title
        path
      }
    }
  }
  allWyStrapiGeneral{
    edges{
      node{
        title
        subtitle
        cover{
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  name:'homePage',
  metaInfo: {
    title: "home",
  },
  computed:{
    general(){
      return this.$page.allWyStrapiGeneral.edges[0].node
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
