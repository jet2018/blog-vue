<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="@/assets/mainlogo.png"
          height="40"
          class="p-mr-2"
        />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
        &nbsp;
        <router-link to="/login">Login</router-link>
        &nbsp;
        <Button label="Create account" :style="{ 'margin-left': '0 .5em' }" />
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
  watch: {},
  name: "my_header",
  components: {
    Menubar,
    InputText,
    Button,
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          to: "/home",
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