import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { SectionThumbnailLinks } from '../../components';
import { stringify } from '../../util/urlHelpers';

import link1Image from './images/link1-648x448.jpg';
import link2Image from './images/link2-648x448.jpg';
import link3Image from './images/link3-648x448.jpg';

const BOUNDS = '60.41,25.52,60.05,24.18';

const searchQuery = category => {
  const params = {
    bounds: BOUNDS,
    pub_category: category,
  };
  return `?${stringify(params)}`;
};

const KinspiringSectionLinks = props => {
  const { intl } = props;

  const links = [
    {
      imageUrl: link1Image,
      imageAltText: intl.formatMessage({
        id: 'KinspiringSectionLinks.link1ImageAltText',
      }),
      linkProps: {
        type: 'NamedLink',
        name: 'SearchPage',
        to: { search: searchQuery('matkarattaat') },
      },
      text: intl.formatMessage({
        id: 'KinspiringSectionLinks.link1Text',
      }),
    },
    {
      imageUrl: link2Image,
      imageAltText: intl.formatMessage({
        id: 'KinspiringSectionLinks.link2ImageAltText',
      }),
      linkProps: {
        type: 'NamedLink',
        name: 'SearchPage',
        to: { search: searchQuery('kantovalineetJaRinkat') },
      },
      text: intl.formatMessage({
        id: 'KinspiringSectionLinks.link2Text',
      }),
    },
    {
      imageUrl: link3Image,
      imageAltText: intl.formatMessage({
        id: 'KinspiringSectionLinks.link3ImageAltText',
      }),
      linkProps: {
        type: 'NamedLink',
        name: 'SearchPage',
        to: { search: searchQuery('kuljetuslaukutJaVaunutarvikkeet') },
      },
      text: intl.formatMessage({
        id: 'KinspiringSectionLinks.link3Text',
      }),
    },
  ];

  const heading = <FormattedMessage id="KinspiringSectionLinks.heading" />;
  const subHeading = <FormattedMessage id="KinspiringSectionLinks.subHeading" />;

  return (
    <SectionThumbnailLinks
      linksPerRow={3}
      links={links}
      heading={heading}
      subHeading={subHeading}
    />
  );
};

export default injectIntl(KinspiringSectionLinks);
