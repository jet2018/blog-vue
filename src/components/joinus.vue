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
  <atEditor v-model="value" editorStyle="height: 320px">
	<template #toolbar>
		<span class="ql-formats">
			<button class="ql-bold"></button>
			<button class="ql-italic"></button>
			<button class="ql-underline"></button>
			<button class="ql-blockquote"></button>
			<button class="ql-code-block"></button>
		</span>
	</template>
</atEditor>
  </section>
</template>

<script>
import atEditor from './ateditor';
export default {
  components:{
    atEditor
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
