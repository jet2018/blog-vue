<template>
  <div>
    <div>
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
          <!-- {{ images }} -->
          <ImageProfile v-if="user" />
        </template>
      </Menubar>
    </div>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import ImageProfile from "./imageMenu";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

// import Avatar from "primevue/avatar";

export default {
  name: "my_header",
  data() {
    return {
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
          command: () => {
            this.user.is_author;
          },
        },
      ],
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  components: {
    Menubar,
    InputText,
    Button,
    ImageProfile,
    // Avatar,
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
};
</script>