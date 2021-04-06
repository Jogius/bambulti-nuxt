<template>
  <v-container>
    <div id="parallax" />
    <v-row v-if="$vuetify.breakpoint.smAndDown" align="center" justify="center">
      <v-col cols="12">
        <v-carousel
          cycle
          continuous
          height="auto"
          class="product-image-carousel-mobile"
        >
          <v-carousel-item
            v-for="(element, i) in productImages"
            :key="i"
            :src="element.src"
            :alt="element.alt"
          />
        </v-carousel>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header color="primary">
              Informationen zum Produkt
            </v-expansion-panel-header>
            <v-expansion-panel-content color="primary">
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Material und Nutzungshinweise
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    Materialien:
                    <ul>
                      <li>Bambus</li>
                      <li>rostfreier Edelstahl</li>
                      <li>PVC-Kunststoff</li>
                      <li>Gummidichtungsring</li>
                    </ul>
                    <br />
                    Nutzungshinweise:
                    <ul>
                      <li>Vor dem ersten Gebrauch gründlich ausspülen</li>
                      <li>Reinigung nicht in der Spülmaschine</li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Maße
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    Höhe: 24,2cm <br />
                    Durchmesser: 6,7cm <br />
                    Volumen: 500ml
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Zertifikate
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    <ul>
                      <li>RoHS</li>
                      <li>FDA</li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Produktbeschreibung
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    Das erste Produkt unserer Schülerfirma Bambulti: die
                    Bambultea-Flask. Hierbei handelt es sich um eine
                    Thermosflasche, welche außen anstatt von Plastik mit
                    nachhaltigem Bambus beschichtet ist. Unsere Flasche besteht
                    neben Bambus aus rostfreien Edelstahl, PVC-Kunststoff und
                    einem Dichtungsring im Deckel. Aktuell produzieren wir
                    unsere Thermosflaschen in China. Das Produkt ist FDA (food
                    and drug administration) und RoHS (Restriction of (the use
                    of certain) Hazardous Substances in electrical and
                    electronic Equipment) getestet und enthält so keine
                    schädlichen Chemikalien. Für 20 Euro erhalten Sie unsere
                    Thermosflasche mit den Maßen von 24,2cm Höhe und einem
                    Durchmesser von 6,7cm. Ebenfalls ist interessant zu wissen,
                    dass das Füllvermögen von 500ml über 15h warmgehalten werden
                    kann. Nach dem Einfüllen eines heißen Getränkes sollte der
                    Inhalt mindestens eine halbe Stunde abgekühlen, um
                    Verbrennungen vorzubeugen. Nach dem Genießen des Inhaltes
                    aus unserer Thermosflasche sollte darauf geachtet werden,
                    dass die Flasche nicht im Geschirrspüler gesäubert werden
                    darf. Vor der ersten Benutzung der Flasche sollte sie
                    gründlich ausgespült werden. Wir empfehlen das Auswaschen
                    und Abspülen per Hand, um Beschädigungen an der Flasche zu
                    vermeiden. Zudem empfehlen wir eine sichere Lagerung, um
                    Herunterfallen und daraus resultierenden Schäden
                    vorzubeugen.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="6">
        <v-carousel
          cycle
          continuous
          height="auto"
          class="product-image-carousel"
        >
          <v-carousel-item
            v-for="(element, i) in productImages"
            :key="i"
            :src="element.src"
            :alt="element.alt"
            class="product-image"
          />
        </v-carousel>
      </v-col>
      <v-col cols="6">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header color="primary">
              Informationen zum Produkt
            </v-expansion-panel-header>
            <v-expansion-panel-content color="primary">
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Material und Nutzungshinweise
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    Materialien:
                    <ul>
                      <li>Bambus</li>
                      <li>rostfreier Edelstahl</li>
                      <li>PVC-Kunststoff</li>
                      <li>Gummidichtungsring</li>
                    </ul>
                    <br />
                    Nutzungshinweise:
                    <ul>
                      <li>Vor dem ersten Gebrauch gründlich ausspülen</li>
                      <li>Reinigung nicht in der Spülmaschine</li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Maße
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    Höhe: 24,2cm <br />
                    Durchmesser: 6,7cm <br />
                    Volumen: 500ml
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Zertifikate
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    <ul>
                      <li>RoHS</li>
                      <li>FDA</li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header color="accent">
                    Produktbeschreibung
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="accent">
                    Das erste Produkt unserer Schülerfirma Bambulti: die
                    Bambultea-Flask. Hierbei handelt es sich um eine
                    Thermosflasche, welche außen anstatt von Plastik mit
                    nachhaltigem Bambus beschichtet ist. Unsere Flasche besteht
                    neben Bambus aus rostfreien Edelstahl, PVC-Kunststoff und
                    einem Dichtungsring im Deckel. Aktuell produzieren wir
                    unsere Thermosflaschen in China. Das Produkt ist FDA (food
                    and drug administration) und RoHS (Restriction of (the use
                    of certain) Hazardous Substances in electrical and
                    electronic Equipment) getestet und enthält so keine
                    schädlichen Chemikalien. Für 20 Euro erhalten Sie unsere
                    Thermosflasche mit den Maßen von 24,2cm Höhe und einem
                    Durchmesser von 6,7cm. Ebenfalls ist interessant zu wissen,
                    dass das Füllvermögen von 500ml über 15h warmgehalten werden
                    kann. Nach dem Einfüllen eines heißen Getränkes sollte der
                    Inhalt mindestens eine halbe Stunde abgekühlen, um
                    Verbrennungen vorzubeugen. Nach dem Genießen des Inhaltes
                    aus unserer Thermosflasche sollte darauf geachtet werden,
                    dass die Flasche nicht im Geschirrspüler gesäubert werden
                    darf. Vor der ersten Benutzung der Flasche sollte sie
                    gründlich ausgespült werden. Wir empfehlen das Auswaschen
                    und Abspülen per Hand, um Beschädigungen an der Flasche zu
                    vermeiden. Zudem empfehlen wir eine sichere Lagerung, um
                    Herunterfallen und daraus resultierenden Schäden
                    vorzubeugen.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      productImages: [
        {
          src: require('~/assets/img/bambultea-flask-detail.jpg'),
          alt: 'Bambultea Flask - Detail',
        },
        {
          src: require('~/assets/img/bambultea-flask.jpg'),
          alt: 'Bambultea Flask',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Shop',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Webshop zum bestellen der Bambultea-Flask.',
        },
      ],
    }
  },
  mounted() {
    // const el = document.querySelector('.product-image')
    // el.addEventListener('mousemove', (e) => {
    //   console.log(-e.offsetX)
    //   el.style.transform = `translateX(${-e.offsetX})`
    // })
    // for (let i = 0; i < elements.length; i++) {
    //   const el = elements.item(i)
    // }
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
.product-image-carousel {
  position: fixed;
  max-width: 30vw;
  width: 100%;
  border-radius: 15px;
}
.product-image-carousel-mobile {
  width: 100%;
  border-radius: 15px;
}
.product-image {
  cursor: zoom-in;
  transform: scale(1);
  transition: transform 0.2s;
}
.product-image:hover {
  transform: scale(1.2);
}
</style>
