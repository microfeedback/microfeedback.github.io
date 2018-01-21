import React from 'react';

import findSectionForPath from '../utils/findSectionForPath';
import createOgUrl from '../utils/createOgUrl';
import {sharedStyles} from '../theme';
import {githubURL} from '../site-constants';
import TitleAndMetaTags from './TitleAndMetaTags';
import MarkdownHeader from './MarkdownHeader';
import Container from './Container';
import Flex from './Flex';
import StickyResponsiveSidebar from './StickyResponsiveSidebar';
import NavigationFooter from './NavigationFooter';

const MarkdownPage = ({
  directory,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '',
}) => {
  const titlePrefix = markdownRemark.frontmatter.title || '';

  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        ...sharedStyles.fluid,
        zIndex: 0,
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />
      <div css={{flex: '1 0 auto'}}>
        <Container>
          <div css={sharedStyles.articleLayout.container}>
            <Flex type="article" direction="column" grow="1" halign="stretch">
              <MarkdownHeader title={titlePrefix} />
              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                />

                {markdownRemark.fields.path && (
                  <div css={{marginTop: 80}}>
                    <a
                      css={sharedStyles.articleLayout.editLink}
                      href={`${githubURL}/tree/master/content/${
                        markdownRemark.fields.path
                      }`}>
                      Edit this page
                    </a>
                  </div>
                )}
              </div>
            </Flex>

            <div css={sharedStyles.articleLayout.sidebar}>
              <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                directory={directory}
                defaultActiveSection={findSectionForPath(
                  location.pathname,
                  sectionList
                )}
                location={location}
                sectionList={sectionList}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* TODO Read prev/next from index map, not this way */}
      {(markdownRemark.frontmatter.next || markdownRemark.frontmatter.prev) && (
        <NavigationFooter
          location={location}
          next={markdownRemark.frontmatter.next}
          prev={markdownRemark.frontmatter.prev}
        />
      )}
    </Flex>
  );
};

export default MarkdownPage;
