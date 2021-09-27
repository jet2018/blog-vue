<template>
  <div>
    <center v-if="loading" class="mt-5">
      <vue-loaders-ball-beat
        color="blue"
        class="mt-5"
        scale="2"
      ></vue-loaders-ball-beat>
    </center>
    <v-row>
      <v-col v-for="sponsor in sponsors" md="4" :key="sponsor.id">
        <sponsor v-bind="sponsor" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "@/axios";
import sponsor from "@/components/sponsor";
export default {
  name: "FullSponsors",
  components: {
    sponsor,
  },
  data() {
    return {
      sponsors: null,
      loading: true,
    };
  },
  methods: {
    async fetchSponsors() {
      let response = null;
      response = await axios.get("blog/sponsors/");

      this.sponsors = response.data;
      this.loading = false;
    },
  },

  mounted() {
    this.fetchSponsors();
  },
};
</script>