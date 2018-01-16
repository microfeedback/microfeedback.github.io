import Link from 'gatsby-link';
import React from 'react';
import {colors, media} from '../theme';

const ArrowSvg = ({cssProps = {}}) => (
  <svg
    css={cssProps}
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 4.53657 8.69699">
    <path
      d={`
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      `}
      fill="currentColor"
    />
  </svg>
);

const style = {
  display: 'inline-block',
  fontSize: 16,

  [media.greaterThan('xlarge')]: {
    fontSize: 20,
  },
};

export const primaryStyle = {
  border: `1px solid ${colors.primary}`,
  borderRadius: '3px',
  color: colors.primary,

  padding: '15px 15px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease-out',

  [media.greaterThan('xlarge')]: {
    padding: '20px 30px',
  },

  ':hover': {
    background: colors.primary,
    color: 'white',
  },
};

const secondaryStyle = {
  color: colors.text,
  transition: 'color 0.2s ease-out',

  ':hover': {
    color: colors.white,
  },
};

const inverseStyle = {
  color: colors.white,
  transition: 'color 0.2s ease-out',

  ':hover': {
    color: colors.primary,
  },
};

const ButtonLink = ({children, type, ...rest}) => {
  let typeStyle;
  switch (type) {
    case 'primary': {
      typeStyle = primaryStyle;
      break;
    }
    case 'secondary': {
      typeStyle = secondaryStyle;
      break;
    }
    case 'inverse': {
      typeStyle = inverseStyle;
      break;
    }
    default: {
      break;
    }
  }

  return (
    <Link {...rest} css={[style, typeStyle]}>
      {children}
      {type === 'secondary' && <ArrowSvg cssProps={{marginLeft: 10}} />}
    </Link>
  );
};

export default ButtonLink;
