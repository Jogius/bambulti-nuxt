<template>
  <v-container>
    <div id="parallax" />
    <v-card color="transparent" elevation="0">
      <h1>Impressum</h1>
      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    </v-card>
    <v-card color="primary">
      <v-card-title>Websiteverantwortlicher</v-card-title>
      <v-card-text>
        Julius Makowski im Auftrag vom Schülerunternehmen Bambulti<br />
        Mittelstra&szlig;e 16e<br />
        16540 Hohen Neuendorf
      </v-card-text>
    </v-card>
    <v-card color="primary">
      <v-card-title>Kontakt JUNIOR gGmbH</v-card-title>
      <v-card-text>
        Institut der deutschen Wirtschaft Köln JUNIOR gGmbH Website:
        <a href="https://www.junior-grogramme.de"
          >https://www.junior-programme.de</a
        ><br />
        E-Mail:
        <a href="mailto:karabenli@iwkoeln.de" class="warning--text"
          >karabenli@iwkoeln.de</a
        >
      </v-card-text>
    </v-card>
    <v-card color="primary">
      <v-card-title>Kontakt</v-card-title>
      <v-card-text>
        Telefon: 017643543921<br />
        E-Mail:
        <a href="mailto:kontakt@bambulti.de" class="warning--text"
          >kontakt@bambulti.de</a
        >
      </v-card-text>
    </v-card>
    <v-card color="primary">
      <v-card-title>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </v-card-title>
      <v-card-text>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </v-card-text>
    </v-card>
    <v-card color="primary">
      <v-card-title>Haftung f&uuml;r Inhalte</v-card-title>
      <v-card-text>
        Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
        f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
        gespeicherte fremde Informationen zu &uuml;berwachen oder nach
        Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
        hinweisen.
      </v-card-text>
      <v-card-text>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon
        unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem
        Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </v-card-text>
    </v-card>
    <v-card color="primary">
      <v-card-title>Haftung f&uuml;r Links</v-card-title>
      <v-card-text>
        Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r
        diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r
        die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
        Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
        &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar.
      </v-card-text>
      <v-card-text>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </v-card-text>
    </v-card>
    <v-card color="primary">
      <v-card-title>Urheberrecht</v-card-title>
      <v-card-text>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen
        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht
        kommerziellen Gebrauch gestattet.
      </v-card-text>
      <v-card-text>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </v-card-text>
      <v-card-text>
        &copy; Erik Brennecke / Bambulti Logo <br />
        &copy; Erik Brennecke / Bilder von Flaschen und Set <br />
        &copy; Erik Brennecke (Selbstauslöser) / Teamfoto Bambulti <br />
        &copy; JUNIOR gGmbH / Junior Logo <br />
        &copy; nicubunu / Toolbox
      </v-card-text>
      <v-card-actions>
        <v-btn icon href="https://www.e-recht24.de">
          <v-icon>mdi-earth</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Impressum',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Informationen zur Website.',
        },
      ],
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
.v-card {
  margin-top: 12px;
}
</style>
