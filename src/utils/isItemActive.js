const isItemActive = (location, item) => {
  const pathname = item.id !== 'index' && location.pathname.endsWith('/') ? location.pathname.substr(0, location.pathname.length - 1) : location.pathname;
  return item.slug === pathname;
};

export default isItemActive;
