<template>
  <div class="mt-5 h1">
    <v-card title="Hello world"> Hello world</v-card>
    hejksdfhlsdfjh
  </div>
</template>

<script>
export default {
  name: "community",
  beforeEnter: (to, from, next) => {
    alert("Hello world");
    next();
  },
};
</script>
