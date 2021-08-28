<template>
  <div class="card p-2 mb-2">
    <b-media left-align horizontal-align="center" class="mt-1">
      <template #aside>
        <b-img
          v-if="introductory_file"
          :src="introductory_file"
          width="150"
          alt="placeholder"
        ></b-img>
      </template>
      <small class="text-secondary">
        <Chip
          v-bind:class="['text-capitalize text-light ', 'bg-' + blog_color]"
          :label="'By ' + full_name"
          :image="image + poster_image" />
        <span class="float-right">
          Added
          <timeago
            :datetime="posted_on"
            class="pr-1"
            :auto-update="60"
          ></timeago>
          <Button
            class="rounded float-end"
            v-bind:class="'bg-' + blog_color"
            icon="pi pi-bookmark" /></span
      ></small>
      <router-link
        to="/"
        v-bind:class="['mt-0 mb-1 h5 d-block text-primary']"
        >{{ title }}</router-link
      >
      <div>
        <span
          ><router-link
            v-for="cat in category"
            :key="cat"
            to="#"
            v-text="'#' + cat + ' |'"
            icon="pi pi-trash" /></span
        >&nbsp;
        <span>
          <!-- <router-link
            class="text-sm text-info"
            :key="cat"
            to="#"
            v-html="'##' + cat + '&nbsp;'"
            icon="pi pi-trash"
          /> -->
          <v-chip
            x-small
            v-for="cat in sub_category"
            :key="cat"
            color="secondary"
            to="#"
            dark
          >
            {{ cat }}
          </v-chip>
        </span>
      </div>

      <!-- to be hidden to unauthenticated users -->
      <v-row cols="12">
        <v-col lg="12">
          <span class="p-buttonset">
            <Button
              :label="total_downvotes"
              class="p-button-text"
              icon="pi pi-thumbs-down"
            />
            <Button
              :label="total_upvotes"
              class="p-button-text"
              icon="pi pi-thumbs-up"
            />

            <Button
              v-if="total_comments > 0"
              :label="total_comments + ' comments'"
              class="p-button-text"
              icon="pi pi-comments"
            />
            <Button
              v-else
              label="Comment"
              class="p-button-text"
              icon="pi pi-comments"
            />
          </span>
        </v-col>
      </v-row>
    </b-media>
  </div>
</template>
<script>
// import truncate from 'vue-truncate-collapsed';
import Chip from "primevue/chip";
import Button from "primevue/button";
import config from "@/config";

export default {
  components: {
    // truncate,
    Button,
    Chip,
  },
  data() {
    return {
      image: config.images,
    };
  },
  name: "briefArticle",
  props: {
    blog_color: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    total_upvotes: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 0,
    },
    total_comments: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 0,
    },

    total_downvotes: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 0,
    },
    title: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    full_name: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    body: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    introductory_file: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    poster_image: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    category: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    sub_category: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    posted_on: {
      type: Date, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
  },
};
</script>