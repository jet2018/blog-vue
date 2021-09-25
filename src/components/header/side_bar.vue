<template>
  <div class="ml-5 p-4">
    <div class="card p-3 mb-2">
      <h5>#about-us</h5>
      <strong class="text-danger"
        >African<span class="text-warning">t</span
        ><span class="text-success">alks</span
        ><span class="text-dark">
          community is a non-profit community that aims to bridge communication
          loops in Africa as a continent.</span
        ></strong
      >
      <span
        >It focuses on discussions that majorly solve African problems in
        various categories. Incase, there is a missing category below, please
        contact us!</span
      >
    </div>
    <hr />
    <b-list-group class="bg-none">
      <h6>Our Topics</h6>
      <b-list-group-item v-for="item in items" :key="item.id">
        <sideBar v-bind="item" />
      </b-list-group-item>
    </b-list-group>
    <hr />
    <div>
      <h6>Contact us now</h6>
      <div class="card" v-if="token">
        <p class="p-2">
          Hey <span class="text-capitalize">{{ user.username }}</span
          >, want to reach us, enter you message below, we shall receive it and
          respond back to you.
        </p>
        <v-form action="">
          <v-input
            v-model="email"
            label="Enter you email"
            append-icon="mdi-email"
          ></v-input>
        </v-form>
      </div>
    </div>
    <!-- subscribe -->
  </div>
</template>

<script>
import sideBar from "./sideBar_links";
import axios from "@/axios";
export default {
  name: "side_bar",
  components: {
    sideBar,
  },
  data() {
    return {
      items: null,
      email: "",
    };
  },

  computed: {
    user() {
      return this.$store.state.user || null;
    },
    token() {
      return this.$store.state.access || null;
    },
  },

  methods: {
    async fetchCategories() {
      const response = await axios.get("blog/categories/");
      this.items = response.data;
      console.log(this.items);
    },
  },

  mounted() {
    this.fetchCategories();
  },
};
</script>

