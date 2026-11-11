// Preview build for the SDK v3 reference: the real config with only the
// current docs version ("next") served at the root, so a build fits in a
// few GB and takes minutes. Not used by CI. Run:
//   yarn docusaurus build --config docusaurus.sdk-v3-preview.config.js --out-dir build-sdk-v3
const config = require('./docusaurus.config.js');

const preset = config.presets.find(
  p => Array.isArray(p) && p[0] === '@docusaurus/preset-classic',
);
const docs = preset[1].docs;
docs.onlyIncludeVersions = ['current'];
docs.lastVersion = 'current';
docs.versions = {current: {label: 'next (SDK v3 preview)', path: '', banner: 'none', noIndex: true}};
// The llms-txt plugin walks every version in versions.json; skip it here.
// The redirects plugin points at /next/... and /vX.Y/... paths that this build
// does not have; drop it too.
config.plugins = config.plugins.filter(
  p =>
    p !== './plugins/llms-txt' &&
    !(Array.isArray(p) && p[0] === '@docusaurus/plugin-client-redirects'),
);
// The version dropdown has a single entry in this build.
config.themeConfig.navbar.items = config.themeConfig.navbar.items.filter(
  i => i.type !== 'docsVersionDropdown',
);
module.exports = config;
