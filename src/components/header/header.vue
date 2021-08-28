<template>
  <div>
    <!-- {{ user }} -->
    <Menubar class="static-top" :model="items">
      <template #start>
        <img
          @click="GoHome"
          alt="logo"
          src="@/assets/mainlogo.png"
          height="40"
          class="p-mr-2"
        />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
        &nbsp;
        <router-link
          class="d-md-inline-block d-none"
          v-if="!user"
          :to="{ name: 'Login' }"
          >Login</router-link
        >
        &nbsp;
        <Button
          @click="GoToRegister"
          v-if="!user"
          class="d-md-inline-block d-none"
          label="Create account"
          :style="{ 'margin-left': '0 .5em' }"
        />

        <v-avatar v-if="user" size="36px" class="dropdown">
          <img
            alt="Avatar"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :src="images + user.image"
          />
        </v-avatar>
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
// import Avatar from "primevue/avatar";
import config from "@/config";
export default {
  name: "my_header",
  components: {
    Menubar,
    InputText,
    Button,
    // Avatar,
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    GoToRegister() {
      this.$router.push({ name: "Register" });
    },
    GoHome() {
      this.$router.push({ name: "Home" });
    },
    showMenu() {
      this.menu = !this.menu;
    },
  },
  data() {
    return {
      images: config.images,
      menu: true,
      items: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Contact us",
          icon: "pi pi-fw pi-comments",
          to: "/contact",
        },
        {
          label: "Community",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Authors",
              icon: "pi pi-fw pi-user-edit",
              to: "/authors",
            },
            {
              label: "Sponsors",
              icon: "pi pi-fw pi-users",
              to: "/sponsors",
            },
            {
              label: "Join us",
              icon: "pi pi-fw pi-user-plus",
              to: "/join",
            },
          ],
        },
        {
          label: "Sponsor us",
          icon: "pi pi-fw pi-euro",
          to: "/sponsor",
        },
        {
          label: "Become an author",
          icon: "pi pi-fw pi-user-edit",
          to: "/add",
        },
        // {
        //   label: "Quit",
        //   icon: "pi pi-fw pi-power-off",
        // },
      ],
    };
  },
};
</script>