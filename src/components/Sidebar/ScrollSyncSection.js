import React, {Component} from 'react';
import Section from './Section';

const _getItemIds = items =>
  items
    .map(item => {
      let subItemIds = [];
      if (item.subitems) {
        subItemIds = item.subitems.map(subitem => subitem.id);
      }
      return [item.id, ...subItemIds];
    })
    .reduce((prev, current) => prev.concat(current));

const _getElementTopOffsetsById = ids =>
  ids
    .map(id => {
      const element = document.getElementById(id);
      if (!element) {
        return null;
      }
      return {
        id,
        offsetTop: element.offsetTop,
      };
    })
    .filter(item => item);

class ScrollSyncSection extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeItemId: '',
      itemTopOffsets: [],
    };
  }

  componentDidMount() {
    this.calculateItemTopOffsets();

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  // eslint-disable-next-line no-undef
  calculateItemTopOffsets = () => {
    const {section} = this.props;

    const itemIds = _getItemIds(section.items);
    this.setState({
      itemTopOffsets: _getElementTopOffsetsById(itemIds),
    });
  }

  // eslint-disable-next-line no-undef
  handleResize = () => {
    this.calculateItemTopOffsets();
    this.handleScroll();
  }

  // eslint-disable-next-line no-undef
  handleScroll = () => {
    const {itemTopOffsets} = this.state;
    const item = itemTopOffsets.find((itemTopOffset, i) => {
      const nextItemTopOffset = itemTopOffsets[i + 1];
      if (nextItemTopOffset) {
        return (
          window.scrollY >= itemTopOffset.offsetTop &&
          window.scrollY < nextItemTopOffset.offsetTop
        );
      }
      return window.scrollY >= itemTopOffset.offsetTop;
    });
    this.setState({
      activeItemId: item ? item.id : '',
    });
  }

  render() {
    const {activeItemId} = this.state;
    return <Section isScrollSync activeItemId={activeItemId} {...this.props} />;
  }
}

export default ScrollSyncSection;
