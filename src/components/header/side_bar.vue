<template>
  <div class="ml-5 p-4">
    <div class="card p-3 mb-2">
      <h5 >#about-us</h5>
      <strong class="text-danger">Eas<span class="text-warning">t</span><span class="text-success">alks</span><span class="text-dark"> community is a non-profit community that aims to bridge communication loops in East Africa and Africa in general.</span></strong> 
        <span>It focuses on discussions that majorly solve east african problems in various categories. Incase, there is a missing category below, please contact us!</span>
    </div>
    <hr>
    <b-list-group class="bg-none">
      <h6>Our Topics</h6>
      <b-list-group-item v-for="item in items" :key="item.id">
        <sideBar v-bind="item"/>
      </b-list-group-item>
    </b-list-group>
    <hr />
    <!-- subscribe -->
  </div>
</template>

<script>
  import sideBar from "./sideBar_links";
  import axios from '@/axios'
  export default {
    name: "side_bar",
    components: {
      sideBar,
    },
    data() {
      return {
        items: null,
      };
    },

    methods:{
      async fetchCategories(){
        const response = await axios.get('blog/categories')
        this.items = response.data
      }
    },

    mounted(){
      this.fetchCategories()
    }
  };
</script>

