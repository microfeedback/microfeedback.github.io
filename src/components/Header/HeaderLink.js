import Link from 'gatsby-link';
import React from 'react';
import {colors, media} from '../../theme';

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.text,
  textAlign: 'center',
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,
  ':hover': {
    color: colors.primary,
  },
  ':focus': {
    outline: 0,
    backgroundColor: colors.menu,
    color: colors.subtle,
  },

  [media.size('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  [media.lessThan('small')]: {
    fontSize: '4vw',
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
  },
};

const activeStyle = {
  color: colors.text,

  [media.greaterThan('small')]: {
    position: 'relative',
  },
};

const activeAfterStyle = {
  [media.greaterThan('small')]: {
    position: 'absolute',
    bottom: -1,
    height: 4,
    background: colors.text,
    left: 0,
    right: 0,
    zIndex: 1,
  },
};

const HeaderLink = ({isActive, title, to}) => (
  <Link css={[style, isActive && activeStyle]} to={to}>
    {title}
    {isActive && <span css={activeAfterStyle} />}
  </Link>
);

export default HeaderLink;
