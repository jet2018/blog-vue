<template>
  <div class="mr-3">
    <h5>Sponsors and subscriptions</h5>
    <!-- subscriptions -->
    <div class="p-shadow-4 card">
      <h4 class="p-card-title p-2">#subscriptions</h4>
      <span class="text-center"
        >To subscribe/unsubscribe to our newletter, enter an unsuscribed/a
        subscribed email respectively below.</span
      >
      <div class="card-body">
        <form class="form" @submit.prevent="Subscriber">
          <v-text-field
            v-model="email"
            type="email"
            label="Enter you email"
          ></v-text-field>
          <Button
            type="submit"
            icon="pi pi-send"
            iconPos="right"
            label="Subscribe or Unsubscribe"
          />
        </form>
      </div>
    </div>

    <!-- <hr> -->
    <!-- sponsors -->
    <div class="p-shadow-4 card mt-3">
      <h4 class="p-card-title p-2">#sponsors</h4>
      <div v-for="(sponsor, index) in sponsors" :key="index">
        <div class="border-top pt-1">
          <b-media>
            <template #aside>
              <!-- <img :src="" width="50" alt="sponsor.sponsor_name"> -->
              <Avatar
                :image="sponsor.sponsor_logo"
                size="large"
                shape="circle"
              />
            </template>

            <h6 v-text="sponsor.sponsor_name"></h6>
            <p v-text="sponsor.short_bio"></p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>
      </div>
      <div class="card-footer text-center">
        <router-link to="/all" class="">View all</router-link>
      </div>
    </div>

    <!-- authors -->
    <div class="p-shadow-4 card mt-3">
      <h4 class="p-card-title p-2">#top-authors</h4>
      <div v-for="author in authors" :key="author.id">
        <div class="border-top pt-1">
          <b-media>
            <template #aside>
              <!-- <img :src="" width="50" alt="sponsor.sponsor_name"> -->
              <Avatar :image="author.dp" size="large" shape="circle" />
            </template>

            <h6 class="text-capitalize" v-text="author.current_user"></h6>
            <p v-text="author.short_bio"></p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>
      </div>
      <div class="card-footer text-center">
        <router-link to="/all" class="">View all</router-link>
      </div>
    </div>

    <!-- authors -->
    <div class="p-shadow-4 card mt-3">
      <h4 class="p-card-title p-2">#top-stories</h4>
      <div v-for="story in recents" :key="story.id">
        <div class="border-top pt-1">
          <b-media>
            <template #aside>
              <!-- <img :src="" width="50" alt="sponsor.sponsor_name"> -->
              <Avatar
                :image="story.introductory_file"
                size="large"
                shape="circle"
              />
            </template>

            <h6 class="text-capitalize" v-text="story.title"></h6>
            <!-- <p v-text="author.short_bio"></p> -->

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>
      </div>
      <div class="card-footer text-center">
        <router-link to="/all" class="">Go to stories</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/axios";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import images from "@/config";
// import InputText from "primevue/inputtext"
export default {
  name: "Sponsors",
  components: {
    // InputText
    Avatar,
    Button,
  },
  data() {
    return {
      sponsors: null,
      image: images.images,
      authors: null,
      email: null,
      recents: null,
      subscribers: null,
    };
  },
  methods: {
    async fetchSponsors() {
      const response = await axios.get("blog/sponsors/brief/");
      this.sponsors = response.data;
    },
    async fetchRecents() {
      const response = await axios.get("blog/articles/brief/");
      this.recents = response.data;
    },
    async fetchauthors() {
      const response = await axios.get("blog/authors/brief/");
      this.authors = response.data;
    },

    async Subscriber() {
      const response = await axios.post("blog/subscribe/", {
        email: this.email,
      });
      if (response.data.message) {
        this.$toasted.show(response.data.message, { duration: 7000 });
        this.email = "";
      }
    },
  },

  computed: {
    user() {
      return this.$store.state.user || null;
    },
  },

  mounted() {
    this.fetchSponsors();
    this.fetchRecents();
    this.fetchauthors();
  },
};
</script>