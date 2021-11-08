<template>
  <div>
    <v-btn
      :color="color"
      @click="SaveArticle"
      small
      fab
      elevation="12"
      title="Save for later"
      right
      class="float-end"
      ><v-icon>mdi-bookmark</v-icon></v-btn
    >
  </div>
</template>
<script>
import axios from "@/axios";
export default {
  name: "SaveForLater",
  props: {
    color: {
      type: String,
      default: "primary",
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
  },

  methods: {
    async SaveArticle() {
      try {
        const response = await axios.get(`blog/articles/save/${this.slug}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.data.success) {
          this.$toasted.show(response.data.success, {
            type: "success",
            duration: 5000,
          });
          console.log(response.data);
          this.$emit("saved", response.data.bookmarked);
        } else {
          this.$toasted.show(response.data.error, {
            type: "error",
            duration: 5000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>