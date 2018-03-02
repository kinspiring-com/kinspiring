import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { SectionThumbnailLinks } from '../../components';

import link1Image from './images/link1-648x448.jpg';
import link2Image from './images/link2-648x448.jpg';
import link3Image from './images/link3-648x448.jpg';

// ================ EDIT LINKS BELOW ================ //
const LINK_QUERY_1 = '?';
const LINK_QUERY_2 = '?';
const LINK_QUERY_3 = '?';
// ================ EDIT LINKS ABOVE ================ //

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
        to: { search: LINK_QUERY_1 },
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
        to: { search: LINK_QUERY_2 },
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
        to: { search: LINK_QUERY_3 },
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
