<template>
  <div class="border border-info p-2">
    <v-card height="100px" width="250" :img="sponsor_logo" hover elevation="12">
    </v-card>
    <h6 class="text-center mt-1">{{ sponsor_name }}</h6>

    <p class="text-center">{{ short_bio }}</p>
    <hr />
    <small>
      <i>
        Sponsored
        <timeago
          :datetime="sponsor_from"
          class="pr-1"
          :auto-update="60"
        ></timeago> </i
    ></small>
  </div>
</template>
<script>
export default {
  props: {
    sponsor_name: {
      type: String,
      default: "",
      required: false,
    },
    sponsor_logo: {
      type: String,
      default: "",
      required: false,
    },
    short_bio: {
      type: String,
      default: "",
      required: false,
    },
    sponsor_from: {
      type: String,
      default: "",
      required: false,
    },
    renewal: {
      type: String,
      default: "",
      required: false,
    },
    amount: {
      type: Number,
      default: 0.0,
      required: false,
    },
    slug: {
      type: String,
      default: "",
      required: false,
    },
  },
  name: "sponsor",
};
</script>