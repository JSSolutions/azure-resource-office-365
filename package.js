Package.describe({
  name: 'jss:azure-resource-office-365',
  summary: "Allows users to authorize themselves against the office 365 rest APIs",
  version: "1.0.1",
  git: "https://github.com/JSSolutions/azure-resource-office-365"
});

Package.onUse(function (api) {
  api.versionsFrom('1.1');
  api.use(['jss:azure-active-directory@1.0.1', 'underscore'], ['server']);
  api.addFiles('office365Resource.js', 'server');
});
