<template>
  <v-app fluid>
    <Toolbar />
    <v-main>
      <v-container>
        <!-- <Preloader v-if="isLoading" /> -->
        <Nuxt />
      </v-container>
    </v-main>
    <FixedBtn />
    <v-footer :absolute="!fixed" app>
      <FootherComponent />
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isLoading: true, // page loading
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style scoped></style>