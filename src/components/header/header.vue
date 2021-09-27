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
            class="p-mr-2 d-none d-sm-inline-block"
          />
          <img
            @click="GoHome"
            alt="logo"
            src="@/assets/favicon.png"
            height="40"
            class="p-mr-2 d-inline-block d-sm-none"
          />
        </template>
        <template #end class="">
          <InputText
            placeholder="Search"
            class="d-sm-inline-block d-none"
            type="text"
          />
          &nbsp;
          <router-link
            class="d-sm-inline-block d-none"
            v-if="!user"
            :to="{ name: 'Login' }"
            >Login</router-link
          >
          &nbsp;
          <Button
            @click="GoToRegister"
            v-if="!user"
            class="d-sm-inline-block"
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
          label: "Community",
          icon: "pi pi-fw pi-user",
          to: "community",
        },
        {
          label: "Sponsor us",
          icon: "pi pi-fw pi-euro",
          to: "/sponsor",
        },
        {
          label: "Become an author",
          icon: "pi pi-fw pi-user-edit",
          to: "/join",
          visible: () => (this.user && this.user.is_author ? false : true),
        },
        {
          label: "Write an article",
          icon: "pi pi-fw pi-user-edit",
          to: "/write",
          visible: () => (this.user && this.user.is_author ? true : false),
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