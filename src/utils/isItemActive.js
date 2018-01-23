import slugify from './slugify';

const toAnchor = (href = '') => {
  const index = href.indexOf('#');
  return index >= 0 ? href.substr(index) : '';
};

// TODO Account for redirect_from URLs somehow; they currently won't match.
// This comment should not be true anymore since we're using 300 redirects
const isItemActive = (location, item) => {
  if (location.hash) {
    if (item.href) {
      return location.hash === toAnchor(item.href);
    }
  }
  // Trim trailing slash
  const pathname = item.id !== 'index' && location.pathname.endsWith('/') ? location.pathname.substr(0, location.pathname.length - 1) : location.pathname;
  const slugId = pathname.split('/').slice(-1)[0];
  if (!slugId) {
    return item.id === 'index';
  }
  return slugId === slugify(item.id);
};

export default isItemActive;
