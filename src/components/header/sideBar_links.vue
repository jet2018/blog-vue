<template>
  <div>
    <router-link :to="{ name: 'Categorical', params: { name: category_name } }">
      <Avatar :icon="'pi pi-fw ' + icon" size="small" shape="circle" />
      <span class="ml-3">{{ category_name }}</span>
    </router-link>
    <v-menu top :offset-x="offset" v-if="sub_category.length > 0">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          x-small
          right
          class="float-end"
          v-bind="attrs"
          v-on="on"
        >
          >>
        </v-btn>
      </template>

      <v-list v-if="sub_category.length > 0">
        <v-list-item
          v-for="(item, index) in sub_category"
          :key="index"
          :to="{
            name: 'Categorical',
            params: { name: item.sub_category_name },
          }"
        >
          <v-list-item-title
            ><v-avatar left>
              <i :class="'pi ' + item.icon"></i>
            </v-avatar>
            {{ item.sub_category_name }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
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
      offset: null,
      bg_primary: true,
      bg_info: false,
    };
  },
  props: {
    category_name: {
      type: String,
      required: true,
      default: null,
    },
    icon: {
      type: String,
      required: true,
      default: null,
    },
    sub_category: {
      type: Array,
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