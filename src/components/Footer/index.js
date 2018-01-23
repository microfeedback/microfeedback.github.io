import React from 'react';
import Container from '../Container';
import MetaTitle from '../MetaTitle';
import {colors, media} from '../../theme';
import navSections from '../../nav-sections';
import {copyrightOwner, githubOrgURL, githubURL, copyrightOwnerURL} from '../../site-constants';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import ExternalFooterLink from './ExternalFooterLink';

const Footer = ({layoutHasSidebar = false}) => (
  <footer
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingRight: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingRight: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingRight: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingLeft: 40,
            },
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark>Docs</MetaTitle>
            {navSections.map(section => {
              const url = section[0];
              const title = section[1];
              return (
                <FooterLink key={url} to={url}>
                  {title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark>Useful links</MetaTitle>
            <ExternalFooterLink
              href={githubOrgURL}
              target="_blank"
              rel="noopener">
              MicroFeedback on GitHub
            </ExternalFooterLink>
            <ExternalFooterLink href={githubURL} target="_blank" rel="noopener">
              Website Source
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar} />
        </div>
        <section
          css={{
            paddingTop: 40,
            display: 'block !important', // Override 'Installation' <style> specifics

            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3)',
              order: -1,
            },
            [media.greaterThan('large')]: {
              order: -1,
              width: layoutHasSidebar ? null : 'calc(100% / 3)',
            },
            [media.lessThan('large')]: {
              textAlign: 'center',
              width: '100%',
              paddingTop: 40,
            },
          }}>
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
              fontSize: '0.875em',
            }}>
            Copyright © {new Date().getFullYear() + ' '}
            <a
              css={{
                ':hover': {
                  color: colors.primary,
                },
              }}
              href={copyrightOwnerURL}
              target="_blank"
              rel="noopener noreferrer"
              >{copyrightOwner}
            </a>
          </p>
        </section>
      </div>
    </Container>
  </footer>
);

export default Footer;
