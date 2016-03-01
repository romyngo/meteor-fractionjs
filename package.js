Package.describe({
  name: 'romyngo:fractionjs',
  version: '3.2.5',
  // Brief, one-line summary of the package.
  summary: 'fraction.js meteor wrapper',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/romyngo/meteor-fractionjs.git',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['fraction.js'], 'client');
});
