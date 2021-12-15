<template>
  <div>
    <h1>Create your article below</h1>
    <div>
      <v-form
        @submit.prevent="createArticle"
        method="POST"
        enctype="multipart/form-data"
      >
        <div>
          <div v-if="upload_image_url">
            <v-img
              :src="upload_image_url"
              class="m-2 img-fluid"
              width="auto"
              style="max-height: 20rem"
            >
              <v-btn
                @click="removeImage"
                title="Remove image"
                fab
                class="float-end"
                small
                color="purple"
              >
                <v-icon dark color="#fff">mdi-delete</v-icon>
              </v-btn>
            </v-img>
          </div>
          <div v-else>
            <v-btn
              class="text-center py-2 px-2 mt-2"
              @click="triggerUpload"
              small
              color="info"
            >
              <v-icon>mdi-cloud-upload </v-icon> Attach a cover photo
            </v-btn>
            <input
              type="file"
              ref="file"
              hidden
              accept="image/*"
              @change="onFileChange"
            />
          </div>
        </div>
        <v-text-field
          v-model="title"
          class="h3"
          placeholder="Title..."
          :rules="[(v) => !!v || 'Title is required']"
          clearable
          hint="Precise and self-descriptive title"
        ></v-text-field>
        <mavon-editor
          v-model="body"
          :toolbars="toolbars"
          placeholder="Start writing your article body..."
          language="en"
          html="true"
          codeStyle="dracula"
          spellcheck="true"
          style="min-height: 500px"
        />

        <v-select
          hint="This will determine the color your article will be displayed in."
          placeholder="Classify your article"
          v-model="blog_color"
          :items="items"
          clearable
          :filter="true"
        ></v-select>

        <MultiSelect
          v-if="all_categories.length > 0"
          v-model="categories"
          class="w-100"
          @change="populatesubs"
          label="Article category"
          :options="all_categories"
          :filter="true"
          optionLabel="category_name"
          optionValue="id"
          placeholder="Select atleast one category"
          display="chip"
          scrollHeight="10"
          appendTo="below"
        />

        <MultiSelect
          v-if="sub_categories.length > 0"
          class="w-100"
          v-model="sub_categories_selected"
          label="Add sub categories"
          :options="sub_categories"
          optionLabel="sub_category_name"
          optionValue="id"
          placeholder="Select any sub-category"
          display="chip"
          scrollHeight="10"
          appendTo="below"
        />

        <v-text-field
          type="number"
          v-model="schedule_to"
          prepend-inner-icon="mdi-timer"
          hint="Number of days your article will take to go live(optional)"
          clearable
          placeholder="Schedule for (days)"
        ></v-text-field>

        <div class="mt-5 bg-light p-2">
          <v-btn
            type="submit"
            bottom
            color="success"
            right
            class="float-end ml-2 text-capitalize"
            >Publish article</v-btn
          >
          <v-btn
            type="button"
            class="float-end text-capitalize"
            color="primary"
            bottom
            right
            @click="saveDraft"
            >Save as draft</v-btn
          >
          <v-btn type="button" @click="resetForm" bottom left>Reset</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import MultiSelect from "primevue/multiselect";
import axios from "@/axios";
export default {
  name: "createArticle",
  components: { MultiSelect },
  data() {
    return {
      body: "",
      upload_image_url: "",
      upload_image_link: null,
      is_draft: false,
      items: [
        { text: "Warning or caution", value: "r" },
        { text: "Informative or educative", value: "i" },
        { text: "Just a sharing", value: "s" },
      ],
      all_categories: [],
      schedule_to: null,
      blog_color: "",
      title: "",
      categories: [],
      sub_categories: [],
      sub_categories_selected: [],

      // editor toolbar
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: true,
        /* 1.3.5 */
        undo: true,
        redo: true,
        trash: true,
        save: true,
        /* 1.4.2 */
        navigation: true,
        /* 2.1.8 */
        alignleft: true,
        aligncenter: true,
        alignright: true,
        /* 2.2.1 */
        subfield: true,
        preview: true,
      },
    };
  },

  methods: {
    getCategories() {
      axios
        .get("blog/categories")
        .then((response) => {
          this.all_categories = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // create an article
    createArticle() {
      this.$toasted.info("Uploading...", { duration: 3000 });

      if (this.body == "") {
        this.$toasted.error("Are you submitting an empty article?", {
          duration: 5000,
        });
      } else {
        const fd = new FormData();
        if (this.upload_image_url) {
          fd.append(
            "introductory_file",
            this.upload_image_link,
            this.upload_image_link.name
          );
        }
        fd.append("title", this.title);
        fd.append("body", this.body);
        fd.append("blog_color", this.blog_color);
        fd.append("categories", this.categories);
        fd.append("schedule_to", this.schedule_to ? this.schedule_to : 0);
        alert(this.schedule_to);
        fd.append("sub_categories", this.sub_categories_selected);
        fd.append("is_draft", this.is_draft);
        console.log(fd);
        axios
          .post("blog/create/", fd, {
            headers: {
              Authorization: `Bearer ${this.$store.state.access}`,
            },
          })
          .then((response) => {
            console.log(response);
            this.$toasted.success(response.data.message, {
              duration: 5000,
            });
            if (response.data.blog.is_draft) {
              this.$router.push("/");
            } else {
              this.$router.push("/");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    saveDraft() {
      this.is_draft = true;
      this.createArticle();
    },

    resetForm() {
      let cf = confirm(
        "You are about to lose all the content in your form, Are you sure you want to do this?"
      );
      if (cf) {
        this.title = "";
        this.body = "";
        this.removeImage();
        this.categories = [];
        this.sub_categories_selected = [];
        this.blog_color = "";
        this.schedule_to = 0;
      }
    },

    populatesubs() {
      this.categories.forEach((category) => {
        this.all_categories.filter((cat) => {
          if (cat.id == category) {
            cat.sub_category.forEach((sub) => {
              if (!this.sub_categories.includes(sub)) {
                this.sub_categories.push(sub);
              }
            });
          }
        });
      });

      console.log(this.sub_categories);
    },

    onFileChange(event) {
      this.upload_image_link = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.upload_image_url = event.target.result;
      };
      reader.readAsDataURL(this.upload_image_link);
    },
    // trigger click event on the file input
    triggerUpload() {
      this.$refs.file.click();
    },

    // removing an image
    removeImage: function () {
      this.upload_image_link = null;
      this.upload_image_url = "";
    },
  },

  mounted() {
    this.getCategories();
  },
};
</script>
