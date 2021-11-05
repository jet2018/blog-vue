<template>
  <div>
    <Button
      :label="FollowText"
      class="btn-block border-none"
      v-bind:class="bg_color"
      :icon="icon"
      iconPos="left"
      @click="Follow"
    />
  </div>
</template>
<script>
import Button from "primevue/button";
import axios from "@/axios";
export default {
  data() {
    return {
      icon: "pi pi-bell",
    };
  },
  props: {
    followers: {
      type: Array,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  components: { Button },
  name: "Follow",
  computed: {
    token() {
      return this.$store.state.access || null;
    },
    user() {
      return this.$store.state.user || null;
    },
    FollowText() {
      return this.followers.includes(this.user.user_id)
        ? "Following"
        : "Follow";
    },
    bg_color() {
      return this.followers.includes(this.user.user_id)
        ? "bg-dark"
        : "bg-danger";
    },
  },

  methods: {
    Follow() {
      if (!this.token)
        return this.$toasted.error("Login first to follow this author", {
          duration: 5000,
        });
      axios
        .get(`blog/authors/follow/${this.id}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((res) => {
          if (res.data.success) {
            this.$toasted.show(res.data.success, { duration: 5000 });
          } else if (res.data.error) {
            this.$toasted.show(res.data.error, { duration: 5000 });
          }
          this.$emit("followedcallback", { followers: res.data.followers });
        })
        .catch((error) => this.$toasted.error(error, { duration: 5000 }));
    },
  },

  mounted() {},
};
</script>