// Polyfills for IE
import 'array-from';
import 'string.prototype.includes';
import 'string.prototype.repeat';

import React, {Component} from 'react';
import microfeedback from 'microfeedback-button';
import Flex from '../components/Flex';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {microfeedbackURL} from '../site-constants';

// Import global styles
import '../prism-styles';
import '../css/reset.css';
import '../css/microfeedback-button.css';
import {media} from '../theme';

class Template extends Component {
  componentDidMount() {
    this.microfeedback = microfeedback({
      url: microfeedbackURL,
      reverseButtons: true,
    });
  }
  componentWillUnmount() {
    this.microfeedback.destroy();
  }
  render() {
    const {children, location} = this.props;
    const layoutHasSidebar = location.pathname !== '/';

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 60px)',
          [media.lessThan('large')]: {
            minHeight: 'calc(100vh - 50px)',
          },
        }}>
        <Header location={location} />
        <Flex
          direction="column"
          shrink="0"
          grow="1"
          valign="stretch"
          css={{
            flex: '1 0 auto',
            marginTop: 60,
            [media.between('medium', 'large')]: {
              marginTop: 50,
            },
            [media.lessThan('medium')]: {
              marginTop: 40,
            },
          }}>
          {children()}
        </Flex>
        <Footer layoutHasSidebar={layoutHasSidebar} />
      </div>
    );
  }
}

export default Template;
