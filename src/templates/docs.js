import slugify from 'slugify';
import React from 'react';
import PropTypes from 'prop-types';
import MicroFeedbackButtonExamples from '../components/MicroFeedbackButtonExamples';
import MarkdownPage from '../components/MarkdownPage';
import {name} from '../site-constants';
import sectionLists from '../section-lists';

import '../css/mf-button-preview.css';

const Docs = ({data, location}) => {
  const sectionList = sectionLists.filter(
    each => each[0] === data.markdownRemark.fields.dir
  )[0][1];
  sectionList.forEach(list => {
    list.items.forEach(item => {
      item.subitems = data.markdownRemark.headings
        .filter(({value}) => Boolean(value))
        .map(({value, depth}) => {
          const slug = slugify(value, {lower: true});
          return {
            depth,
            href: `${data.markdownRemark.fields.slug}#${slug}`,
            id: slug,
            title: value,
          };
        });
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
        path
        slug
        dir
      }
    }
  }
`;

export default Docs;
