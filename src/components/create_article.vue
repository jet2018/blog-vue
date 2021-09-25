<template>
  <div>
    <h1>Create your article below</h1>
    <atEditor v-model="value" editorStyle="height: 320px">
      <!-- <template #toolbar>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
        </span> 
      </template>-->
    </atEditor>
  </div>
</template>
<script>
import atEditor from "./ateditor";
export default {
  name: "createArticle",
  components: {
    atEditor,
  },
};
</script>