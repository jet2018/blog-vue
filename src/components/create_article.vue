<template>
  <div>
    <h1>Create your article below</h1>
    <div>
      <v-form>
        <mavon-editor
          v-model="body"
          placeholder="Start writing your article body..."
          language="en"
          height="1000"
        />
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "createArticle",
  components: {},
  data() {
    return {
      body: "",
    };
  },
};
</script>