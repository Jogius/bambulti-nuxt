<template>
  <v-container>
    <div id="parallax"></div>
    <v-flex class="text-center">
      <v-icon x-large>mdi-emoticon-excited-outline</v-icon>
      <h1>Erfolgreich!</h1>
      <h2>Vielen Dank für Ihre Bestellung!</h2>
    </v-flex>
  </v-container>
</template>

<script>
export default {}
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
