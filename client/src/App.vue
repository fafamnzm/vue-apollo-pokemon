<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="mr-8">
        <div :to="links[0].url" class="d-flex align-center">
          <!-- <v-btn replace="true" text :to="links[0].url"> -->
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
          <!-- </v-btn> -->
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text rounded>Theme</v-btn>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label} - navbar`"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>

    <v-content>
      <v-spacer></v-spacer>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary lighten-1" absolute app>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label} - footer`"
          :to="link.url"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.label }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text rounded class="my-2 white--text">
          {{ new Date().getFullYear() }} —
          <v-btn
            text
            rounded
            raised
            target="_blank"
            href="https://www.faramarz-monazami.com"
            class="my-2 white--text"
            >Developer's Page</v-btn
          >
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify Test Dashboard</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import ApolloExample from "./components/ApolloExample";

export default {
  name: "App",

  components: {
    // ApolloExample,
  },

  data: () => ({
    links: [
      { label: "Home", url: "/" },
      { label: "Pokemon", url: "/pokemon" },
      { label: "Dashboard", url: "/dashboard" },
      { label: "Login", url: "/login" },
      { label: "Signup", url: "/signup" },
      { label: "About", url: "/about" }
    ]
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "#aeddff"
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
