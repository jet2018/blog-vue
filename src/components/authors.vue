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
        <v-card>
          <center>
            <v-avatar max-width="100" size="100" class="m-2"
              ><v-img :src="author.profile_pik"></v-img
            ></v-avatar>
          </center>
          <h4
            v-text="author.current_user"
            class="text-center text-truncate text-capitalize"
          ></h4>
          <center>
            <span
              v-text="author.profession"
              class="text-center text-muted"
            ></span>
            <br />
            <span
              v-text="author.location"
              class="text-center mx-auto text-muted"
            ></span>
          </center>
          <v-btn block class="mx-auto" color="info">Follow</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "@/axios";
export default {
  props: {
    mini: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  name: "Authors",
  data() {
    return {
      authors: null,
      loading: true,
    };
  },
  methods: {
    async fetchAuthors() {
      let response = null;
      this.mini
        ? (response = await axios.get("blog/authors/"))
        : (response = await axios.get("blog/authors/"));

      this.authors = response.data;
      this.loading = false;
    },
  },

  mounted() {
    this.fetchAuthors();
  },
};
</script>