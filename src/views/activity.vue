<template>
  <div>
    <h4>Author activity</h4>
    <!-- three top cards -->
    <v-row>
      <v-col cols="4" class="text-center my-1 border bg-light border-light">
        <h6>Total articles</h6>
        <strong>{{ articles.length }}</strong>
      </v-col>
      <v-col cols="4" class="text-center my-1 border bg-light border-light">
        <h6>Published articles</h6>
        <strong>{{ published.length }}</strong>
      </v-col>
      <v-col cols="4" class="text-center my-1 border bg-light border-light">
        <h6>Draft articles</h6>
        <strong>{{ drafts.length }}</strong>
      </v-col>
    </v-row>
    <!-- end three top cards -->

    <v-card-title>
      Articles
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :loading="loading"
      loading-text="Obtaining your articles... Please wait"
      :headers="headers"
      :items="articles"
      :search="search"
    >
      <template v-slot:item.actions="{ item }">
        <!-- <v-icon  class="mr-1" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon large @click="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon small class="mr-1" v-if="item.is_draft" @click="publish(item)">
          mdi-publish
        </v-icon>-->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="primary" dark v-bind="attrs" v-on="on"
              >mdi-menu-down</v-icon
            >
          </template>
          <v-list>
            <!-- go to delete -->
            <v-list-item @click="deleteItem(item)">
              <v-list-item-title> Delete </v-list-item-title>
              <v-icon right>mdi-delete</v-icon>
            </v-list-item>
            <!--end go to delete -->

            <!-- go to edit -->
            <v-list-item @click="editItem(item)">
              <v-list-item-title> Update </v-list-item-title>
              <v-icon right>mdi-update</v-icon>
            </v-list-item>
            <!--end go to edit -->

            <!-- go to publish -->
            <v-list-item v-if="item.is_draft" @click="publishItem(item)">
              <v-list-item-title> Publish </v-list-item-title>
              <v-icon right>mdi-publish</v-icon>
            </v-list-item>
            <!--end go to publish -->
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "activity",
  data() {
    return {
      articles: null,
      published: null,
      drafts: null,
      loading: true,
      search: "",
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: true,
          value: "title",
        },
        {
          text: "Upvotes",
          align: "start",
          sortable: true,
          value: "total_upvotes",
        },
        {
          text: "Downvotes",
          align: "start",
          sortable: true,
          value: "total_downvotes",
        },
        {
          text: "Published",
          align: "start",
          sortable: true,
          value: "is_draft",
        },
        {
          text: "Comments",
          align: "start",
          sortable: true,
          value: "total_comments",
        },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    token() {
      return this.$store.state.access || null;
    },
  },

  methods: {
    async fetchArticles() {
      const response = await axios.get("blog/articles/activity", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.loading = false;
      this.articles = response.data;
      this.published = this.articles.filter((el) => el.is_draft == false);
      this.drafts = this.articles.filter((el) => el.is_draft == true);
    },

    editItem(item) {
      alert(item.id);
    },
    publishItem(item) {
      alert(item.id);
    },
    async deleteItem(item) {
      this.$toasted.show(
        "Are you sure you want to delete this article, the process is irrreversible.",
        {
          action: [
            {
              text: "Am aware",
              onClick: async (e, toastObject) => {
                const response = await axios.delete(
                  `blog/article/${item.id}/delete`,
                  {
                    headers: {
                      Authorization: `Bearer ${this.token}`,
                    },
                  }
                );

                if (response.data == "") {
                  let index = this.articles.indexOf(item);
                  this.articles.splice(index, 1);
                }
                toastObject.goAway(0);
              },
            },
            {
              text: "Cancel",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          ],
        }
      );
    },
  },

  mounted() {
    this.fetchArticles();
  },
};
</script>