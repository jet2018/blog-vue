<template>
  <div>
    <v-card height="200" width="250px">
      <center>
        <v-avatar size="120" class="m-1 p-1"
          ><v-img :src="profile_pik"></v-img
        ></v-avatar>
      </center>
      <h6
        v-text="first_name + ' ' + last_name + '(' + username + ')'"
        class="text-center px-1 text-truncate text-capitalize"
      ></h6>
      <center>
        <span
          v-text="email"
          class="text-center px-1 text-truncate text-muted"
        ></span>
      </center>
      <!-- <v-btn block class="mx-auto" color="info">Follow</v-btn> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Reader",
  props: {
    first_name: {
      type: String,
      default: "",
      required: false,
    },
    last_name: {
      type: String,
      default: "",
      required: false,
    },
    email: {
      type: String,
      default: "",
      required: false,
    },
    username: {
      type: String,
      default: "",
      required: false,
    },
    profile_pik: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>