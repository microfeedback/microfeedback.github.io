import React, {Component} from 'react';
import {colors, media} from '../theme';
import Sidebar from './Sidebar';
import ChevronSvg from './ChevronSvg';
import Container from './Container';

class StickyResponsiveSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  // eslint-disable-next-line no-undef
  handleClickMenu = () => {
    this.setState(prevState => ({open: !prevState.open}));
  };

  // eslint-disable-next-line no-undef
  closeNavMenu = () => {
    this.setState({open: false});
  };

  render() {
    const {open} = this.state;
    const smallScreenSidebarStyles = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'fixed',
      backgroundColor: colors.white,
      zIndex: 2,
      height: '100vh',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      pointerEvents: open ? 'auto' : 'none',
    };

    const smallScreenBottomBarStyles = {
      display: 'inline-block',
    };

    const iconOffset = open ? 8 : -4;
    const menuOpacity = open ? 1 : 0;
    const menuOffset = open ? 0 : 40;

    // TODO: role and aria props for 'close' button?
    return (
      <div>
        <div
          style={{
            opacity: menuOpacity,
            transition: 'opacity 0.5s ease',
          }}
          css={{
            [media.lessThan('small')]: smallScreenSidebarStyles,

            [media.greaterThan('medium')]: {
              marginRight: -999,
              paddingRight: 999,
              backgroundColor: colors.menu,
            },

            [media.between('medium', 'sidebarFixed', true)]: {
              position: 'fixed',
              zIndex: 2,
              height: '100%',
            },

            [media.greaterThan('small')]: {
              position: 'fixed',
              zIndex: 2,
              height: 'calc(100vh - 60px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              marginRight: -999,
              paddingRight: 999,
              backgroundColor: colors.menu,
              opacity: '1 !important',
            },

            [media.size('small')]: {
              height: 'calc(100vh - 40px)',
            },

            [media.between('medium', 'large')]: {
              height: 'calc(100vh - 50px)',
            },

            [media.greaterThan('sidebarFixed')]: {
              borderLeft: '1px solid #ececec',
            },
          }}>
          <div
            style={{
              transform: `translate(0px, ${menuOffset}px)`,
              transition: 'transform 0.5s ease',
            }}
            css={{
              marginTop: 60,
              [media.greaterThan('small')]: {
                transform: 'none !important',
              },
            }}>
            <Sidebar closeParentMenu={this.closeNavMenu} {...this.props} />
          </div>
        </div>
        <div
          css={{
            backgroundColor: colors.darker,
            opacity: 0.5,
            bottom: '50%', // iOS Safari's inert "bottom 44px"
            color: colors.text,
            display: 'none', // gets overriden at small screen sizes
            cursor: 'pointer',
            position: 'fixed',
            right: 20,
            zIndex: 3,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
            [media.lessThan('small')]: smallScreenBottomBarStyles,
          }}
          onClick={this.handleClickMenu}
          role="button"
          tabIndex={0}>
          <Container>
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                [media.between('medium', 'large')]: {
                  height: 50,
                },
                [media.lessThan('small')]: {
                  height: 60,
                  overflow: 'hidden',
                  alignItems: 'flex-start',
                },
              }}>
              <div
                css={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: colors.white,
                }}>
                <ChevronSvg
                  size={15}
                  cssProps={{
                    transform: `translate(2px, ${iconOffset}px) rotate(180deg)`,
                    transition: 'transform 0.2s ease',
                  }}
                />
                <ChevronSvg
                  size={15}
                  cssProps={{
                    transform: `translate(2px, ${0 - iconOffset}px)`,
                    transition: 'transform 0.2s ease',
                  }}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default StickyResponsiveSidebar;
