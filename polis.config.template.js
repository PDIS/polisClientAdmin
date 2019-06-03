
module.exports = {

  domainWhitelist: [
    "^localhost$",
    "^192\\.168\\.1\\.140$",
    "^pol\\.is",
    ".+\\.pol\\.is$",
    "^xip\\.io$",
    ".+\\.xip\\.io$",
  ],

  DISABLE_INTERCOM: true,
  DISABLE_PLANS: true,

  FB_APP_ID: '661042417336977',

  SCP_SUBDIR_PREPROD: 'preprod',
  SCP_SUBDIR_PROD: 'prod',

  SERVICE_URL: 'https://preprod.pol.is',

  UPLOADER: 'scp',

  USE_JOIN_LOGIN: false,
  JOIN_LOGIN_URL: ''
};
