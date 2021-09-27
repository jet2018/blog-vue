<template>
  <div>
    <v-card>
      <center>
        <v-avatar max-width="120" size="100" class="m-1 p-1"
          ><v-img :src="profile_pik"></v-img
        ></v-avatar>
      </center>
      <h4
        v-text="current_user"
        class="text-center text-truncate text-capitalize"
      ></h4>
      <center>
        <span v-text="profession" class="text-center text-muted"></span>
        <br />
        <span v-text="location" class="text-center mx-auto text-muted"></span>
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