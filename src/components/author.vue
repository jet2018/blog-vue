<template>
  <div>
    <v-card height="auto" width="250px">
      <center>
        <v-avatar size="120" class="m-1 p-1"
          ><v-img :src="profile_pik"></v-img
        ></v-avatar>
      </center>
      <h6
        v-text="current_user"
        class="text-center mx-auto text-truncate text-capitalize"
      ></h6>
      <center>
        <span
          v-text="profession"
          class="text-center mx-auto text-truncate text-muted"
        ></span>
        <br />
        <span
          v-text="location"
          class="text-center text-truncate mx-auto text-muted"
        ></span>
      </center>
      <v-btn block class="mx-auto" color="info">Follow</v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
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
  },
  name: "Author",
};
</script>