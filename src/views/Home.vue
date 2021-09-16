<template>
  <div>
    <h5>Articles</h5>
    <center>
      <vue-loaders-ball-beat
        color="red"
        v-if="loading"
        scale="2"
      ></vue-loaders-ball-beat>
    </center>
    <div v-if="!loading">
      <briefArticle
        v-for="article in articles"
        :key="article.id"
        v-bind="article"
      />
    </div>
  </div>
</template>

<script>
import briefArticle from "../components/brief_article";
import axios from "@/axios";

export default {
  name: "Articles",
  data() {
    return {
      articles: null,
      loading: true,
    };
  },
  components: {
    briefArticle,
  },

  methods: {
    async getArticles() {
      const response = await axios.get("blog/articles");
      this.articles = response.data;
      this.loading = false;
    },
  },

  mounted() {
    this.getArticles();
  },
};
</script>
