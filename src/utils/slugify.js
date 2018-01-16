import slugify from 'slugify';

export default (string, directory) => {
  const filename = slugify(string);
  if (filename === 'index') {
    return directory ? `/${directory}/` : '/';
  }
  return directory ? `/${directory}/${filename}` : filename;
};
