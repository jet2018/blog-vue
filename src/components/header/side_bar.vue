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
      <h6><span class="pi pi-fw pi-book"></span> Our Topics</h6>
      <b-list-group-item v-for="item in items" :key="item.id">
        <sideBar v-bind="item" />
      </b-list-group-item>
    </b-list-group>
    <hr />
    <div>
      <h6><span class="pi pi-fw pi-comments"></span> Contact us now</h6>
      <div class="card">
        <p class="px-2 pt-2" v-if="user">
          Hey <span class="text-capitalize">{{ user.username }}</span
          >, want to reach us, enter you message below, we shall receive it and
          respond back to you.
        </p>
        <p class="px-2 pt-2" v-else>
          Hey, got something you want to share with us? Finish up the form below
          to send us your message.
        </p>
        <Button
          @click="GoToContactUs"
          class="btn-user mb-1 mx-2 text-center px-auto"
          iconPos="right"
          >Click to contact us now</Button
        >
      </div>
    </div>
    <!-- subscribe -->
  </div>
</template>

<script>
import sideBar from "./sideBar_links";
import axios from "@/axios";
import Button from "primevue/button";
// import ContactUs from "../contactUs.vue";
export default {
  name: "side_bar",
  components: {
    sideBar,
    Button,
    // ContactUs,
  },
  data() {
    return {
      items: null,
      email: null,
      body: null,
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
    GoToContactUs() {
      return this.$router.push({ name: "Contact" });
    },
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

