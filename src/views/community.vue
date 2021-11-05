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
    <hr />
    <div>
      <v-row>
        <v-col v-for="author in authors" md="4" :key="author.id">
          <Author v-bind="author" v-on:resetFollowing="RefetchAuthors" />
        </v-col>
      </v-row>
    </div>
    <hr />

    <!-- /authors -->
    <h5>
      Readers
      <router-link to="/readers" class="float-end"
        >View all
        <v-icon color="primary">mdi-arrow-right-circle</v-icon></router-link
      >
    </h5>
    <hr />
    <div>
      <v-row>
        <v-col v-for="reader in readers" md="4" :key="reader.id">
          <Reader v-bind="reader" />
        </v-col>
      </v-row>
    </div>
    <hr />
    <h5>
      Sponsors
      <router-link to="/sponsors" class="float-end"
        >View all
        <v-icon color="primary">mdi-arrow-right-circle</v-icon></router-link
      >
    </h5>
    <hr />
    <div>
      <v-row>
        <v-col v-for="sponsor in sponsors" md="4" :key="sponsor.id">
          <sponsor v-bind="sponsor" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Author from "@/components/author";
import Reader from "@/components/reader";
import sponsor from "@/components/sponsor";
import axios from "@/axios";

export default {
  components: {
    Author,
    Reader,
    sponsor,
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
      const response_sponsors = await axios.get("blog/community/top/sponsors");
      this.authors = response.data;
      this.readers = response_readers.data;
      this.sponsors = response_sponsors.data;
      // this.loading = false;
    },

    async RefetchAuthors() {
      const response = await axios.get("blog/community/top/authors");
      this.authors = response.data;
    },
  },

  mounted() {
    this.fetchAuthors();
  },
};
</script>
