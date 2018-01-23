import Link from 'gatsby-link';
import React from 'react';

import {colors, media} from '../../theme';
import slugify from '../../utils/slugify';

const activeLinkCss = {
  fontWeight: 700,
};

const activeLinkBefore = {
  width: 4,
  height: 25,
  borderLeft: `4px solid ${colors.text}`,
  paddingLeft: 16,
  position: 'absolute',
  left: 0,

  [media.greaterThan('largerSidebar')]: {
    left: 15,
  },
};

const subItemActiveLinkBefore = {
  borderLeft: `4px solid ${colors.primary}`,
};

const linkCss = {
  color: colors.text,
  display: 'inline-block',
  borderBottom: '1px solid transparent',
  transition: 'border 0.2s ease',
  marginTop: 5,

  '&:hover': {
    color: colors.primary,
  },
};

const SectionLink = ({isActive, isSubItemActive, item, directory}) => {
  const to = item.href || slugify(item.id, directory);
  return (
    <Link
      css={[linkCss, isActive && activeLinkCss]}
      to={to}>
      {(isActive || isSubItemActive) && <span css={[activeLinkBefore, isSubItemActive && subItemActiveLinkBefore]} />}
      {item.title}
    </Link>
  );
};

export default SectionLink;
