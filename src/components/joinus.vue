<template>
  <section>
    <v-card class="">
      <v-img
        src="@/assets/coolbg.png"
        height="auto"
        width="100%"
        alt=""
        srcset=""
      >
        <v-btn
          :to="{ name: 'Join' }"
          v-if="user && user.is_author"
          absolute
          right
          bottom
          dark
          color="primary"
          >Start writing articles</v-btn
        >
        <v-btn
          v-else
          :to="{ name: 'AuthorJoin' }"
          absolute
          right
          bottom
          dark
          color="primary"
          >Click to become an author</v-btn
        >
      </v-img>
    </v-card>
    <h2 class="mt-2">Why join us?</h2>
    <Authors />
  </section>
</template>

<script>
import Authors from "./authors.vue";
export default {
  components: {
    Authors,
  },
  name: "joinus",
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user")) || null;
    },
  },
  beforeEnter: (to, from, next) => {
    if (this.user.is_author) {
      this.$router.push("/write");
    } else {
      next();
    }
  },
  methods: {
    checkAuth() {
      if (this.user == null)
        this.$router.push({
          name: "Login",
          params: { next: this.$route.path },
        });
    },
  },
  mounted() {
    this.checkAuth();
  },
};
</script>
