<template>
	<div><h6 v-text="'Articles about '+$route.params.name" ></h6>
		<div v-for="article in articles" :key="article.id">
			<briefArticle v-bind="article"/>
		</div>
	</div>
</template>

<script >
import axios from '@/axios'
import briefArticle from '@/components/brief_article'
export default {
components:{
	briefArticle
},
data () {
  return {
    articles:null
  };
},
	name: 'categorical',
	methods:{
		async FilterCategories(){
			try{
			const response = await axios.get(`blog/articles?search=${this.$route.params.name}`)
			console.log(response.data)
			this.articles = response.data
		}catch(error){
			this.$toasted.error(error.message, {duration:5000})
		}
		}
	},

	mounted(){
		this.FilterCategories()
	}
}

</script>