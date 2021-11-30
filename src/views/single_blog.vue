<template>
  <v-card class="container">
    <!-- {{ article }} -->
    <h3
      v-bind:class="['d-inline-block  text-' + article.blog_color]"
      v-html="article.title"
    ></h3>
    <!--<Chip
        v-bind:class="['text-capitalize text-light bg-' + article.blog_color]"
        :label="'By ' + article.full_name + ': ' + article.title"
        :image="article.poster_image"
      />-->
    <div>
      <span
        ><router-link
          v-for="(cat, index) in article.category"
          :key="index"
          to="#"
          v-bind:class="['text-' + article.blog_color]"
          v-text="'#' + cat.category_name + ' |'"
          icon="pi pi-trash" /></span
      >&nbsp;
      <span>
        <v-chip
          x-small
          v-for="(cat, index) in article.sub_category"
          :key="index"
          :color="'bg-' + article.blog_color"
          to="#"
          dark
        >
          <span :class="'pi ' + cat.icon"></span>{{ cat.sub_category_name }}
        </v-chip>
      </span>
      <span class="ml-5">
        <small class="text-light text-sm float-end">
          <timeago
            v-bind:class="['text-' + article.blog_color]"
            :datetime="article.posted_on"
            class="pr-1"
            :auto-update="60"
          ></timeago>
        </small>
      </span>
    </div>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.introductory_file"
    />

    <v-card-subtitle class="mb-2">
      <v-row>
        <LikeButton
          v-bind:upvotes="article.upvotes"
          v-bind:total_likes="article.total_upvotes"
          v-bind:slug="article.slug"
          v-on:changelikes="ChangeLikes"
        />
        &nbsp;
        <DeslikeButton
          v-bind:downvotes="article.downvotes"
          v-bind:total_likes="article.total_downvotes"
          v-bind:slug="article.slug"
          v-on:changelikes="ChangeLikes"
        />
        <v-spacer></v-spacer>
        <v-btn @click="addTopComment = !addTopComment" class="">
          <v-icon left>mdi-comment</v-icon> Add a comment</v-btn
        >
      </v-row>
    </v-card-subtitle>
    <v-card-text v-show="addTopComment">
      <div v-if="is_authenticated">
        <commentField v-bind:slug="article.slug" />
      </div>

      <div v-else>
        <v-card
          color="info"
          elevation="12"
          flat
          class="p-2 text-center text-light"
          >You are not logged in yet! Please login to unlock this action
          <v-card-actions
            ><Button
              @click="Login"
              icon="pi pi-lock-open"
              class="mx-auto"
              label="Login"
              iconPos="right"
            >
            </Button
          ></v-card-actions>
        </v-card>
      </div>
    </v-card-text>
    <v-card-text class="text--primary container"
      ><vue-markdown html="true">{{ article.body }}</vue-markdown>
    </v-card-text>
    <!-- 
    <v-card-actions>
     
      <commentField />
    </v-card-actions> -->
    <h6>Join the discusion</h6>
    <div v-if="is_authenticated">
      <commentField v-bind:slug="article.slug" />
    </div>
    <div v-else>
      <v-card
        color="info"
        elevation="12"
        flat
        class="p-2 text-center text-light"
        >You are not logged in yet! Please login to unlock this action
        <v-card-actions
          ><Button
            @click="Login"
            icon="pi pi-lock-open"
            class="mx-auto"
            label="Login"
            iconPos="right"
          >
          </Button
        ></v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>
<script>
import axios from "@/axios";
import config from "@/config";
// import Chip from "primevue/chip";
import Button from "primevue/button";
import commentField from "@/components/commentField";
import LikeButton from "@/components/LikeButton";
import DeslikeButton from "@/components/DeslikeButton";
import VueMarkdown from "vue-markdown";
export default {
  name: "single",

  data() {
    return {
      article: null,
      addTopComment: false,
      image: config.images,
    };
  },

  components: {
    VueMarkdown,
    commentField,
    // Chip,
    Button,
    LikeButton,
    DeslikeButton,
  },

  computed: {
    is_authenticated() {
      return this.$store.state.access ? true : false;
    },
  },

  methods: {
    Login() {
      this.$router.push({ name: "Login", params: { next: this.$route.path } });
    },

    async getArticle() {
      const response = await axios.get(
        "blog/article/" + this.$route.params.slug + "/"
      );
      this.article = response.data;
    },
  },

  mounted() {
    this.getArticle();
  },
};
</script>

