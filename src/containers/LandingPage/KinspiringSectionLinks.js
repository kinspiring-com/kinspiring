import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { SectionThumbnailLinks } from '../../components';
import { stringify } from '../../util/urlHelpers';

import link1Image from './images/link1-648x448.jpg';
import link2Image from './images/link2-648x448.jpg';
import link3Image from './images/link3-648x448.jpg';

const searchLinkProps = category => {
  const params = {
    bounds: '60.41,25.52,60.05,24.18', // Uusimaa
    pub_category: category,
  };
  return {
    type: 'NamedLink',
    name: 'SearchPage',
    to: { search: `?${stringify(params)}` },
  };
};

const KinspiringSectionLinks = props => {
  const { intl } = props;

  const links = [
    {
      imageUrl: link1Image,
      imageAltText: intl.formatMessage({
        id: 'KinspiringSectionLinks.link1ImageAltText',
      }),
      linkProps: searchLinkProps('matkarattaat'),
      text: intl.formatMessage({
        id: 'KinspiringSectionLinks.link1Text',
      }),
    },
    {
      imageUrl: link2Image,
      imageAltText: intl.formatMessage({
        id: 'KinspiringSectionLinks.link2ImageAltText',
      }),
      linkProps: searchLinkProps('kantovalineetJaRinkat'),
      text: intl.formatMessage({
        id: 'KinspiringSectionLinks.link2Text',
      }),
    },
    {
      imageUrl: link3Image,
      imageAltText: intl.formatMessage({
        id: 'KinspiringSectionLinks.link3ImageAltText',
      }),
      linkProps: searchLinkProps('kuljetuslaukutJaVaunutarvikkeet'),
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
