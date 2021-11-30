<template>
  <div class="card p-2 mb-2">
    <b-media left-align horizontal-align="center" class="mt-1">
      <template #aside>
        <b-img
          v-if="introductory_file"
          :src="introductory_file"
          width="150"
          height="150"
          alt="placeholder"
        ></b-img>
      </template>
      <small class="text-secondary">
        <Chip
          v-bind:class="['text-capitalize text-light ', 'bg-' + blog_color]"
          :label="'By ' + full_name"
          :image="poster_image"
        />
        <span class="float-end">
          Added
          <timeago
            :datetime="posted_on"
            class="pr-1"
            :auto-update="60"
          ></timeago>
          <SaveForLater
            v-if="!bookmarked"
            v-bind:color="blog_color"
            v-bind:slug="slug"
            v-on:saved="saved"
          />
          <v-btn
            v-else
            :color="blog_color"
            small
            fab
            elevation="12"
            title="Article saved"
            right
            class="float-end"
            ><v-icon>mdi-check</v-icon></v-btn
          >
        </span></small
      >
      <router-link
        :to="{ name: 'Single', params: { slug: slug } }"
        v-bind:class="['mt-0 mb-1 h5 d-block text-primary']"
        >{{ title }}</router-link
      >
      <div>
        <span
          ><router-link
            v-for="cat in category"
            :key="cat"
            to="#"
            v-text="'#' + cat.category_name + ' |'"
            icon="pi pi-trash" /></span
        >&nbsp;
        <span>
          <v-chip
            x-small
            v-for="cat in sub_category"
            :key="cat"
            color="secondary"
            to="#"
            dark
          >
            <i :class="'pi ' + cat.icon"></i>
            {{ cat.sub_category_name }}
          </v-chip>
        </span>
      </div>

      <!-- to be hidden to unauthenticated users -->
      <div class="ml-2">
        <LikeButton
          class="d-inline mr-1"
          v-bind:upvotes="upvotes"
          v-bind:total_likes="total_upvotes"
          v-bind:slug="slug"
          v-on:changelikes="ChangeLikes"
        />

        <DeslikeButton
          class="d-inline"
          v-bind:downvotes="downvotes"
          v-bind:total_likes="total_downvotes"
          v-bind:slug="slug"
          v-on:changelikes="ChangeLikes"
        />
        <span v-if="total_comments > 0">{{ total_comments }} commented</span>
      </div>
    </b-media>
  </div>
</template>
<script>
// import truncate from 'vue-truncate-collapsed';
import Chip from "primevue/chip";
// import Button from "primevue/button";
import config from "@/config";
// import commentField from "@/components/commentField";
import LikeButton from "@/components/LikeButton";
import DeslikeButton from "@/components/DeslikeButton";
import SaveForLater from "@/components/SaveForLater";
export default {
  name: "briefArticle",
  components: {
    // truncate,
    // Button,
    Chip,
    DeslikeButton,
    LikeButton,
    SaveForLater,
  },
  data() {
    return {
      image: config.images,
      bookmarked: false,
    };
  },

  computed: {
    user() {
      return this.$store.state.user || null;
    },
    token() {
      return this.$store.state.access || null;
    },
  }, // end of computed

  mounted() {
    this.watchBookmark();
  },
  methods: {
    async ChangeLikes(params) {
      await this.$emit("rechangelikes", params);
    },
    // markDownHtml(){
    //   return marked()
    // },
    watchBookmark() {
      return this.bookmarks.includes(this.user.id)
        ? (this.bookmarked = true)
        : (this.bookmarked = false);
    },
    saved(params) {
      alert(this.params);
      return (this.bookmarked = params);
    },
  },

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
    bookmarks: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    downvotes: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 0,
    },
    upvotes: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 0,
    },
    total_comments: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 0,
    },

    slug: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
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
      default: "",
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
      type: Array, // String, Number, Boolean, Function, Object, Array
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