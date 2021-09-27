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
      <v-col v-for="reader in readers" md="4" :key="reader.id">
        <reader v-bind="reader" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "@/axios";
import reader from "@/components/reader";
export default {
  name: "FullReaders",
  components: {
    reader,
  },
  data() {
    return {
      readers: null,
      loading: true,
    };
  },
  methods: {
    async fetchReaders() {
      let response = null;
      response = await axios.get("blog/authors/all-users/");

      this.readers = response.data;
      this.loading = false;
    },
  },

  mounted() {
    this.fetchReaders();
  },
};
</script>