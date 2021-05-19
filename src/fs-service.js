const globby = require('globby');

const findFiles = async criteria => {
  // options: https://github.com/mrmlnc/fast-glob#options-3
  let result = await globby(criteria, { absolute: true, dot: true, extglob: true });
  return Promise.resolve(result);
}

module.exports = {
  findFiles,
};
