<template>
  <div>
    <div class="d-flex align-items-center min-vh-100">
      <b-row class="w-100 justify-content-center">
        <b-col md="6">
          <div class="w-100">
            <div class="clearfix">
              <h1 class="float-left display-3 mr-4">
                4<img
                  src="@/assets/favicon.png"
                  style="width: 40px"
                  alt=""
                  srcset=""
                />4
              </h1>
              <h4 class="pt-3">Oops! Page not found!</h4>
              <p class="text-muted">
                If you think might be a system error,
                <router-link class="" style="" :to="{ name: 'Contact' }"
                  >Contact&nbsp;us</router-link
                >
              </p>
            </div>

            <router-link
              :to="{ name: 'Home' }"
              class="btn-success mt-lg-5 btn btn-block"
            >
              <span class="lams-text-1">Back to home</span>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
};
</script>