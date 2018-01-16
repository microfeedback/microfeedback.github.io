import React, {Component} from 'react';
import ButtonLink from '../components/ButtonLink';
import Container from '../components/Container';
import Flex from '../components/Flex';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import createOgUrl from '../utils/createOgUrl';
import logo from '../logos/logo-512-inverse-no-border.png';
import {colors, media, sharedStyles, fonts} from '../theme';
import {name, tagline} from '../site-constants';

const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginBottom: 65,
  },
};

const headingStyles = {
  '&&': {
    marginBottom: 20,
  },
};

const Marketing = ({title, children}) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1 33%',
      marginLeft: 40,

      '&:first-of-type': {
        marginLeft: 0,

        [media.lessThan('medium')]: {
          marginLeft: 10,
        },
      },

      [media.lessThan('medium')]: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginLeft: 0,
        whiteSpace: 'normal',
        width: '75%',
        marginRight: 20,
        paddingBottom: 40,

        '&:first-of-type': {
          marginTop: 0,
        },
      },
    }}>
    <h3
      css={[
        headingStyles,
        {
          '&&': {
            // Make specificity higher than the site-wide h3 styles.
            color: colors.subtle,
            paddingTop: 0,
            fontWeight: 300,
            fontSize: 20,

            [media.greaterThan('xlarge')]: {
              fontSize: 24,
              fontWeight: 200,
            },
          },
        },
      ]}>
      {title}
    </h3>
    {children}
  </div>
);

class Home extends Component {
  render() {
    return (
      <div
        css={{
          width: '100%',
          minHeight: 'calc(100vh - 60px)',
          [media.lessThan('large')]: {
            minHeight: 'calc(100vh - 50px)',
          },
        }}>
        <TitleAndMetaTags
          title={`${name} - ${tagline}`}
          ogUrl={createOgUrl('index.html')}
        />
        <header
          css={{
            backgroundColor: colors.white,
            color: colors.text,
          }}>
          <div
            css={{
              paddingTop: 45,
              paddingBottom: 20,

              [media.greaterThan('small')]: {
                paddingTop: 60,
                paddingBottom: 70,
              },
            }}>
            <div
              css={{
                // Content should be above absolutely-positioned hero image
                position: 'relative',
              }}>
              <Container>
                <img
                  css={{
                    display: 'block',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  }}
                  src={logo}
                  height="150"
                />
                <h1
                  css={{
                    textAlign: 'center',
                    margin: 0,
                    fontSize: 45,
                    letterSpacing: '0.01em',
                    [media.size('xsmall')]: {
                      fontSize: '1.667em',
                    },
                    [media.greaterThan('xlarge')]: {
                      fontSize: '3.333em',
                    },
                  }}>
                  {name}
                </h1>
                <p
                  css={{
                    paddingTop: 15,
                    textAlign: 'center',
                    fontSize: '1.4em',
                    letterSpacing: '0.01em',

                    [media.size('xsmall')]: {
                      fontSize: '1.3em',
                      maxWidth: '12em',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    },

                    [media.greaterThan('xlarge')]: {
                      paddingTop: 20,
                      fontSize: '1.667em',
                    },
                    fontFamily: fonts.brand.fontFamily,
                    fontWeight: 300,
                  }}>
                  {tagline}
                </p>
                <Flex
                  valign="center"
                  direction="column"
                  halign="center"
                  css={{
                    paddingTop: 40,
                    [media.greaterThan('xlarge')]: {
                      paddingTop: 65,
                    },
                  }}>
                  <ButtonLink to="/getting-started/" type="primary">
                    Get started
                  </ButtonLink>
                </Flex>
              </Container>
            </div>
          </div>
        </header>

        <Container>
          <div css={sharedStyles.markdown}>
            <section
              css={[
                sectionStyles,
                {
                  [media.lessThan('medium')]: {
                    marginTop: 0,
                    paddingTop: 30,
                    position: 'relative',
                  },
                },
              ]}>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'row',

                  [media.lessThan('medium')]: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  },
                }}>
                <Marketing title="Services You Use">
                  MicroFeedback integrates with the issue tracking service you
                  already use, such as GitHub or JIRA.
                </Marketing>
                <Marketing title="Easy Deployment">
                  Deploy a backend in one command with either ZEIT now or Heroku.
                </Marketing>
                <Marketing title="Free and Open Source">
                  MicroFeedback is free to use and liberally licensed (MIT).
                </Marketing>
              </div>
            </section>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
