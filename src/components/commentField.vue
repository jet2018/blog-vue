<template>
  <div>
    <v-textarea
      prepend-icon=""
      prepend-inner-icon="mdi-comment"
      auto-grow
      clearable
      light
      dense
      hint="Press Ctrl + enter to submit"
      persistent-hint
      filled
      label="Add your comment"
      outlined
    ></v-textarea>
    <Button label="Send" iconPos="right" icon="pi pi-send"></Button>
  </div>
</template>
<script>
import Button from "primevue/button";
export default {
  components: {
    Button,
  },
  name: "commentField",
};
</script>