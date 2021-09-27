<template>
  <div>
    <!-- authors -->
    <h5>
      Authors
      <router-link to="/authors" class="float-end"
        >View all
        <v-icon color="primary">mdi-arrow-right-circle</v-icon></router-link
      >
    </h5>
    <v-row>
      <v-col v-for="author in authors" md="4" :key="author.id">
        <Author v-bind="author" />
      </v-col>
    </v-row>
    <!-- /authors -->
    <h5>
      Readers
      <router-link to="/authors" class="float-end"
        >View all
        <v-icon color="primary">mdi-arrow-right-circle</v-icon></router-link
      >
    </h5>

    <h5>
      Sponsors
      <router-link to="/authors" class="float-end"
        >View all
        <v-icon color="primary">mdi-arrow-right-circle</v-icon></router-link
      >
    </h5>
  </div>
</template>

<script>
import Author from "@/components/author";
import axios from "@/axios";

export default {
  components: {
    Author,
  },
  name: "community",

  data() {
    return {
      authors: null,
      sponsors: null,
      readers: null,
      // loading: true,
    };
  },

  methods: {
    async fetchAuthors() {
      const response = await axios.get("blog/community/top/authors");
      const response_readers = await axios.get("blog/community/top/readers");
      const response_sponsors = await axios.get("blog/community/top/authors");
      this.authors = response.data;
      this.readers = response_readers.data;
      this.sponsors = response_sponsors.data;
      // this.loading = false;
      console.log(this.authors);
    },
  },

  mounted() {
    this.fetchAuthors();
  },
};
</script>
