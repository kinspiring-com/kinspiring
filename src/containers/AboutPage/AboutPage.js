import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1440.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage, siteInstagramPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Tietoa meistä"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'Tietoa Kinspiringista',
        name: 'Tietoa meistä',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Vuokraa lastentarvikkeita turvallisesti</h1>
          <img className={css.coverImage} src={image} alt="Heta ja Krista" />

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <h2>Kinspiringissa perheet vuokraavat lastentarvikkeita toisilleen turvallisesti.</h2>

              <p>
                Kinspiring sai alkunsa kesällä 2016, kun Krista Pohjanlehdon kaksivuotiaan pojan
                matkarattaat lojuivat jo toista viikkoa eteisen lattialla. Tahto-Otso ei ollut
                suostunut istumaan laadukkaissa rattaissa pitkään aikaan, eikä pienirenkaisilla
                rattailla loskasäässä olisi ajeltukaan.
              </p>

              <p>
                – Ehkä Otso saisi jonain päivänä pikkusisaruksen ja rattaat pääsisivät taas
                käyttöön, mutta mitä ihmettä me nyt niillä teemme? Krista mietti.
              </p>

              <p>
                Krista avasi tietokoneen ja teki rattaista vuokrausilmoituksen lapsiperheiden
                Facebook-ryhmään. Puhelin piippasi taukoamatta seuraavina päivinä. Yksi halusi
                vuokrata matkarattaat kahden viikon etelänlomaa varten ja toinen Ruotsinlaivalle.
                Kolmas tahtoi testiajaa rattaat ennen ostopäätöksen tekemistä.
              </p>

              <p>
                Suuri kysyntä sai Kristan pohtimaan, miten perheet voisivat vuokrata
                lastentarvikkeita toisilleen turvallisesti ja helposti.
              </p>

              <p>
                – Täytyyhän muillakin perheille olla samoja haasteita? Monien lastentarvikkeiden
                tarve on kuitenkin kausiluontoista ja lyhytaikaista, Krista pohti.
              </p>

              <p>
                Ajatuksesta inspiroituneena Krista perusti muutamaa viikkoa myöhemmin Kinspiringin.
              </p>

              <p>
                Tammikuussa 2017 Otson tuleva pikkusisarus potki iloisesti Kristan vatsassa.
                Toisella puolella Lauttasaarta Heta Kärki katseli onnellisena nukkuvaa
                Eeli-vauvaansa. Markkinointialalta tutun Kristan perustama Kinspiring innosti häntä:
                hän näki Kinspiringissa voimaa tuomaan lapsiperheitä yhteen jakamaan tavaroiden
                lisäksi myös kokemuksia.
              </p>

              <p>Pian Kristasta ja Hetasta tuli Kinspiring-tiimi.</p>

              <p>
                Me haluamme, että jokaisella perheellä on mahdollisuus käyttää laadukkaita
                lastentarvikkeita ja uskomme jakamistalouden ratkaisevat monia lapsiperheiden
                haasteita. Antamalla lastentarvikkeesi vuokralle tienaat ja annat muidenkin nauttia
                hyvästä laadusta. Vuokraamalla tarpeeseen edistät kestävää kehitystä ja säästät
                rahaa.
              </p>

              <p>
                Voit rekisteröityä Kinspiringiin täällä. Löydät meidät myös{' '}
                <ExternalLink href={siteFacebookPage}>Facebookissa</ExternalLink>,{' '}
                <ExternalLink href={siteInstagramPage}>Instagramissa</ExternalLink> ja{' '}
                <ExternalLink href={siteTwitterPage}>Twitterissä</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
