<template>
  <div class="pt-5 h-100 border-none">
    <center>
      <img src="@/assets/mainlogo.png" class="img-sm" width="200" />

      <!-- <h1 class="text-center">Welcome to <span style="cursor: pointer;" @click="GoHome" class="text-danger">eas<span class="text-warning">t</span><span class="text-success">alks</span></span></h1> -->
      <p class="text-center">
        We understand staff happens and you may endup losing or forgetting your
        email, but don't freak out!! Enter your email you registered with and we
        shall help you out.
      </p>
      <!-- <Steps :model="items" /> -->
      <form class="mx-auto p-shadow-2">
        <div class="p-5 p-d-block mx-auto">
          <div>
            <span class="p-input-icon-right p-float-label">
              <InputText id="email" type="text" v-model="email" />
              <i class="pi pi-user" />
              <label for="email">Email</label>
            </span>
          </div>
          <hr />
          <Button
            iconPos="right"
            icon="pi pi-sign-in p-button-sm  p-button-raised p-button-rounded"
            label="Request email"
          />
          <div class="p-d-inline-block">
            <router-link class="mr-3" :to="{ name: 'Register' }"
              >Create account</router-link
            >
            ||
            <router-link class="ml-3" :to="{ name: 'Login' }"
              >Login</router-link
            >
          </div>
        </div>
      </form>
    </center>
  </div>
</template>
<script>
// import Steps from 'primevue/steps';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
export default {
  methods: {
    GoHome() {
      this.$router.push({ name: "Home" });
    },
  },
  components: {
    InputText,
    Button,
  },
  name: "Forgot",
  data() {
    return {
      email: "",
    };
  },
};
</script>