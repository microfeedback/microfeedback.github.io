import React from 'react';
import {colors} from '../../theme';
import ExternalLinkSvg from '../ExternalLinkSvg';

const ExternalFooterLink = ({children, href, target, rel}) => (
  <a
    css={{
      lineHeight: 2,
      ':hover': {
        color: colors.primary,
      },
    }}
    href={href}
    target={target}
    rel={rel}>
    {children}
    <ExternalLinkSvg
      cssProps={{
        verticalAlign: -2,
        display: 'inline-block',
        marginLeft: 5,
        color: colors.subtle,
      }}
    />
  </a>
);

export default ExternalFooterLink;
