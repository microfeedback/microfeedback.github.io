import React from 'react';
import Container from '../components/Container';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import {name, githubURL} from '../site-constants';
import {sharedStyles} from '../theme';

const issueURL = `${githubURL}/issues/new?title=Broken link`;

const PageNotFound = () => (
  <Container>
    <div css={[sharedStyles.articleLayout.container, {marginTop: 60}]}>
      <div css={sharedStyles.articleLayout.content}>
        <h1>Page Not Found</h1>
        <TitleAndMetaTags title={`${name} - Page Not Found`} />
        <div css={sharedStyles.markdown}>
          <p>We couldn&apos;t find what you were looking for.</p>
          <p>
            Please <a href={issueURL} target="_blank" rel="noopener noreferrer">post an issue</a>{' '}
            about the broken link.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default PageNotFound;
