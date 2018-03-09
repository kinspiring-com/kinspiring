const axios = require('axios');
const lodash = require('lodash');
const log = require('./log');

const BLOG_JSON_URL = 'https://lifeatkinspiring.com/?format=json';

// Timeout in ms how often to refetch the blog posts
const CACHE_INVALIDATION_TIMEOUT = 60 * 60 * 1000; // 1h

let cache = {
  data: null,
  fetchedAt: null,
};

const getCachedData = () => {
  const now = Date.now();
  const hasRecentData = !!(
    cache.data &&
    cache.fetchedAt &&
    now - cache.fetchedAt < CACHE_INVALIDATION_TIMEOUT
  );
  return hasRecentData ? cache.data : null;
};

const setCachedData = data => {
  cache = {
    data,
    fetchedAt: Date.now(),
  };
};

const isNonEmptyString = s => typeof s === 'string' && s.trim().length > 0;

const validateData = data => {
  return (
    data &&
    Array.isArray(data.items) &&
    data.items.every(item => {
      const { id, title, fullUrl } = item;
      return isNonEmptyString(id) && isNonEmptyString(title) && isNonEmptyString(fullUrl);
    })
  );
};

const cleanedData = data => {
  return data && Array.isArray(data.items)
    ? {
        items: lodash.take(data.items, 3).map(item => ({
          id: item.id,
          title: item.title,
          publishOn: item.publishOn,
          assetUrl: item.assetUrl,
          fullUrl: item.fullUrl,
        })),
      }
    : null;
};

exports.getBlogData = () => {
  const data = getCachedData();
  if (data) {
    return Promise.resolve(data);
  }

  const start = Date.now();
  console.log(`Fetch blog posts from ${BLOG_JSON_URL}`);
  return axios
    .get(BLOG_JSON_URL)
    .then(response => {
      console.log('Received blog posts in', Date.now() - start, 'ms');

      if (!validateData(response.data)) {
        throw new Error('Invalid Kinspiring blog data');
      }

      const data = cleanedData(response.data);
      setCachedData(data);
      return data;
    })
    .catch(e => {
      // A failing fetch should not fail the whole request, just leave
      // the blog data empty.
      log.error(e, 'kinspiring-blog-data-fetch-failed');
      return null;
    });
};
