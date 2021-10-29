<template>
  <section>
    <img src="@/assets/contact_us.png" class="w-100" alt="" />
    <div>
      <h3>Why contact us?</h3>
      <p>
        We believe that for every successful communication, there should be some
        feedback, therefore, we expect feeedback from anything we communicate on
        this platform.
      </p>
      <p>There are various reasons we suspect you can base on to talk to us.</p>
      <ol>
        <li>Appreciation: Maybe you want to appreaciate our work</li>
        <li>
          Feature request:You can also tell which feature you feel is missing on
          this platform
        </li>
        <li>
          Report: Are you seeing anything here that is raising your suspicion?
          There is an author you work like to report to us? then that's the use
          of the section
        </li>

        <p>
          This list can never end, we are just giving you samples of reasons but
          for any reason you can talk to us please and we have a team ready to
          respond to your via your email. So let's do it!
        </p>
      </ol>

      <v-form @submit.prevent="ContactUs" class="border px-2">
        <v-text-field
          v-model="email"
          prepend-inner-icon="mdi-email"
          label="Email"
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-account"
          v-model="first_name"
          label="First name"
        ></v-text-field>
        <v-text-field
          v-model="last_name"
          prepend-inner-icon="mdi-account"
          label="Last name"
        ></v-text-field>
        <v-textarea
          rows="3"
          dense
          clearable
          filled
          v-model="message"
          prepend-inner-icon="mdi-message"
          no-resize
        ></v-textarea>
        <Button ripple="wave" class="btn-block mb-1" type="submit"
          >Send now</Button
        >
      </v-form>
    </div>
  </section>
</template>

<script>
import Button from "primevue/button";
import axios from "@/axios";
export default {
  name: "ContactUs",
  components: {
    Button,
  },
  data() {
    return {
      first_name: this.$store.state.user.first_name,
      last_name: this.$store.state.user.last_name,
      email: this.$store.state.user.email,
      message: "",
      // img: "/assets/coolbg.png",
    };
  },
  computed: {
    user() {
      return this.$store.state.user || null;
    },
  },

  methods: {
    async ContactUs() {
      var data = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        message: this.message,
      };

      try {
        const response = await axios.post("blog/contact_us/", data);
        response.data.success
          ? this.$toasted.show(response.data.success, { duration: 6000 })
          : this.$toasted.show(response.data.error, { duration: 6000 });

        if (response.data.success) {
          this.$router.push("/");
        }
      } catch (error) {
        this.$toasted.error(error, { duration: 6000 });
      }
    },
  },
};
</script>

<style>
</style>