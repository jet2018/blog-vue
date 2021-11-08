<template>
  <div>
    <v-btn :color="color" @click="like">
      <v-icon left> mdi-thumb-down </v-icon>
      {{ total_likes }}
    </v-btn>
  </div>
</template>
<script>
import axios from "@/axios";
export default {
  name: "DeslikeButton",

  props: {
    total_likes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Array,
      default: null,
    },
    slug: {
      type: String,
      default: "",
    },
  },

  computed: {
    token() {
      return this.$store.state.access || null;
    },
    user() {
      return this.$store.state.user || null;
    },
    color() {
      return this.downvotes.includes(this.user.user_id) ? "dark" : "success";
    },
  },

  methods: {
    async like() {
      try {
        const response = await axios.get(`blog/${this.slug}/unlike`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.data.success) {
          this.$emit("changelikes", {
            total_likes: response.data.total_likes,
            slug: this.slug,
          });
        } else {
          this.$toasted.error(response.data.error, {
            theme: "warning",
            position: "top-center",
            duration: 5000,
          });
        }
      } catch (error) {
        this.$toasted.show(error.response.data.message, {
          theme: "danger",
          position: "top-center",
          duration: 5000,
        });
      }
    },
  },
};
</script>