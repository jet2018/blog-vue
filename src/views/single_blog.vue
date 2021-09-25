<template>
  <v-card class="container">
    <!-- {{ article }} -->
    <h5 v-bind:class="['text-' + article.blog_color]">{{ article.title }}</h5>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.introductory_file"
    >
      <v-card-text>
        <Chip
          v-bind:class="['text-capitalize text-light bg-' + article.blog_color]"
          :label="'By ' + article.full_name"
          :image="image + article.poster_image"
        />
      </v-card-text>
      <v-card-tools>
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
            <small class="text-light text-sm">
              <timeago
                v-bind:class="['text-' + article.blog_color]"
                :datetime="article.posted_on"
                class="pr-1"
                :auto-update="60"
              ></timeago>
            </small>
          </span>
        </div>
      </v-card-tools>
    </v-img>

    <v-card-subtitle class="pb-0">
      <Button
        @click="upVote"
        :label="article.total_downvotes"
        class="p-button-text"
        icon="pi pi-thumbs-up"
      />
      <Button
        @click="upVote"
        :label="article.total_downvotes"
        class="p-button-text"
        icon="pi pi-heart"
      />
      <Button
        @click="addTopComment = !addTopComment"
        label="Add a comment"
        class="p-button-text btn-sm float-end"
        icon="pi pi-comment"
      />
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
    <v-card-text
      class="text--primary container"
      v-html="article.body"
    ></v-card-text>
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
import Chip from "primevue/chip";
import Button from "primevue/button";
import commentField from "@/components/commentField";
export default {
  data() {
    return {
      article: null,
      addTopComment: false,
      image: config.images,
    };
  },
  components: {
    // truncate,
    commentField,
    Chip,
    Button,
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
      console.log(this.article);
    },

    async upVote() {
      alert("am here");
    },
  },
  name: "single",
  computed: {
    is_authenticated() {
      return this.$store.state.access ? true : false;
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>

<style scoped>
.image {
  max-width: 100% !important;
}
</style>