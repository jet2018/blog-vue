<template>
  <section>
    <div class="card" v-if="user">
      <p class="px-2 pt-2">
        Hey <span class="text-capitalize">{{ user.username }}</span
        >, want to reach us, enter you message below, we shall receive it and
        respond back to you.
      </p>
      <form action="" class="mx-auto">
        <input
          v-if="user.email"
          type="email"
          class="form-control mx-2 mb-1"
          style="width: 94%"
          v-model="user.email"
          readonly
          placeholder="Email"
        />
        <input
          v-else
          type="email"
          class="form-control mx-2 mb-1"
          style="width: 94%"
          v-model="email"
          placeholder="Email"
        />
      </form>
      <v-textarea
        class="mx-2"
        prepend-icon=""
        prepend-inner-icon="mdi-comment"
        auto-grow
        clearable
        light
        dense
        filled
        label="Enter your message here."
        outlined
      ></v-textarea>
    </div>

    <div v-else class="card p-2">
      <p>
        Hey, got something you want to share with us? Finish up the form below
        to send us your message.
      </p>
      <form action="" class="mx-auto">
        <input
          type="first_name"
          class="form-control mx-2 mb-1"
          style="width: 94%"
          v-model="first_name"
          placeholder="First name"
        />
        <input
          type="last_name"
          class="form-control mx-2 mb-1"
          style="width: 94%"
          v-model="last_name"
          placeholder="Last name"
        />
        <input
          type="email"
          class="form-control mx-2 mb-1"
          style="width: 94%"
          v-model="email"
          placeholder="Email"
        />
        <v-textarea
          class="mx-2"
          prepend-icon=""
          prepend-inner-icon="mdi-comment"
          auto-grow
          clearable
          light
          dense
          filled
          label="Enter your message here."
          outlined
        ></v-textarea>
        <v-btn block append-icon="mdi-send" outlined right>Submit</v-btn>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      // img: "/assets/coolbg.png",
    };
  },
};
</script>

<style>
</style>