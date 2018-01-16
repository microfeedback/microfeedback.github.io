import React from 'react';
import Link from 'gatsby-link';

import Container from '../Container';
import ExternalLinkSvg from '../ExternalLinkSvg';
import logo from '../../logos/logo-48.png';
import {colors, fonts, media} from '../../theme';
import {name, githubOrgURL} from '../../site-constants';
import sectionLists from '../../section-lists';
import HeaderLink from './HeaderLink';

const Header = ({location}) => (
  <header
    css={{
      backgroundColor: colors.white,
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px',
      color: colors.black,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          [media.lessThan('large')]: {
            height: 50,
          },
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.text,

            ':focus': {
              outline: 0,
            },

            ':hover': {
              color: colors.primary,
            },

            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/">
          <img src={logo} alt="" height="30" />
          <span
            css={{
              color: 'inherit',
              marginLeft: 10,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '20px',
              [media.lessThan('large')]: {
                fontSize: 16,
                marginTop: 1,
              },
              [media.lessThan('small')]: {
                // Visually hidden
                position: 'absolute',
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)',
                height: 1,
                width: 1,
                margin: -1,
                padding: 0,
                border: 0,
              },
              ...fonts.brand,
            }}>
            {name}
          </span>
        </Link>

        <nav
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',
            width: '60%',

            [media.size('xsmall')]: {
              flexGrow: '1',
              width: 'auto',
            },
            [media.greaterThan('xlarge')]: {
              width: null,
            },
            // [media.lessThan('small')]: {
            //   maskImage:
            //     'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
            // },
          }}>
          {sectionLists.map(section => {
            const title = section[2];
            const id = section[0];
            return (
              <HeaderLink
                key={id}
                isActive={location.pathname.includes(`/${id}/`)}
                title={title}
                to={`/${id}/`}
              />
            );
          })}
        </nav>

        <div
          css={{
            [media.lessThan('medium')]: {
              display: 'none',
            },
            [media.greaterThan('large')]: {
              width: 'calc(100% / 6)',
            },
          }}>
          <a
            css={{
              padding: '5px 10px',
              marginLeft: 10,
              whiteSpace: 'nowrap',
              float: 'right',
              ...fonts.small,

              ':hover': {
                color: colors.primary,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.menu,
                borderRadius: 15,
              },
            }}
            href={githubOrgURL}
            target="_blank"
            rel="noopener noreferrer">
            GitHub
            <ExternalLinkSvg
              cssProps={{
                marginLeft: 5,
                verticalAlign: -2,
                color: colors.subtle,
              }}
            />
          </a>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
