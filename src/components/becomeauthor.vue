<template>
  <div>
    <h5>Create your author profile.</h5>
    <form action="">
      <v-textarea
        spellcheck="true"
        v-model="short_bio"
        placeholder="Write something about yourself"
        style="resize: none"
        outlined
        prepend-inner-icon="mdi-bio"
        auto-grow
        name="input-7-4"
        label="Short bio(a brief introduction)."
      ></v-textarea>
      <v-text-field
        prepend-icon="mdi-google-maps"
        clearable
        light
        placeholder="Kampala, Uganda"
        label="Enter your location by city, country"
        type="text"
        name="address"
        v-model="location"
      ></v-text-field>

      <v-text-field
        prepend-icon="mdi-professional-hexagon"
        clearable
        light
        placeholder="If student, please write it as '{course}' student at '{univesity}'"
        label="What's your current profession"
        type="text"
        name="profession"
        v-model="profession"
      ></v-text-field>

      <v-text-field
        prepend-icon="mdi-google-maps"
        clearable
        light
        placeholder="Kampala, Uganda"
        label="Enter your location by city, country"
        type="text"
        name="address"
        v-model="location"
      ></v-text-field>

      <v-checkbox
        v-model="employed"
        :label="`Are you employed?: ${employed.toString()}`"
      ></v-checkbox>

      <v-checkbox
        v-if="!employed"
        v-model="seeking_job"
        :label="`Are you seeking for a job?: ${seeking_job.toString()}`"
      ></v-checkbox>

      <v-text-field
        v-if="employed"
        prepend-icon="mdi-account-box"
        clearable
        light
        placeholder="Please locate the company name and its location"
        label="Where are you employed"
        type="text"
        name="place_of_employment"
        v-model="place_of_employment"
      ></v-text-field>
      <!-- stopped here! -->
      <v-input type="number" v-if="employed"></v-input>

      <v-file-input
        :rules="rules"
        v-model="dp"
        accept=".png, .jpeg, .jpg"
        placeholder="Pick an image"
        prepend-icon="mdi-camera"
        label="Profile image"
      ></v-file-input>
    </form>
  </div>
</template>
<script>
export default {
  name: "becomeauthor",
  data() {
    return {
      employed: false,
      seeking_job: false,
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Image size should be less than 2 MB!",
      ],
    };
  },
};
</script>
