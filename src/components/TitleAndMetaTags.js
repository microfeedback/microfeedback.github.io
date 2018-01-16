import Helmet from 'react-helmet';
import React from 'react';

import {tagline} from '../site-constants';

const TitleAndMetaTags = ({title, ogDescription, ogUrl}) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:image" content="/logo-og.png" />
      <meta property="og:description" content={ogDescription || tagline} />
    </Helmet>
  );
};

export default TitleAndMetaTags;
