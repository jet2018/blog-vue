<template>
  <v-app>
    <my_header />

    <v-main>
      <v-row cols="12">
        <v-col md="3" style="left: 0%; right: 99%" class="mr-0 w-100"
          ><side_bar />
        </v-col>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import side_bar from "@/components/header/side_bar.vue";
import my_header from "@/components/header/header.vue";
export default {
  components: {
    side_bar,
    my_header,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
