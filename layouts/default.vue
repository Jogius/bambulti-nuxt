<template>
  <v-app
    dark
    :style="{
      background: this.$vuetify.theme.themes[
        this.$vuetify.theme.dark ? 'dark' : 'light'
      ].background,
    }"
  >
    <v-app-bar
      fixed
      app
      color="secondary"
      class="transparency"
      elevate-on-scroll
    >
      <v-container v-if="$vuetify.breakpoint.smAndDown">
        <v-app-bar-nav-icon
          v-for="(item, i) in headerItems"
          :key="i"
          :to="item.to"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-app-bar-nav-icon>
      </v-container>
      <v-container v-else>
        <v-btn
          v-for="(item, i) in headerItems"
          :key="i"
          :to="item.to"
          color="transparent"
          elevation="0"
        >
          <v-icon>{{ item.icon }}</v-icon
          >&nbsp;-&nbsp;{{ item.title }}
        </v-btn>
      </v-container>
      <v-spacer />
      <v-btn
        icon
        x-large
        href="https://www.instagram.com/bambulti_runge/"
        target="_blank"
        color="#C13584"
      >
        <v-icon large>mdi-instagram</v-icon>
      </v-btn>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        hide-details
        color="info"
      ></v-switch>
    </v-app-bar>

    <v-main>
      <v-container class="main-wrapper">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app color="accent" class="transparency" elevation="16">
      <v-btn icon small to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn small to="/impressum" color="transparent" elevation="0">
        &copy; {{ new Date().getFullYear() }} - <strong>Bambulti</strong>
      </v-btn>
      <v-spacer />
      <v-btn icon small href="mailto:kontakt@bambulti.de">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headerItems: [
        {
          to: '/',
          icon: 'mdi-home',
          title: 'Startseite',
        },
        {
          to: '/bambultea-flask',
          icon: 'mdi-bottle-wine-outline',
          title: 'Die Bambultea Flask',
        },
        {
          to: '/shop',
          icon: 'mdi-cart-outline',
          title: 'Shop',
        },
      ],
    }
  },
}
</script>

<style scoped>
.transparency {
  opacity: 0.8;
}
.main-wrapper {
  margin-top: 10vh;
}
</style>
