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

import css from './KinspiringContactUsPage.css';
import image from './contact-us-1440.jpg';

const KinspiringContactUsPage = () => {
  const { siteTwitterHandle, siteFacebookPage, siteInstagramPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Ota yhteyttä"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ContactPage',
        description: 'Ota yhteyttä Kinspiringiin',
        name: 'Ota yhteyttä',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Kiva kuulla sinusta!</h1>
          <img className={css.coverImage} src={image} alt="Heta ja Krista" />

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p>
                Onko sinulla meille kysymyksiä, palautetta tai yhteistyöehdotus? Kuulemme
                mielellämme sinusta. Voit lähettää meille sähköpostia{' '}
                <ExternalLink href="mailto:hello@kinspiring.com">hello@kinspiring.com</ExternalLink>{' '}
                tai WhatsApp-viestiä +358505662798.
              </p>
              <p>
                Löydät meidät myös <ExternalLink href={siteFacebookPage}>Facebookissa</ExternalLink>,{' '}
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

export default KinspiringContactUsPage;
