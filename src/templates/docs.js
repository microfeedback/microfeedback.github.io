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
