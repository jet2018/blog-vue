<template>
  <div class="d-inline-block">
    <div style="cursor: pointer">
      <v-avatar @click="toggle" v-if="user" size="36px">
        <img :src="images + user.image" />
      </v-avatar>
      &nbsp;
      <span @click="toggle" class="text-capitalize">{{ user.username }} </span>
    </div>
    <Menu ref="menu" :model="items" :popup="true" />
  </div>
</template>

<script>
import Menu from "primevue/menu";
import config from "@/config";

export default {
  name: "ImageProfile",
  components: {
    Menu,
  },
  data() {
    return {
      images: config.images,
      items: [
        {
          label: "Account",
          items: [
            { label: "Update", icon: "pi pi-fw pi-cog", to: "/options" },
            {
              label: "Author activity",
              icon: "pi pi-fw pi-user-edit",
              to: "/author",
              visible: () => (this.user && this.user.is_author ? true : false),
            },
            {
              label: "Sign Out",
              icon: "pi pi-fw pi-power-off",
              command: () => {
                this.logout();
              },
            },
          ],
        },
      ],
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    logout() {
      this.$store.commit("LOGOUT");
      window.location.href = ".";
    },
  },
};
</script>