<template>
  <div>
    <center v-if="loading" class="mt-5">
      <vue-loaders-ball-beat
        color="blue"
        class="mt-5"
        scale="2"
      ></vue-loaders-ball-beat>
    </center>
    <v-row v-else>
      <v-col v-for="author in authors" md="4" :key="author.id">
        <Author v-bind="author" v-on:resetFollowing="RefetchAuthors" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "@/axios";
import Author from "./author";
export default {
  props: {
    mini: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  name: "Authors",
  components: {
    Author,
  },
  data() {
    return {
      authors: null,
      loading: true,
    };
  },
  methods: {
    async fetchAuthors() {
      let response = null;
      response = await axios.get("blog/authors/");

      this.authors = response.data;
      this.loading = false;
    },

    RefetchAuthors() {
      this.fetchAuthors();
    },
  },

  mounted() {
    this.fetchAuthors();
  },
};
</script>