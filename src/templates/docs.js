import GitHubSlugger from 'github-slugger';
import React from 'react';
import PropTypes from 'prop-types';
import MicroFeedbackButtonExamples from '../components/MicroFeedbackButtonExamples';
import MarkdownPage from '../components/MarkdownPage';
import {name} from '../site-constants';
import isItemActive from '../utils/isItemActive';

import '../css/mf-button-preview.css';

const slugger = new GitHubSlugger();

const Docs = ({data, location}) => {
  const sectionList = JSON.parse(data.markdownRemark.fields.sectionList);
  // Add subitems for current page
  sectionList.forEach(list => {
    list.items.forEach(item => {
      if (isItemActive(location, item)) {
        item.subitems = data.markdownRemark.headings
          .filter(({value}) => Boolean(value))
          .map(({value, depth}) => {
            slugger.reset();
            const id = slugger.slug(value);
            return {
              depth,
              href: `${data.markdownRemark.fields.slug}#${id}`,
              id,
              title: value,
            };
          });
      } else {
        item.subitems = [];
      }
    });
  });
  return [
    <MarkdownPage
      key="content"
      directory={data.markdownRemark.fields.dir}
      location={location}
      markdownRemark={data.markdownRemark}
      sectionList={sectionList}
      titlePostfix={` - ${name}`}
    />,
    location.pathname === '/ui-components/microfeedback-button' ? (
      <MicroFeedbackButtonExamples key="examples" />
    ) : (
      false
    ),
  ];
};

Docs.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
      }
      fields {
        sectionList
        path
        slug
        dir
      }
    }
  }
`;

export default Docs;
