<template>
  <v-container>
    <div id="parallax" />
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-carousel
          cycle
          show-arrows-on-hover
          height="auto"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'product-image-carousel-mobile'
              : 'product-image-carousel'
          "
        >
          <v-carousel-item
            v-for="(element, i) in productImages"
            :key="i"
            :src="element.src"
            :alt="element.alt"
            :class="$vuetify.breakpoint.smAndDown ? '' : 'product-image'"
          />
        </v-carousel>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card color="accent">
          <v-card-title>Bambultea Flask kaufen</v-card-title>
          <v-card-text>
            <v-select
              v-model="quantity"
              color="info"
              :items="[1, 2, 3]"
              item-color="info"
              rounded
              outlined
              label="Menge"
              append-icon="mdi-numeric"
              hide-details
            />
            <v-container class="checkboxes">
              <v-container>
                Ich wohne in Oranienburg oder ~10km Umkreis
                <v-checkbox
                  v-model="proximity"
                  class="shrink mr-2 mt-0"
                  color="info"
                  hide-details
                />
              </v-container>
              <v-divider />
              <v-container>
                Mit dem Einkauf stimme ich den
                <a
                  class="info--text"
                  target="_blank"
                  href="https://stripe.com/de/checkout/legal"
                >
                  Allgemeinen Geschäftsbedingungen
                </a>
                und der
                <a
                  class="info--text"
                  target="_blank"
                  href="https://stripe.com/de/privacy#translation"
                  >Datenschutzvereinbarung</a
                >
                der Transaktionsplattform Stripe zu
                <v-checkbox
                  v-model="acceptAgreements"
                  class="shrink mr-2 mt-0"
                  color="info"
                  hide-details
                />
              </v-container>
            </v-container>

            <v-divider />
            <v-container>
              <v-chip v-if="remaining == 0" color="transparent">
                Leider ausverkauft 😢
              </v-chip>
              <v-chip v-else color="transparent">
                <v-icon small>mdi-alarm</v-icon>&nbsp; Nur noch
                {{ remaining }} Flasche{{ remaining == 1 ? '' : 'n' }}
                verfügbar
              </v-chip>
            </v-container>
            <v-divider />
            <v-container>
              <v-chip color="transparent" large>
                <h1>Gesamt: {{ quantity * 20 + (proximity ? 0 : 4) }}&euro;</h1>
              </v-chip>
              <v-chip color="transparent" small>
                {{ quantity }} x 20&euro;
                {{ proximity ? '' : ' + 4&euro; Versand' }}
              </v-chip>
            </v-container>
            <v-divider />
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="quantity > remaining || !acceptAgreements"
              @click.stop="checkoutButton"
            >
              <v-icon>mdi-cart-outline</v-icon> Kaufen
            </v-btn>
          </v-card-actions>
        </v-card>
        <div class="spacer"></div>
        <v-expansion-panels v-model="panel" accordion>
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
          <v-expansion-panel>
            <v-expansion-panel-header color="primary">
              Lieferhinweise
            </v-expansion-panel-header>

            <v-expansion-panel-content color="primary">
              An Orte hin unserer direkten Umgebung (Oranienburg und ~10km
              Umkreis) liefern wir die Flaschen persönlich aus, es entstehen
              keine Lieferkosten. <br />
              Bei der Lieferung an andere Adressen berechnen wir Lieferkosten in
              Höhe von 5&euro;.
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
      remaining: 0,
      proximity: false,
      acceptAgreements: false,
      quantity: 1,
      panel: 0,
      pos: {
        x: 0,
        y: 0,
      },
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
          content: 'Webshop zum Bestellen der Bambultea-Flask.',
        },
      ],
    }
  },
  async mounted() {
    const data = await this.$axios.$get(
      process.env.apiBaseUrl + '/getRemaining'
    )
    if (Object.prototype.hasOwnProperty.call(data, 'remaining')) {
      this.remaining = data.remaining
    }
  },
  methods: {
    async checkoutButton() {
      if (this.$stripe) {
        if (this.quantity > 3 || this.quantity > this.remaining) return
        const data = await this.$axios.$post(
          process.env.apiBaseUrl + '/getNewSession',
          { quantity: this.quantity, proximity: this.proximity }
        )
        const { error } = await this.$stripe.redirectToCheckout({
          sessionId: data.sessionId,
        })
        if (error) alert(error)
      }
    },
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
.spacer {
  margin: 20px;
}
.product-image-carousel {
  position: fixed;
  max-width: 28vw;
  width: 100%;
  border-radius: 15px;
}
.product-image-carousel-mobile {
  width: 100%;
  border-radius: 15px;
}

/* .product-image {
  cursor: zoom-in;
  transform: scale(1);

  transition: transform 0.2s;
}
.product-image:hover {
  transform: scale(1.2);
} */
.checkboxes {
  margin: 12px 0;
  border: 1px solid #fff;
  border-radius: 15px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: none;
}
</style>
