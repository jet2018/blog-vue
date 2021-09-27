<template>
  <div>
    <Avatar :icon="'pi pi-fw ' + icon" size="small" shape="circle" />
    <span class="ml-3">{{ category_name }}</span>
    <!-- <span
      v-if="sub_category.length > 0"
      @click="LoadSubMenus"
      class="float-right px-2 text-light border-danger"
      v-bind:class="{ 'bg-secondary': bg_primary, 'bg-info': bg_info }"
      style="border-radius: 50px; cursor: pointer"
      v-text="arrows"
    ></span> -->
    <div v-if="sub_category.length > 0">
      <v-chip pill v-for="(cat, index) in sub_category" :key="index">
        <v-avatar left>
          <i :class="'pi ' + cat.icon"></i>
        </v-avatar>
        {{ cat.sub_category_name }}
      </v-chip>
    </div>
  </div>
</template>
<script>
import Avatar from "primevue/avatar";
// import AvatarGroup from 'primevue/avatargroup';
export default {
  name: "sideBar",
  components: {
    Avatar,
  },
  data() {
    return {
      arrows: ">>",
      bg_primary: true,
      bg_info: false,
    };
  },
  props: {
    category_name: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    icon: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
    sub_category: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
  },

  methods: {
    LoadSubMenus() {
      this.arrows == ">>" ? (this.arrows = "<<") : (this.arrows = ">>");
      this.bg_primary = !this.bg_primary;
      this.bg_info = !this.bg_info;
      return true;
    },
  },
};
</script>