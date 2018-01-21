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
        }}>
        <TitleAndMetaTags
          title={`${name} - ${tagline}`}
          ogUrl={createOgUrl('index.html')}
        />
        <div
          css={{
            ...sharedStyles.fluid,
          }}
        >
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
                      letterSpacing: '0.01em',
                      fontSize: '2em',
                      [media.greaterThan('medium')]: {
                        fontSize: '2.5em',
                      },
                      [media.greaterThan('large')]: {
                        fontSize: '3em',
                      },
                      [media.greaterThan('xlarge')]: {
                        fontSize: '3.333em',
                      },
                    }}>
                    {name}
                  </h1>
                  <h2
                    css={{
                      paddingTop: 15,
                      textAlign: 'center',
                      fontSize: '1.1em',
                      letterSpacing: '0.01em',

                      [media.size('xsmall')]: {
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      },
                      [media.greaterThan('small')]: {
                        fontSize: '1.3em',
                      },
                      [media.greaterThan('large')]: {
                        fontSize: '1.5em',
                      },

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 20,
                      },
                      fontFamily: fonts.brand.fontFamily,
                      fontWeight: 300,
                    }}>
                    {tagline}
                  </h2>
                  <Flex
                    valign="center"
                    direction="column"
                    halign="center"
                    css={{
                      paddingTop: 20,
                      [media.greaterThan('xlarge')]: {
                        paddingTop: 40,
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
                  <Marketing title="No Sign-up Required">
                    Your users do not need a GitHub or Jira account to
                    post feedback to your issue tracker.
                  </Marketing>
                  <Marketing title="Easy Deployment">
                    Host your own MicroFeedback backend with one command using either ZEIT now or Heroku.
                  </Marketing>
                  <Marketing title="Free and Open Source">
                    MicroFeedback is free to use and liberally licensed (MIT).
                  </Marketing>
                </div>
              </section>
            </div>
          </Container>
        </div>
        <section
          css={{
            background: colors.dark,
            color: colors.white,
            paddingTop: 45,
            paddingBottom: 45,
          }}>
          <Container>
            <Flex halign="center" valign="center">
              <span
                css={{
                  ...fonts.brand,
                  fontWeight: 300,
                  marginRight: 30,
                  fontSize: '1.1em',
                  color: colors.subtleOnDark,
                  [media.greaterThan('small')]: {
                    fontSize: '1.5em',
                  },
                }}>
                The easiest way to collect user feedback
              </span>
              <ButtonLink to="/getting-started/" type="primary">
                Get Started
              </ButtonLink>
            </Flex>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
