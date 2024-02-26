module.exports = {
  reactStrictMode: true,
  env: {
	VG_API_HOST: process.env.VG_API_HOST,
  PUBNUB_PUBLISH_KEY : process.env.PUBNUB_PUBLISH_KEY,
  PUBNUB_SUBSCRIBE_KEY : process.env.PUBNUB_SUBSCRIBE_KEY,
  PUBNUB_USER_ID : process.env.PUBNUB_USER_ID,
  ADV_ANALYTICS_API_HOST:process.env.ADV_ANALYTICS_API_HOST,

  akamai_clientToken: process.env.akamai_clientToken,
  akamai_clientSecret: process.env.akamai_clientSecret,
  akamai_accessToken: process.env.akamai_accessToken,
  akamai_baseUri: process.env.akamai_baseUri,
  akamai_contractId: process.env.akamai_contractId,
  akamai_productId: process.env.akamai_productId
  },
  images:{
    domains:['videographond.akamaized.net']
  },
  i18n: {
    locales: ['en', 'hi','ar', 'te'],
    defaultLocale: 'en',
    localeDetection:false,
  }
}

