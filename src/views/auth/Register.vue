<template>
  <div class="pt-4 h-100 border-none">
    <center>
      <img src="@/assets/mainlogo.png" class="img-sm" width="200" />

      <h1 class="text-center">
        Welcome to
        <span style="cursor: pointer" @click="GoHome" class="text-danger"
          >eas<span class="text-warning">t</span
          ><span class="text-success">alks</span></span
        >
      </h1>
      <!-- <Steps :model="items" /> -->
      <form class="mx-auto p-shadow-2">
        <div class="p-5 pt-4 p-d-block mx-auto">
          <div>
            <span class="p-input-icon-right p-float-label">
              <InputText id="username" type="text" v-model="username" />
              <i class="pi pi-user" />
              <label for="username">Username</label>
            </span>
          </div>
          <div class="mt-3">
            <span class="p-input-icon-right p-float-label">
              <InputText id="email" type="email" v-model="email" />
              <i class="pi pi-user-plus" />
              <label for="username">Email</label>
            </span>
          </div>
          <div class="mt-2">
            <Password v-model="password" placeholder="Password" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <Divider />
                <p class="p-mt-2">Suggestions</p>
                <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </Password>
          </div>
          <div></div>
          <hr />
          <Button
            iconPos="right"
            icon="pi pi-sign-in p-button-sm  p-button-raised p-button-rounded"
            label="Register"
          />
          <div class="p-d-inline-block">
            <router-link class="mr-3" :to="{ name: 'Login' }"
              >Login</router-link
            >
            ||
            <router-link class="ml-3" :to="{ name: 'Forgot' }"
              >Forgot Account</router-link
            >
          </div>
        </div>
      </form>
    </center>
  </div>
</template>
<script>
// import Steps from 'primevue/steps';
import Password from "primevue/password";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
export default {
  methods: {
    GoHome() {
      this.$router.push({ name: "Home" });
    },
  },
  components: {
    Password,
    InputText,
    Button,
  },
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>