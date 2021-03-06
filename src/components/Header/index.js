import React from 'react';
import Link from 'gatsby-link';

import Container from '../Container';
import ExternalLinkSvg from '../ExternalLinkSvg';
import logo from '../../logos/logo-48.png';
import {colors, fonts, media, sharedStyles} from '../../theme';
import {name, githubOrgURL} from '../../site-constants';
import navSections from '../../nav-sections';
import HeaderLink from './HeaderLink';

const PAD = 30;

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    let topOfPage;
    if (typeof window === 'undefined') {
      topOfPage = true;
    } else {
      topOfPage = window.scrollY < PAD;
    }
    this.state = {
      topOfPage,
    };
  }
  componentDidMount() {
    const {disappearingBorder} = this.props;
    if (disappearingBorder) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    const {disappearingBorder} = this.props;
    if (disappearingBorder) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  // eslint-disable-next-line no-undef
  handleScroll = () => {
    this.setState({topOfPage: window.scrollY < PAD});
  };

  render() {
    const {location, disappearingBorder} = this.props;
    const {topOfPage} = this.state;
    const showBoxShadow = disappearingBorder ? !topOfPage : true;
    return (
      <header
        css={[
          {
            backgroundColor: colors.white,
            color: colors.black,
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            top: 0,
            left: 0,
          },
          showBoxShadow && {boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px'},
        ]}>
        <Container>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              ...sharedStyles.header,
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
              <img
                css={{marginBottom: 0}}
                src={logo}
                alt="MicroFeedback logo"
                height="30"
              />
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
              }}>
              {navSections.map(section => {
                const url = section[0];
                const title = section[1];
                return (
                  <HeaderLink
                    key={url}
                    isActive={location.pathname.includes(url)}
                    title={title}
                    to={url}
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
                  fontSize: '0.824em',

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
  }
}

export default Header;
