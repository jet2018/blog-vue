<template>
  <div class="pt-5 h-100 border-none">
    <center>
      <img src="@/assets/mainlogo.png" class="img-sm" width="200" />

      <h1 class="text-center">
        Welcome to
        <span style="cursor: pointer" @click="GoHome" class="text-danger"
          >eas<span class="text-warning">t</span
          ><span class="text-success">alks</span></span
        >
      </h1>
      <span class="alert">{{ message }}</span>
      <!-- <Steps :model="items" /> -->
      <form class="mx-auto p-shadow-2" @submit.prevent="Login">
        <div class="p-5 p-d-block mx-auto">
          <div>
            <span class="p-input-icon-right p-float-label">
              <InputText id="username" type="text" v-model="username" />
              <i class="pi pi-user" />
              <label for="username">Username</label>
            </span>
          </div>
          <div class="mt-2">
            <Password v-model="password" placeholder="Password" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <!-- <Divider /> -->
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
            type="submit"
            iconPos="right"
            icon="pi pi-sign-in p-button-sm  p-button-raised p-button-rounded"
            label="Login"
          />
          <div class="p-d-inline-block">
            <router-link class="mr-3" :to="{ name: 'Register' }"
              >Create account</router-link
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
import jwt_decode from "jwt-decode";
import axios from "@/axios";
export default {
  components: {
    Password,
    InputText,
    Button,
  },
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    // working on this
    GoHome() {
      this.$router.push({ name: "Home" });
    },

    async Login() {
      if (this.password.length < 1) {
        this.message = "Password is required";
        return false;
      } else if (this.username.length < 1) {
        this.message = "Username is required";
        return false;
      } else {
        this.message = "";
      }

      const content = {
        username: this.username,
        password: this.password,
      };

      try {
        const response = await axios.post("login/", content);
        // this.$store.commit("LOGIN", response.data);
        const payload = response.data;
        const access_token = payload.access;
        const refresh_token = payload.refresh;
        const decoded = JSON.stringify(jwt_decode(access_token));

        localStorage.setItem("user", decoded);
        localStorage.setItem("refresh", refresh_token);
        localStorage.setItem("access", access_token);

        this.$store.commit("set", ["access", access_token]);
        this.$store.commit("set", ["refresh", refresh_token]);
        this.$store.commit("set", ["user", decoded]);
        window.location.href = ".";
      } catch (error) {
        if (error.response) {
          this.$toasted.error(error.response.data.detail, { duration: 5000 });
        }
      }
    },
  },
};
</script>