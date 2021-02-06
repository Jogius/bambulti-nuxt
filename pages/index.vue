<template>
  <v-container>
    <v-container class="fill-height fill-width">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-flex class="text-center">
            <v-img
              contain
              max-height="300"
              max-width="300"
              class="Logo mx-auto slide-up"
              alt="Bambulti Logo"
              src="img/logo.png"
            />
            <h1 class="slide-up">Bambulti</h1>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-if="$vuetify.breakpoint.smAndDown"
      class="fill-height fill-width"
    >
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-img
            contain
            :aspect-ratio="135 / 169"
            max-width="500"
            class="Bottle mx-auto"
            alt="Bambultea-Flask"
            src="img/bambultea-flask-detail.jpg"
          />
        </v-col>
        <v-col cols="12">
          <v-flex class="text-center">
            <h1>Die Bambultea-Flask</h1>
            <v-divider />
            <p>
              Unser erstes Produkt war die Bambultea-Flask, eine Thermosflasche
              aus Edelstahl und echtem Bambus mit 500ml Fassungsverm&ouml;gen,
              Teesieb und zwei s&uuml;&szlig;en Babypandas als Aufdruck.
            </p>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="fill-height fill-width">
      <v-row justify="center" align="center">
        <v-col cols="6">
          <v-flex class="text-center">
            <h1 class="slide-left">Die Bambultea-Flask</h1>
            <v-divider />
            <p class="slide-right">
              Unser erstes Produkt war die Bambultea-Flask, eine Thermosflasche
              aus Edelstahl und echtem Bambus mit 500ml Fassungsverm&ouml;gen,
              Teesieb und zwei s&uuml;&szlig;en Babypandas als Aufdruck.
            </p>
          </v-flex>
        </v-col>
        <v-col cols="6">
          <v-img
            contain
            :aspect-ratio="135 / 169"
            max-width="500"
            class="Bottle mx-auto slide-left"
            alt="Bambultea-Flask"
            src="img/bambultea-flask-detail.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="fill-height fill-width">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6">
          <v-img
            contain
            :aspect-ratio="1 / 1"
            max-width="500"
            class="Bottle mx-auto slide-right"
            alt="Bambulti Team"
            src="img/team.jpg"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-flex class="text-center">
            <h1 class="slide-right">&Uuml;ber uns</h1>
            <v-divider />
            <p class="slide-left">
              Wir sind das Bambulti-Team, eine neunk&ouml;pfige Gruppe aus
              Sch&uuml;lern des F.-F.-Runge Gymnasiums in Oranienburg.
            </p>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Scrollreveal from 'scrollreveal'
export default {
  mounted() {
    Scrollreveal().reveal('.slide-up', {
      origin: 'bottom',
      delay: 200,
      distance: '150px',
      scale: 0.5,
    })
    Scrollreveal().reveal('.slide-left', {
      origin: 'right',
      delay: 400,
      distance: '150px',
      opacity: 0,
      scale: 0.5,
    })
    Scrollreveal().reveal('.slide-right', {
      origin: 'left',
      delay: 400,
      distance: '150px',
      opacity: 0,
      scale: 0.5,
    })
  },
}
</script>

<style scoped>
.Logo {
  border-radius: 50%;
  pointer-events: none;
  margin-left: auto;
  margin-top: auto;
}
.Bottle {
  border-radius: 15px;
  pointer-events: none;
}
.fill-height {
  height: 90vh;
}
.fill-width {
  width: 80vw;
  max-width: 100%;
}
</style>
