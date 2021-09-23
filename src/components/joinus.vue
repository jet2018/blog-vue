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
        <v-btn absolute right bottom dark color="primary">Click to join</v-btn>
      </v-img>
    </v-card>
    <h2 class="mt-2">Why join us?</h2>
<Editor/>
  </section>
</template>

<script>
import atEditor from "./ateditor.vue"
import Editor from "primevue/editor"
export default {
  components:{
    Editor
  },
  name: "joinus",
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user")) || null;
    },
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
