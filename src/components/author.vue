<template>
  <div>
    <v-card height="auto" width="300">
      <div @click="userprofile">
        <center>
          <v-avatar size="120" class="m-1 p-1"
            ><v-img :src="profile_pik"></v-img
          ></v-avatar>
        </center>
        <h6
          v-text="current_user"
          class="text-center px-1 text-truncate text-capitalize"
        ></h6>
        <center>
          <span
            v-text="profession"
            class="text-center px-1 text-truncate text-muted"
          ></span>
          <br />
          <span
            v-text="location"
            class="text-center text-truncate px-1 text-muted"
          ></span>
        </center>
      </div>
      <Follow
        class="bg-info"
        v-bind:id="id"
        v-on:followedcallback="resetFollowers"
        v-bind:followers="followers"
      />
    </v-card>
  </div>
</template>
<script>
import Follow from "./FollowButton";
export default {
  components: { Follow },
  props: {
    profile_pik: {
      type: String,
      default: null,
      required: null,
    },
    current_user: {
      type: String,
      default: null,
      required: null,
    },
    profession: {
      type: String,
      default: null,
      required: null,
    },
    location: {
      type: String,
      default: null,
      required: null,
    },
    id: {
      type: Number,
      default: null,
      required: true,
    },
    followers: {
      type: Array,
      required: false,
    },
  },
  name: "Author",
  methods: {
    resetFollowers(follow) {
      this.$emit("resetFollowing", follow);
    },
    userprofile() {
      alert(this.id);
    },
  },
};
</script>