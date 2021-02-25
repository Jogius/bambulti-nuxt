<template>
  <v-container>
    <div id="parallax" />
    <v-container class="vertical-element">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-flex class="text-center">
            <v-img
              contain
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
      v-for="(element, i) in elements"
      :key="i"
      class="vertical-element"
    >
      <v-row
        v-if="$vuetify.breakpoint.smAndDown"
        justify="center"
        align="center"
      >
        <v-col cols="12">
          <v-img
            contain
            max-width="500"
            class="image mx-auto"
            :class="I % 2 == 0 ? 'slide-' : '6'"
            alt="Bambultea-Flask"
            :src="element.img"
          />
        </v-col>
        <v-col cols="12">
          <v-flex class="text-center">
            <h1>{{ element.title }}</h1>
            <v-divider />
            <p>
              {{ element.text }}
            </p>
          </v-flex>
        </v-col>
      </v-row>
      <v-container v-else>
        <v-row v-if="i % 2 == 0" justify="center" align="center">
          <v-col cols="6">
            <v-flex class="text-center">
              <h1 class="slide-left">{{ element.title }}</h1>
              <v-divider class="slide-up" />
              <p class="slide-right">
                {{ element.text }}
              </p>
            </v-flex>
          </v-col>
          <v-col cols="6">
            <v-img
              contain
              max-width="500"
              class="image mx-auto slide-left"
              :class="I % 2 == 0 ? 'slide-' : '6'"
              alt="Bambultea-Flask"
              :src="element.img"
            />
          </v-col>
        </v-row>
        <v-row v-else justify="center" align="center">
          <v-col cols="6">
            <v-img
              contain
              max-width="500"
              class="image mx-auto slide-right"
              :class="I % 2 == 0 ? 'slide-' : '6'"
              alt="Bambultea-Flask"
              :src="element.img"
            />
          </v-col>
          <v-col cols="6">
            <v-flex class="text-center">
              <h1 class="slide-left">{{ element.title }}</h1>
              <v-divider class="slide-up" />
              <p class="slide-right">
                {{ element.text }}
              </p>
            </v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Scrollreveal from 'scrollreveal'
export default {
  data() {
    return {
      elements: [
        {
          title: 'Die Bambultea Flask',
          text:
            'Unser erstes Produkt war die Bambultea-Flask, eine Thermosflasche aus Edelstahl und echtem Bambus mit 500ml Fassungsvermögen, Teesieb und zwei süßen Babypandas als Aufdruck.',
          img: 'img/bambultea-flask.jpg',
        },
        {
          title: 'Über uns',
          text:
            'Wir sind das Bambulti-Team, eine neunköpfige Gruppe aus Schülern des F.-F.-Runge Gymnasiums in Oranienburg.',
          img: 'img/team.jpg',
        },
        {
          title: 'Das Projekt',
          text:
            'Geleitet wird das Projekt von JUNIOR gGmbH. Auf Bundesebene wird JUNIOR durch das Bundesministerium für Wirtschaft und Energie, das Institut der deutschen Wirtschaft, Gesamtmetall, die AXA, die Deloitte-Stiftung, AT&T und die Citigroup unterstützt.',
          img: 'img/junior-logo.png',
        },
      ],
      parallax: null,
    }
  },
  head() {
    return {
      title: 'Startseite',
    }
  },
  mounted() {
    if (!this.$vuetify.breakpoint.smAndDown) {
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
      this.parallax = document.querySelector('#parallax')
      window.addEventListener('scroll', () => {
        this.parallax.style.transform = `translateY(${-window.scrollY * 0.3}px)`
      })
    }
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
.Logo {
  border-radius: 50%;
  pointer-events: none;
}
.image {
  border-radius: 15px;
  pointer-events: none;
}
.vertical-element {
  width: 100vw;
  max-width: 100%;
  margin: 10vh 0;
}
</style>
