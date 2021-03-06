import React, {Component} from 'react';
import Flex from '../Flex';
import {media} from '../../theme';
import ScrollSyncSection from './ScrollSyncSection';

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeSection: props.defaultActiveSection,
    };
  }

  render() {
    const {
      closeParentMenu,
      directory,
      location,
      sectionList,
    } = this.props;
    const {activeSection} = this.state;
    return (
      <Flex
        type="nav"
        direction="column"
        halign="stretch"
        css={{
          width: '100%',
          paddingLeft: 20,
          position: 'relative',

          [media.greaterThan('largerSidebar')]: {
            paddingLeft: 40,
          },

          [media.lessThan('small')]: {
            paddingBottom: 100,
          },
        }}>
        {sectionList.map(section => (
          <ScrollSyncSection
            key={section.title}
            directory={directory}
            isActive={activeSection === section || sectionList.length === 1}
            location={location}
            onLinkClick={closeParentMenu}
            section={section}
          />
        ))}
      </Flex>
    );
  }
}

export default Sidebar;
