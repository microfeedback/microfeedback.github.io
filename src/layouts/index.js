// Polyfills for IE
import 'array-from';
import 'string.prototype.includes';
import 'string.prototype.repeat';

import React, {Component} from 'react';
import Flex from '../components/Flex';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {microfeedbackURL} from '../site-constants';

// Import global styles
import '../prism-styles';
import '../css/reset.css';
import '../css/microfeedback-button.css';

let microfeedback;
if (typeof window !== 'undefined') {
  microfeedback = require('microfeedback-button');
}

class Template extends Component {
  componentDidMount() {
    this.microfeedback = microfeedback({
      url: microfeedbackURL,
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
        }}>
        <Header location={location} disappearingBorder={!layoutHasSidebar} />
        <Flex
          direction="column"
          shrink="0"
          grow="1"
          valign="stretch"
          css={{
            flex: '1 0 auto',
          }}>
          {children()}
        </Flex>
        <Footer layoutHasSidebar={layoutHasSidebar} />
      </div>
    );
  }
}

export default Template;
