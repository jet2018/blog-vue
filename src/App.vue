<template>
  <v-app>
    <!-- the header section -->
    <my_header />

    <v-main class="container-fluid">
      <v-row col-12>
        <!-- the sidebar section -->
        <v-col lg="3" class="d-md-block d-none" xl="3">
          <side_bar class="w-100" />
        </v-col>
        <v-col md="8" class="mt-5" lg="6" xl="6" sm="8" xs="12">
          <router-view />
        </v-col>
        <v-col md="4" sm="4" lg="3" xl="3" class="mt-5 d-sm-block d-none">
          <Sponsors />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import side_bar from "@/components/header/side_bar.vue";
import my_header from "@/components/header/header.vue";
import Sponsors from "@/components/Sponsors.vue";
export default {
  components: {
    side_bar,
    my_header,
    Sponsors,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
