<template>
  <v-card class="container">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.introductory_file"
    >
      <v-card-title>{{ article.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

    <div class="text--primary container" v-html="article.body"></div>

    <v-card-actions>
      <v-btn color="orange" text> Share </v-btn>

      <v-btn color="orange" text> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from "@/axios";
export default {
  data() {
    return {
      article: null,
    };
  },
  methods: {
    async getArticle() {
      const response = await axios.get(
        "blog/article/" + this.$route.params.slug + "/"
      );
      this.article = response.data;
    },
  },
  name: "single",
  //   before

  mounted() {
    this.getArticle();
  },
};
</script>

<style scoped>
.image {
  max-width: 100% !important;
}
</style>