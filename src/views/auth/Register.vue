<template>
  <div class="pt-4 h-100 border-none">
    <center>
      <img src="@/assets/mainlogo.png" class="img-sm" width="200" />

      <!-- <Steps :model="items" /> -->
      <form class="mx-auto p-shadow-2" @submit.prevent="signup">
        <div class="p-5 pt-4 p-d-block mx-auto">
          <div class="mt-3">
            <span class="p-input-icon-right p-float-label">
              <InputText
                id="username"
                required
                type="text"
                v-model="username"
              />
              <i class="pi pi-user" />
              <label for="username">Username</label>
            </span>
          </div>
          <div class="mt-3">
            <span class="p-input-icon-right p-float-label">
              <InputText
                id="first_name"
                required
                type="text"
                v-model="first_name"
              />
              <i class="pi pi-user" />
              <label for="first_name">First name</label>
            </span>
          </div>
          <div class="mt-3">
            <span class="p-input-icon-right p-float-label">
              <InputText
                id="last_name"
                required
                type="text"
                v-model="last_name"
              />
              <i class="pi pi-user" />
              <label for="last_name">Last name</label>
            </span>
          </div>
          <div class="mt-3">
            <span class="p-input-icon-right p-float-label">
              <InputText id="email" required type="email" v-model="email" />
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
          <div class="mt-2">
            <Password
              required
              v-model="password2"
              placeholder="Confirm password"
              toggleMask
            >
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
            type="submit"
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
import jwt_decode from "jwt-decode";
import InputText from "primevue/inputtext";
import axios from "@/axios";
import Divider from "primevue/divider";
export default {
  methods: {
    GoHome() {
      this.$router.push({ name: "Home" });
    },
    async signup() {
      if (this.username.length < 3) {
        this.$toasted.error("Username is invalid", { duration: 5000 });
        return false;
      } else if (this.first_name.length < 2) {
        this.$toasted.error("First name is still invalid", { duration: 5000 });
        return false;
      } else if (this.last_name.length < 2) {
        this.$toasted.error("Last name is still invalid", { duration: 5000 });
        return false;
      } else if (this.email.length < 2) {
        this.$toasted.error("Email is still invalid", { duration: 5000 });
        return false;
      } else if (this.password != this.password2) {
        this.$toasted.error("The two passwords are not matching", {
          duration: 5000,
        });
        return false;
      }

      const context = {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2,
        first_name: this.first_name,
        last_name: this.last_name,
      };

      const response = await axios.post("register/", context);
      if (response.data.error)
        this.$toasted.show(response.data.error, { duration: 5000 });
      else if (response.data.message)
        this.$toasted.show(response.data.message, { duration: 5000 });
      const LOG_IN = await axios.post("login/", {
        username: response.data.username,
        password: response.data.password,
      });
      const payload = LOG_IN.data;
      const access_token = payload.access;
      const refresh_token = payload.refresh;
      const decoded = JSON.stringify(jwt_decode(access_token));

      localStorage.setItem("user", decoded);
      localStorage.setItem("refresh", refresh_token);
      localStorage.setItem("access", access_token);

      this.$store.commit("set", ["access", access_token]);
      this.$store.commit("set", ["refresh", refresh_token]);
      this.$store.commit("set", ["user", decoded]);
      window.location.href = "/";
    },
  },
  components: {
    Password,
    InputText,
    Button,
    Divider,
  },
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
    };
  },
};
</script>