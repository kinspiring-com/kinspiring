import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.css';

import ExternalLink from '../ExternalLink/ExternalLink';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Päivitetty: 14. maaliskuuta 2018 </p>

      <h2>1. Määritelmät</h2>
      <p>Kinspiring on Kinspiring Oy:n tuottama vertaisvuokrauspalvelu, jonka käyttäjiä ovat</p>
      <ul className={css.indentedBullet}>
        <li><span className={css.bold}>Vuokrantaja</span> eli tavaran vuokralle tarjoava henkilö (A), joka on rekisteröitynyt Kinspiring-palveluun</li>
        <li><span className={css.bold}>Vuokraaja</span> eli tavaran vuokraava henkilö (B), joka on rekisteröitynyt Kinspiring-palveluun ja maksaa tavaran vuokran henkilökohtaisella maksukortillaan</li>
      </ul>

      <p><span className={css.bold}>Tavara</span> tarkoittaa Kinspiring-palvelun kautta vuokralle tarjottua tuotetta.</p>

      <p><span className={css.bold}>Vuokrausjakso</span> tarkoittaa päivissä mitattavaa aikaväliä, jonka aikana käyttäjän A tavara on käyttäjän B käytössä maksua vastaan näiden käyttöehtojen mukaisesti.</p>

      <h2>2. Toiminnan tarkoitus ja edellytykset</h2>
      <p>Kinspiringin toiminnan tarkoitus on mahdollistaa tavaroiden vuokraus käyttäjän A ja käyttäjän B välillä. Voidakseen tarjota tavaroita vuokralle tai vuokrata Kinspiringissa ilmoitettuja tavaroita, on käyttäjien (A ja B) rekisteröidyttävä palveluun.</p>
      <p>Kinspiringissa  tuotteita voivat vuokrata yli 18-vuotiaat yksityishenkilöt, joilla on henkilökohtainen pankki- tai luottokortti.</p>
      <p>Kinspiring-palvelua saa käyttää vain tässä kuvattujen tuotteiden vuokraukseen ja alla yksilöityjen käyttöehtojen mukaisesti.</p>

      <h2>3. Oikeudet sisältöön</h2>
      <p>Käyttäjillä on itsellään oikeus tekstiin, kuviin ja muuhun sisältöön, jonka he tuottavat palveluun. He sallivat muiden käyttää sisältöä palvelun luonteen mukaisesti ja sallivat palvelun ylläpitäjän arkistoida tietoa ja tehdä siihen palvelun kannalta tarpeellisia muutoksia, mutta eivät siirrä muita oikeuksia ellei erikseen toisin sovita.</p>
      <p>Vastuu sisällöstä on käyttäjällä, joka sen on palveluun tuottanut. Käyttäjän vastuulla on ilmoittaa selvästi mikäli hän käyttää tavaran valmistajan tuottamaa materiaalia ilmoituksessaan. Kinspiringilla on oikeus poistaa palvelimeltaan käyttäjät, tekstit, kuvaukset, kuvat ja tuotteet, jotka eivät ole käyttöehtojen mukaisia taikka muutoin toimivat hyvän tavan vastaisesti käyttäessään palvelua. Palvelun ylläpitäjä voi vapaasti käyttää käyttäjän kuvia ja muuta sisältöä palvelun markkinoimiseksi.</p>

      <h2>4. Käyttäjien ja palveluntarjoajan keskinäiset vastuut</h2>
      <p>Kinspiring ei ole sopimusosapuolena tavaran vuokrauksessa, eikä se vastaa vuokraustoiminnassa mahdollisesti aiheutuneista vahingoista tai tappioista. Kinspiring ei takaa palvelun häiriötöntä toimivuutta ja saatavuutta eikä ole velvollinen korvaamaan käyttäjälle palvelun keskeytymisestä mahdollisesti aiheutuneita kuluja menetyksiä tai vahinkoja. Kinspiring varaa oikeuden ilman erillistä ilmoitusta koska tahansa muuttaa sivuja, estää pääsyn niille sekä lopettaa palvelun.</p>
      <p>Käyttäjän tulee itse arvioida palvelussa tekemiensä toimien järkevyys ja turvallisuus sekä muiden käyttäjien luotettavuus. Tavaran vuokralle tarjoavan käyttäjän (A) tulee varmistua siitä, että hänellä on laillinen oikeus tarjota tavara vuokralle. Tavaran vuokraava käyttäjä (B) sitoutuu yleiseen huolellisuuteen ja varovaisuuteen muiden käyttäjien tuotteita käyttäessään.</p>
      <p>Kinspiring-palvelun ylläpitäjällä on oikeus juridisiin toimiin ehtoja rikkonutta käyttäjää vastaan.</p>

      <h2>4.1 Tavaran vuokralle tarjoavan käyttäjän (A) turvallisuus</h2>
      <p>Kinspiring ei vastaa, jos palvelun kautta vuokrattu tuote rikkoutuu. Kinspiring edellyttää, että tavaran vuokraavalla käyttäjällä (B) on voimassa oleva koti- tai matkavakuutus suomalaisessa vakuutusyhtiössä, ja että vuokrattu tavara on vakuutuksen piirissä koko vuokrauksen ajan.</p>
      <p>Tavaran vuokralle antava käyttäjä (A) arvioi itse kyseisen tuotteen nykyarvon, joka on kohtuullinen jälleenmyyntihinta ostovuosi huomioon ottaen. Käyttäjä A on vastuussa saattaa nykyarvo vuokraajan tietoon. Nykyarvo voi olla maksimissaan 2000€.</p>
      <p>Käyttäjä A on oikeutettu esittämään korvausvaatimuksen käyttäjälle B, jos palvelun kautta vuokrattu tavara on vaurioitunut vuokrauksen aikana. Käyttäjän A on pystyttävä osoittamaan tavaran vaurioituminen. Korvaus on suhteutettava vaurion suuruuteen. Normaali käytöstä johtuva kuluminen ei oikeuta korvauksiin. Käyttäjä B on velvollinen korvaamaan korkeintaan nykyarvon suuruisen summan käyttäjälle A viivytyksettä. Käyttäjä B on itse halutessaan vastuullinen hakemaan korvausta oman vakuutusyhtiönsä koti- tai matkavakuutuksesta. Mikäli käyttäjä B rikkoo näitä ehtoja, on hän velvollinen täysimääräisesti korvaamaan sopijakumppanilleen aiheuttamansa välittömät vahingot.</p>

      <h2>4.2 Tavaran vuokraavan käyttäjän (B) turvallisuus</h2>
      <p>Käyttäjän B maksukortilta tehdään katevaraus vuokrauspyynnön yhteydessä. Maksu tavaran vuokrauksesta veloitetaan käyttäjältä B vain siinä tapauksessa, että käyttäjä A hyväksyy vuokrauspyynnön Kinspiring-palvelussa. Käyttäjän A on hyväksyttävä vuokrauspyyntö viimeistään kolmen (3) vuorokauden sisällä siitä, kun käyttäjä B on tehnyt vuokrauspyynnön. Jos kuitenkin vuokrausjakson ensimmäinen päivä on alle kolme (3) vuorokautta varauspyynnön tekohetkestä lukien, on käyttäjän A hyväksyttävä vuokrauspyyntö viimeistään vuokrausjakson viimeisen päivän aikana.</p>
      <p>Maksu välitetään käyttäjälle A varauksen viimeisen päivän jälkeen.</p>
      <p>Käyttäjä B on velvollinen tekemään perustellun reklamaation Kinspiringin ylläpidolle viivytyksettä, mikäli käyttäjä A ei luovuta tavaraa sovitun ajan puitteissa tai tavara poikkeaa merkittävästi ilmoituksesta, jonka käyttäjä A on luonut Kinspiring-palveluun. Tällaisessa tapauksessa Kinspiringilla on oikeus olla välittämättä kyseessä olevaan vuokraukseen liittyvää maksua käyttäjälle A ja rahat palautetaan käyttäjälle B.</p>

      <h2>5. Hinnoittelu, maksut ja tilitykset</h2>
      <p>Minimivuokra-aika on yksi päivä. Yksi vuokrauspäivä vastaa yhtä kokonaista vuorokautta (24 tuntia) ja vuokraa tulee maksaa myös tuotteen nouto- ja palautuspäivästä.</p>
      <p>Käyttäjälle A tilitettävästä maksusta vähennetään palveluveloitus, joka on suuruudeltaan 10 % ja käyttäjältä B peritään 2 % palveluveloitus, joka lisätään vuokrausmaksun päälle. Palvelumaksua ei kuitenkaan peritä, mikäli käyttäjältä B peritty maksu palautetaan ennen vuokrauksen päättymispäivää (ks.4.2 Tavaran vuokraavan käyttäjän (B) turvallisuus). Kinspiring ei vastaa mahdollisesta viiveestä maksunvälityksessä, joka aiheutuu maksunvälityspalvelusta. Hyväksymällä nämä ehdot, käyttäjä hyväksyy myös <ExternalLink href="https://stripe.com/fi/legal">Stripe-maksunvälityspalvelun ehdot</ExternalLink>. Maksunvälityspalvelun ehdot koskevat vain käyttäjiä, jotka tarjoavat tavaroitaan vuokralle (käyttäjä A) Kinspiring-palvelussa.</p>
      <p>Kinspiring pidättää luvan kaikkiin muutoksiin (esim. hinnoittelumalli).</p>

      <h2>6. Käyttäjän poistaminen</h2>
      <p>Palvelun ylläpitäjällä on oikeus poistaa käyttäjä Kinspiring-palvelusta ja lopettaa hänen käyttöoikeutensa palveluun perustellusta syystä ja ilman korvausvelvollisuutta. Perusteltu syy voi olla esimerkiksi näiden käyttöehtojen rikkominen tai epäilys käyttöehtojen rikkomisesta.</p>

      <h2>7. Sovellettava laki</h2>
      <p>Palveluun ja näihin käyttöehtoihin sovelletaan Suomen lakia.</p>

    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
