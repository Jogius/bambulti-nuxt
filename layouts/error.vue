<template>
  <v-flex class="text-center">
    <div id="parallax" />
    <v-icon x-large>mdi-emoticon-sad-outline</v-icon>
    <h1 v-text="error.statusCode === 404 ? pageNotFound : otherError" />
    <v-btn x-large icon to="/"><v-icon x-large>mdi-home</v-icon></v-btn>
  </v-flex>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Error 404: Seite nicht gefunden',
      otherError: 'Ein Fehler ist aufgetreten',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
#parallax {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  opacity: 0.35;
  background-repeat: repeat;
  background-image: url('~assets/img/background_pattern.png');
  overflow-y: hidden;
}
</style>
