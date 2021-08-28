<template>
  <div >
    <h5 >Articles</h5>
    <briefArticle v-for="article in articles" :key="article.id"  v-bind="article"/>
  </div>
</template>

<script>
  import briefArticle from "../components/brief_article";
  import axios from '@/axios'

  export default {
    name: "Articles",
    data(){
      return{
        articles:null
      }
    },
    components: {
      briefArticle,
    },

    methods:{
     async getArticles(){
      const response = await axios.get('blog/articles')
      this.articles = response.data
    }
  },

  mounted(){
    this.getArticles()
  }
};
</script>
