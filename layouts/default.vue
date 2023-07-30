<template>
  <v-app>
    <Preloader v-if="isLoading" />
    <Toolbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

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
    // Simula el tiempo de carga de la página (eliminar esto en tu aplicación real)
    setTimeout(() => {
      this.isLoading = false; // Cuando la página haya cargado, ocultar el preloader
    }, 3000); // Tiempo de carga simulado de 3 segundos (puedes ajustarlo según tus necesidades)
  },
};
</script>
<style scoped></style>
