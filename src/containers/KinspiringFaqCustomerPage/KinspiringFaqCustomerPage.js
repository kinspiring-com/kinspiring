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
} from '../../components';
import config from '../../config';

import css from './KinspiringFaqCustomerPage.css';

const KinspiringFaqCustomerPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'KinspiringFaqCustomerPage.providerTabTitle' }),
      selected: false,
      linkProps: {
        name: 'KinspiringFaqProviderPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'KinspiringFaqCustomerPage.customerTabTitle' }),
      selected: true,
      linkProps: {
        name: 'KinspiringFaqCustomerPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage(
    { id: 'KinspiringFaqCustomerPage.schemaTitle' },
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
          <TopbarContainer currentPage="KinspiringFaqCustomerPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="KinspiringFaqCustomerPage.heading" />
            </h1>
            <h2>Miksi Kinspiring on kätevin tapa vuokrata lastentarvikkeita?</h2>
            <ul>
              <li>
                Kun tarvitset lastentarviketta satunnaisesti, on vuokraaminen ostamista
                ekologisempaa. Voit myös koeajamalla lastentarvikkeen Kinspiringissa välttyä
                hutiostoksilta.
              </li>
              <li>
                Kinspiringissa on laaja valikoima erilaisia lastentarvikkeita ympäri Suomea ja
                karttahausta näet lähelläsi sijaitsevat lastentarvikkeet.
              </li>
              <li>
                Luottokortilla maksaminen on turvallista. Rahasi siirtyvät vuokranantajalle vasta
                kun olet saanut tarkistaa tuotteen.
              </li>
              <li>Käyttäjien toisilleen antamat arvostelut luovat luottamusta.</li>
              <li>Vertaisvuokraaminen on sosiaalista! Ystävyyksiäkin on täällä syntynyt.</li>
              <li>Kinspiring on kotimainen! Me autamme sinua suomeksi.</li>
            </ul>

            <h2>Miten vuokraan lastentarvikkeita Kinspiringissa?</h2>
            <ol>
              <li>Liity Kinspingin jäseneksi täällä.</li>
              <li>Lisää profiiliin kuvasi ja kerro hieman itsestäsi.</li>
              <li>Etsi haluamasi lastentarvike.</li>
              <li>
                Vuokraa lastentarvike klikkaamalla "Lähetä varauspyyntö". Voit myös lähettää
                ilmoittajalle yksityisviestin "ota yhteyttä" -toiminnolla ja esimerkiksi pyytää
                tarjouksen pidemmälle vuokralle.
              </li>
              <li>
                Maksa vuokraus luottokortilla. Katevaraus syntyy ja on voimassa kolme vuorokautta.
              </li>
              <li>
                Kun vuokranantaja hyväksyy tilauksen, sovi hänen kanssaan, mistä ja milloin voit
                noutaa lastentarvikkeen. Valmistaudu todistamaan henkilöllisyytesi noudon
                yhteydessä.
              </li>
              <li>
                Vuokrauksen jälkeen anna vuokranantajalle palaute: kerro, miten vuokraus sujui ja
                millainen tuote oli.
              </li>
            </ol>

            <h2>Miten Kinspiringissa suoritetaan maksut?</h2>
            <p>Kinspiringissa maksut tehdään turvallisesti luottokortilla.</p>
            <p>
              Kun maksu suoritetaan luottokortilla, maksujärjestelmä Stripe pidättää rahat. Tämä
              mahdollistaa, että vuokraaja tietää saavansa oikean tuotteen. Varaus muuttuu
              automaattisesti hyväksytyksi varauksen päättymispäivänä ja rahat siirtyvät
              vuokranantajalle.
            </p>
            <p>
              Kinspiringin välityspalkkio vuokraajalle on 2&nbsp;% vuokrauksen kokonaissummasta.
            </p>

            <h2>
              Lastentarvike, jonka otin vuokralle ei vastannutkaan vuokrausilmoituksen kuvausta tai
              en saanut tavaraa käyttööni sovittuna ajankohtana. Miten voin reklamoida ja saada
              rahani takaisin?
            </h2>
            <p>Reklamaatiotilanteessa ota yhteyttä Kinspiringin ylläpitoon mahdollisimman pian.</p>

            <h2>
              Olen tehnyt vuokrauspyynnön, mutta vuokrausilmoituksen jättäjä ei ole hyväksynyt tai
              hylännyt pyyntöäni. Maksukortiltani on kuitenkin tehty katevaraus. Milloin katevaraus
              raukeaa?
            </h2>
            <p>
              Katevaraus raukeaa automaattisesti kolmen päivän kuluttua vuokrauspyynnön tekemisestä,
              mikäli ilmoituksen jättäjä ei hyväksy pyyntöäsi.
            </p>
            <p>
              Katevaraus raukeaa myös jos ilmoituksen jättäjä ei hyväksy pyyntöäsi vuokrausjakson
              viimeiseen päivään mennessä. Jos esimerkiksi teet yhden päivän vuokrauspyynnön samalle
              päivälle, voi vuokranantaja hyväksyä varauksen vielä sinä päivänä. Seuraavana päivänä
              katevaraus raukeaa.
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

KinspiringFaqCustomerPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const KinspiringFaqCustomerPage = compose(connect(mapStateToProps), injectIntl)(
  KinspiringFaqCustomerPageComponent
);

export default KinspiringFaqCustomerPage;
