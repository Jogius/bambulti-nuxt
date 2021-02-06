<template>
  <v-app
    dark
    :style="{
      background: this.$vuetify.theme.themes[
        this.$vuetify.theme.dark ? 'dark' : 'light'
      ].background,
    }"
  >
    <div id="parallax" />
    <!-- <v-container
      class="loading"
      :style="{
        background: this.$vuetify.theme.themes[
          this.$vuetify.theme.dark ? 'dark' : 'light'
        ].background,
      }"
    >
      <v-flex class="fixed-center">
        <h1>Herzlich Willkommen</h1>
        <h2>auf bambulti.de</h2>
      </v-flex>
    </v-container> -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
      color="secondary"
      class="transparency"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in headerItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-btn
          icon
          x-large
          class="variant-button"
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon>
            mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
          </v-icon>
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      fixed
      app
      color="transparent"
      elevate-on-scroll
      collapse-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-switch v-model="$vuetify.theme.dark" inset hide-details></v-switch>
    </v-app-bar>

    <v-main>
      <v-container>
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
      drawer: false,
      headerItems: [
        {
          icon: 'mdi-home',
          title: 'Willkommen',
          to: '/',
        },
      ],
      miniVariant: false,
      parallax: null,
    }
  },
  mounted() {
    this.parallax = document.querySelector('#parallax')
    window.addEventListener('scroll', () => {
      this.parallax.style.transform = `translateY(${-window.scrollY * 0.5}px)`
    })
  },
}
</script>

<style scoped>
#parallax {
  position: fixed;
  top: 0;
  left: 0;
  height: 300vh;
  width: 100vw;
  max-width: 100%;
  opacity: 0.35;
  background-repeat: repeat;
  background-image: url('../static/img/background_pattern.png');
  overflow-y: hidden;
}

/* .loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  z-index: 6;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  animation: fadeOut 4s;
}
.fixed-center {
  position: fixed;
  width: 30vw;
  height: 30vh;
  top: 50%;
  left: 50%;
  margin-top: -15vh;
  margin-left: -15vw;
} */
.variant-button {
  position: absolute;
  right: 2px;
  bottom: 2px;
}
.transparency {
  opacity: 0.8;
}

/* @keyframes fadeOut {
  0% {
    opacity: 1;
    visibility: visible;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
} */
</style>
