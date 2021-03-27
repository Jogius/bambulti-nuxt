<template>
  <v-container>
    <div id="parallax" />
    <v-container v-if="$vuetify.breakpoint.smAndDown">
      <v-container
        v-for="(element, i) in elements"
        :key="i"
        class="vertical-element"
      >
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-img
              contain
              max-width="500"
              class="image mx-auto slide-down"
              :alt="element.alt"
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
      </v-container>
    </v-container>
    <v-container v-else id="content">
      <v-container
        v-for="(element, i) in elements"
        :key="i"
        class="horizontal-element text-center"
      >
        <v-img
          contain
          max-width="500"
          class="image mx-auto"
          :alt="element.alt"
          :src="element.img"
        />
        <h1>{{ element.title }}</h1>
        <v-divider />
        <p>{{ element.text }}</p>
      </v-container>
    </v-container>
    <div v-if="!$vuetify.breakpoint.smAndDown" id="scroller" />
  </v-container>
</template>

<script>
import Scrollreveal from 'scrollreveal'
export default {
  data() {
    return {
      elements: [
        {
          title: 'Die Flasche',
          text:
            'Die Bambultea Flask ist eine Thermosflasche mit 500ml Fassungsvermögen und großem Teesieb. Sie besteht zu 100% aus Bambus und Edelstahl.',
          img: 'img/bambultea-flask-detail.jpg',
          alt: 'Bambultea-Flask',
        },
        {
          title: 'Das Design',
          text:
            'Das Design der Flasche ist sehr minimalistisch gehalten. Dabei ist eine Variation unseres Logos auf dem Deckel sowie der Seite eingraviert. Die Vorlage wurde ebenfalls von unserem Marketingleiter Erik gestaltet.',
          img: 'img/druckvorlage.png',
          alt: 'Aufdruck Flasche',
        },
        {
          title: 'Die Produktion',
          text:
            'Produziert wird unsere Flasche von eco-drinkware, einem Flaschenproduzenten in Zheijiang, China. Eine Produktion in China erscheint vielleicht nicht intuitiv, hauptaugenmerk liegt bei uns allerdings auf den für die Produktion genutzten Materialien. Diese sind in China lokaler, der Transportfootprint ist dadurch also ähnlich.',
          img: 'img/werkzeug.png',
          alt: 'Werkzeugkasten',
        },
      ],
      parallax: null,
      content: null,
    }
  },
  head() {
    return {
      title: 'Bambultea-Flask',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Wir stellen vor: unser erstes Produkt, eine nachhaltige Thermosflasche.',
        },
      ],
    }
  },
  mounted() {
    if (!this.$vuetify.breakpoint.smAndDown) {
      Scrollreveal().reveal('.slide-down', {
        origin: 'top',
        delay: 200,
        distance: '150px',
        scale: 0.5,
      })

      this.parallax = document.querySelector('#parallax')
      this.content = document.querySelector('#content')
      window.addEventListener('scroll', () => {
        this.parallax.style.transform = `translateX(${-window.scrollY * 0.3}px)`
        this.content.style.transform = `translateX(${-window.scrollY * 0.8}px)`
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
  height: 100vh;
  width: 150vw;
  opacity: 0.35;
  background-repeat: repeat;
  background-image: url('../static/img/background_pattern.png');
  overflow-x: hidden;
}
#content {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 150vw;
  display: flex;
  flex-direction: row;
}
#scroller {
  height: 100vw;
}
.image {
  border-radius: 15px;
  pointer-events: none;
}
.horizontal-element {
  width: 30vw;
  position: relative;
  margin: auto 10vw;
}
</style>
