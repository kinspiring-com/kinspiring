import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Päivitetty: 14. maaliskuuta 2018</p>
      <h2>Rekisterinpitäjä</h2>
      <p>Kinspiring Oy</p>
      <p>Y-tunnus: 2819831-1</p>

      <h2>Yhteyshenkilö rekisteriä koskevissa asioissa</h2>
      <p>Krista Pohjanlehto</p>
      <p><a href="mailto:hello@kinspiring.com">hello@kinspiring.com</a></p>

      <h2>Rekisterin nimi</h2>
      <p>Kinspiring-palvelun käyttäjärekisteri</p>

      <h2>Henkilötietojen käsittelyn tarkoitus</h2>
      <p>Tietoja kerätään, jotta palvelun käyttö ja yhteydenpito käyttäjien kanssa on mahdollista. Yhteydenpitoa voi tapahtua sekä palvelun ylläpitäjän ja käyttäjän välillä että suoraan käyttäjien välillä. Tilastotietoa palvelun käytöstä voidaan hyödyntää palvelun kehittämisessä ja markkinoinnissa.</p>
      <p>Henkilöllisyyttä koskeva informaatio jää yksinomaan Kinspiringin vastuulle ja rekisteriin. Vain käyttäjän etunimi ja sukunimen ensimmäinen kirjain ovat lähtökohtaisesti muiden käyttäjien nähtävissä. Lisäksi käyttäjät voivat halutessaan jakaa muuta tietoa itsestään toisille käyttäjille profiilisivullaan ja vuokraustapahtumien yhteydessä.</p>
      <p>Henkilötietojen käsittelyä ei ole ulkoistettu, mutta niiden tallentaminen tapahtuu ulkopuoliselta yritykseltä vuokratuille palvelimille.</p>

      <h2>Rekisterin tietosisältö</h2>
      <p>Rekisteriin voidaan tallentaa:</p>

      <ul className={css.indentedBullet}>
        <li>Yksilöintitiedot: nimi, sähköpostiosoite, puhelinnumero, katuosoite, syntymäaika (tarvitaan maksujen välittämiseen)</li>
        <li>Kirjautumistiedot: käyttäjätunnus, salasana (tallennetaan salattuna)</li>
        <li>Käyttäjän itse kirjoittama kuvaus itsestään</li>
        <li>Käyttäjän palveluun jättämät pyynnöt ja tarjoukset</li>
        <li>Käyttäjän saamat ja antamat palautteet</li>
        <li>Tilastotietoa palvelun käytöstä, esimerkiksi kirjautumisten lukumäärä</li>
        <li>Luottokortti- ja tilitiedot</li>
      </ul>

      <h2>Säännönmukaiset tietolähteet</h2>
      <p>Henkilötiedot ovat käyttäjän itsensä ilmoittamia, joko rekisteröitymisen yhteydessä tai palvelua myöhemmin käytettäessä.</p>

      <h2>Tietojen säännönmukaiset luovutukset</h2>
      <p>Asiakastietoja ei luovuteta Kinspiring palveluiden tuotantoon osallistuvien osapuolien ulkopuolelle ilman lakisääteistä perustetta.</p>

      <h2>Tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
      <p>Tiedot on lähtökohtaisesti tallennettu palvelimille, jotka sijaitsevat EU:n sisäpuolella. Maksutapahtumien tietoja välitetään EU-alueen ulkopuolelle. Maksuliikenteen osalta palveluntarjoaja varmistaa, että tiedonsiirto täyttää EU:n tietosuoja-asetuksen vaatimukset: https://support.stripe.com/questions/stripe-and-european-data-transfers.</p>

      <h2>Rekisterin suojauksen periaatteet</h2>
      <p>Tiedot tallennetaan palvelimille. Ohjelmallinen pääsy niihin on rajattu salasanoilla ja fyysinen pääsy laitetilaan on rajattu palvelimet tarjoavan yrityksen toimesta.</p>

      <h2>Tarkastusoikeus ja tarkastusoikeuden toteuttaminen</h2>
      <p>Käyttäjillä on henkilötietolain 523/1999 6. luvun mukaisesti oikeus tarkistaa, mitä häntä koskevia tietoja Kinspiring-palvelun käyttäjärekisteriin on tallennettu. Käyttäjän tulee esittää tarkastuspyynnössä tiedon etsimiseen tarpeelliset tiedot: Nimi, osoite, puhelinnumero ja käyttäjätunnus.</p>

      <h2>Tietojen poistaminen</h2>
      <p>Jos käyttäjä poistaa profiilinsa Kinspiring-palvelusta, poistetaan kaikki häneen liittyvät henkilötiedot kohtuullisen ajan sisällä, ellei niiden säilyttämiseen ole perusteltua syytä.</p>

      <h2>Tiedon korjaaminen ja tiedon korjaamisen toteuttaminen</h2>
      <p>Asiakas voi päivittää omia perustietojaan Kinspiring-palvelun profiilisivulla.</p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
