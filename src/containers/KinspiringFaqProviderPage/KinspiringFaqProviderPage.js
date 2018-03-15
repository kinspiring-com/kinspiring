import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import config from '../../config';

import css from './KinspiringFaqProviderPage.css';

const KinspiringFaqProviderPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'KinspiringFaqProviderPage.providerTabTitle' }),
      selected: true,
      linkProps: {
        name: 'KinspiringFaqProviderPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'KinspiringFaqProviderPage.customerTabTitle' }),
      selected: false,
      linkProps: {
        name: 'KinspiringFaqCustomerPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage(
    { id: 'KinspiringFaqProviderPage.schemaTitle' },
    { siteTitle }
  );
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };

  // prettier-ignore
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="KinspiringFaqProviderPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="KinspiringFaqProviderPage.heading" />
            </h1>

            <h2>Miksi minun kannattaa antaa lastentarvikkeitani vuokralle Kinspiringissa?</h2>
            <ul>
              <li>
                Vuokraamalla omia lastentarvikkeitasi muille perheille voit tienata mukavasti
                ekstraa.
              </li>
              <li>
                Kinspiringissa saat laajan näkyvyyden vuokrailmoituksellesi – me teemme
                markkinointia puolestasi.
              </li>
              <li>
                Vuokrailmoituksen tekeminen on helppoa, nopeaa ja ilmaista! Maksat vain
                välityspalkkion toteutuneista vuokrauksista.
              </li>
              <li>Käyttäjien toisilleen antamat arvostelut luovat luottamusta.</li>
              <li>Vertaisvuokraaminen on sosiaalista. Ystävyyksiäkin on täällä syntynyt.</li>
              <li>Kinspiring on kotimainen. Me autamme sinua suomeksi!</li>
            </ul>

            <h2>Mitä tuotteita voin ilmoittaa vuokralle tai vuokrata Kinspiringissa?</h2>
            <p>
              Kinspiringissa perheet vuokraavat laadukkaita lastentarvikkeita toisilleen. Voit
              ilmoittaa Kinspiringin brändilistalla olevia tuotteita. Jos ilmoittamasi
              lastentarvikkeen brändi ei löydy valikosta, voit lisätä sen "Muut" kategoriaan.
              Tällöin arvioimme tuotteen sopivuuden erikseen.
            </p>

            <h2>Miten laitan omia lastentarvikkeitani vuokralle?</h2>
            <ol>
              <li>
                Liity Kinspingin jäseneksi täällä. Lisää sähköposti, jota käytät aktiivisesti, jotta
                saat ilmoitukset vuokrauspyynnöistä.
              </li>
              <li>Lisää profiiliin kuvasi ja kerro hieman itsestäsi vuokraajille.</li>
              <li>
                Lisää tilinumerosi profiilin maksuasetuksissa. Saat siten maksut suoraan tilillesi.
              </li>
              <li>Lisää ilmoitus. Alla vinkkejä toimivan ilmoituksen tekemiseen.</li>
              <li>
                Jaa ilmoituksesi esimerkiksi Facebookin paikallisryhmässä ja kerro, että nyt sinulta
                saa vuokrata lastentarvikkeita Kinspiringin kautta.
              </li>
              <li>
                Saadessasi vuokrauspyynnön, jossa vuokraaja on jo suorittanut maksun, sinulla on
                kolme vuorokautta aikaa hyväksyä varaus.
              </li>
              <li>
                Kun olet hyväksynyt varauksen, sovi vuokraajan kanssa, mistä ja milloin hän voi
                noutaa lastentarvikkeen. Vaihda tarkat yhteystiedot kuten puhelinnumero. Pyydä
                vuokraajaa todistamaan henkilöllisyys noudon yhteydessä.
              </li>
              <li>
                Vuokrausajan päätyttyä rahat siirtyvät tilillesi muutaman pankkipäivän päästä.
              </li>
              <li>
                Anna palaute vuokraajalle. Palaute näkyy vuokraajan profiilissa. Myös vuokraaja
                kirjoittaa sinulle palautteen. Positiivisilla palautteilla parannat profiilisi
                luotettavuutta.
              </li>
            </ol>

            <h2>Millainen vuokrailmoitus minun kannattaa tehdä?</h2>
            <ul>
              <li>
                Kerro tuotteesta mahdollisimman paljon: käyttötarkoitus, mitat, valmistusvuosi,
                minkä ikäiselle ja kokoiselle lapselle tuote sopii.
              </li>
              <li>
                Käytä ilmoituksessa itse ottamiasi mahdollisimman laadukkaita kuvia. Jos käytät
                valmistajan materiaalia, kerro materiaalin omistaja selvästi.
              </li>
              <li>
                Voit lisätä ilmoitukseen myös tuotetta esittelevän YouTube-videon kopioimalla linkin
                tekstikenttään.
              </li>
              <li>
                Määrittele ilmoitukseesi myös omavastuusumma, jonka vuokraaja sitoutuu korvaamaan
                tavaran kadottua tai mentyä rikki.
              </li>
            </ul>

            <h2>Miten tuotteet kannattaa hinnoitella?</h2>
            <ul>
              <li>Anna tuotteellesi päivähinta ja kirjoita minimivuokrausaika.</li>
              <li>
                Jotta tuotteesi on kilpailukykyinen muiden vastaavien ilmoitusten kanssa alueellasi,
                tutki, kuinka samankaltaiset tuotteet on hinnoiteltu palvelussa.
              </li>
              <li>Ota hinnoittelussa huomioon Kinspiringin välityspalkkio 10&nbsp;%.</li>
              <li>
                Hinnoittele huolellisesti. Käy läpi alueesi ilmoitukset ja aseta hinta, joka
                houkuttelee avaamaan juuri sinun ilmoituksesi. Onko sinulla lisävarusteita kuten
                rattaiden aurinkovarjo, sadesuoja tai hyönteisverkko? Kerro ilmoituksessa, jos voit
                antaa jonkin lisävarusteen mukaan samaan hintaan.
              </li>
              <li>
                Auta vuokraajaa ja itseäsi ilmoittamalla ilmoituksessa selkeästi hinnat myös
                pidemmille varauksille. Esimerkiksi 14 päivää 10 päivän hinnalla. Varauksen
                toteutuessa pyydä vuokraajaa varaamaan lastentarvike 10 päiväksi.
              </li>
              <li>
                <ExternalLink href="https://lifeatkinspiring.com/kinspiring/2017/7/24/5-vinkkia-nain-tienaat-lastentarvikkeitasi-vuokraamalla">
                  Lisää vinkkejä löydät Kinspiringin blogista.
                </ExternalLink>
              </li>
            </ul>

            <h2>Olen hyväksynyt vuokrauspyynnön. Milloin rahat näkyvät tililläni?</h2>
            <p>
              Rahat näkyvät tililläsi parin muutaman pankkipäivän kuluttua vuokrauksen
              päättymisestä.
            </p>
            <p>
              Poikkeuksena ovat tapaukset, joissa tavaran vuokralleottaja tekee reklamaation, joka
              johtaa rahojen palauttamiseen (katso FAQ vuokraajille).
            </p>

            <h2>Mitä jos vuokrattu lastentarvike rikkoutuu tai häviää kokonaan?</h2>
            <p>
              Kinspiringin kautta vuokrattaessa vuokraajan ja vuokranantajan välille syntyy aina
              sopimus. Käyttöehdot hyväksymällä vuokraaja sitoutuu korvaamaan tavaran kadottua tai
              mentyä rikki ilmoituksessa mainitun omavastuu summan mukaisesti.
            </p>

            <h2>Miten ilmoitan vuokratoiminnasta saadun tulon verotuksessa?</h2>
            <p>
              Vuokraustoiminnasta saatu tulo on veronalaista pääomatuloa. Tulot ilmoitetaan
              veroilmoituksella. Satunnaisesta vuokraustoiminnasta saaduista vuokratuloista saa
              vähentää vuokraamisesta aiheutuvat kulut, kuten Kinspiringin välityspalkkion ja
              mahdolliset vuokraustoiminnasta aiheutuneet lastentarvikkeiden huoltokustannukset.
            </p>

            <h2>Voivatko yritykset ilmoittaa Kinspiringissa?</h2>
            <p>Myös yritys voi ilmoittaa Kinspiring-palvelussa. Ilmoittaminen on maksullista.</p>
            <p>
              Kysy tarjous{' '}
              <ExternalLink href="mailto:hello@kinspiring.com">hello@kinspiring.com</ExternalLink>.
            </p>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

KinspiringFaqProviderPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const KinspiringFaqProviderPage = compose(connect(mapStateToProps), injectIntl)(
  KinspiringFaqProviderPageComponent
);

export default KinspiringFaqProviderPage;
