const helmet = require('helmet');

const dev = process.env.REACT_APP_ENV === 'development';
const self = "'self'";
const unsafeInline = "'unsafe-inline'";
const unsafeEval = "'unsafe-eval'";
const data = 'data:';
const devImagesMaybe = dev ? ['*.localhost:8000'] : [];

// Default CSP whitelist.
//
// NOTE: Do not change these in the customizations, make custom
// additions within the exported function in the bottom of this file.
const defaultDirectives = {
  baseUri: [self],
  defaultSrc: [self],
  connectSrc: [
    self,
    process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL,
    'maps.googleapis.com',

    // Google Analytics
    'www.google-analytics.com',
    'stats.g.doubleclick.net',

    'sentry.io',
    '*.stripe.com',
  ],
  fontSrc: [self, data, 'assets-sharetribecom.sharetribe.com', 'fonts.gstatic.com'],
  frameSrc: [self, '*.stripe.com'],
  imgSrc: [
    self,
    data,
    ...devImagesMaybe,
    '*.imgix.net',
    'sharetribe.imgix.net', // Safari 9.1 didn't recognize asterisk rule.

    // Styleguide placeholder images
    'lorempixel.com',
    'via.placeholder.com',

    'maps.googleapis.com',
    '*.gstatic.com',
    '*.googleapis.com',
    '*.ggpht.com',

    // Google Analytics
    'www.google.com',
    'www.google-analytics.com',
    'stats.g.doubleclick.net',

    '*.stripe.com',
  ],
  scriptSrc: [
    self,
    unsafeInline,
    unsafeEval,
    data,
    'maps.googleapis.com',
    '*.google-analytics.com',
    'js.stripe.com',
  ],
  styleSrc: [self, unsafeInline, 'fonts.googleapis.com'],
};

/**
 * Middleware for creating a Content Security Policy
 *
 * @param {String} reportUri URL where the browser will POST the
 * policy violation reports
 *
 * @param {Boolean} enforceSsl When SSL is enforced, all mixed content
 * is blocked/reported by the policy
 *
 * @param {Boolean} reportOnly In the report mode, requests are only
 * reported to the report URL instead of blocked
 */
module.exports = (reportUri, enforceSsl, reportOnly) => {
  // ================ START CUSTOM CSP URLs ================ //

  // Add custom CSP whitelisted URLs here. See commented example
  // below. For format specs and examples, see:
  // https://content-security-policy.com/

  const {
    scriptSrc = [self],
    imgSrc = [self],
    frameSrc = [self],
    formAction = [self],
  } = defaultDirectives;

  // Kinspiring custom: Facebook Pixel, Squarespace
  const customDirectives = {
    scriptSrc: scriptSrc.concat('connect.facebook.net'),
    imgSrc: imgSrc.concat(['*.squarespace.com', 'www.facebook.com', 'www.google.fi']),
    frameSrc: frameSrc.concat(['www.facebook.com', 'connect.facebook.net']),
    formAction: formAction.concat(['www.facebook.com', 'connect.facebook.net']),
  };

  const hotjar = '*.hotjar.com';
  const directive = name => customDirectives[name] || defaultDirectives[name] || [self];
  const hotjarDirectives = {
    imgSrc: directive('imgSrc').concat(hotjar),
    scriptSrc: directive('scriptSrc').concat(hotjar),
    connectSrc: directive('connectSrc').concat(hotjar),
    frameSrc: directive('frameSrc').concat(hotjar),
    childSrc: directive('childSrc').concat(hotjar),
    fontSrc: directive('fontSrc').concat(hotjar),
  };

  // ================ END CUSTOM CSP URLs ================ //

  const directives = Object.assign(
    {
      reportUri,
      blockAllMixedContent: enforceSsl,
    },
    defaultDirectives,
    customDirectives,
    hotjarDirectives
  );

  // See: https://helmetjs.github.io/docs/csp/
  return helmet.contentSecurityPolicy({
    directives,
    reportOnly,
  });
};
