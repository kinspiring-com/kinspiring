import React from 'react';
import { object, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { ExternalLink } from '../../components';
// import exampleBlogData from './kinspiring-example-blog-posts.json';

import css from './KinspiringSectionBlog.css';

const BLOG_URL = 'https://lifeatkinspiring.com';

// Custom month formatting as in the Squarespace blog
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const BlogItem = props => {
  const { item } = props;
  const { title, publishOn, assetUrl, fullUrl } = item;

  const postUrl = `${BLOG_URL}${fullUrl}`;
  const publishDate = publishOn ? new Date(item.publishOn) : null;
  const imageMaybe = assetUrl ? (
    <ExternalLink href={postUrl}>
      <img className={css.image} src={`${assetUrl}?format=768w`} alt={title} />
    </ExternalLink>
  ) : (
    <div className={css.imageMissing} />
  );
  const publishDateMaybe = publishDate ? (
    <time className={css.publishDate} dateTime={publishDate.toISOString()}>
      <div className={css.date}>
        <div className={css.month}>{months[publishDate.getMonth()]}</div>
        <div className={css.day}>{publishDate.getDate()}</div>
      </div>
    </time>
  ) : null;

  return (
    <article>
      {imageMaybe}
      {publishDateMaybe}
      <ExternalLink className={css.titleLink} href={postUrl}>
        <h3 className={css.title}>{title}</h3>
      </ExternalLink>
    </article>
  );
};

BlogItem.propTypes = {
  item: shape({
    title: string.isRequired,
    publishOn: number,
    assetUrl: string,
    fullUrl: string.isRequired,
  }).isRequired,
};

const KinspiringSectionBlogComponent = props => {
  const { blogData } = props;
  const { items = [] } = blogData;
  return (
    <div>
      <ExternalLink href={BLOG_URL} className={css.headingLink}>
        <h2 className={css.heading}>
          <FormattedMessage id="KinspiringSectionBlog.heading" />
        </h2>
      </ExternalLink>
      <ul className={css.items}>
        {items.map(item => (
          <li className={css.item} key={item.id}>
            <BlogItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

KinspiringSectionBlogComponent.defaultProps = {
  blogData: {},
};

KinspiringSectionBlogComponent.propTypes = {
  blogData: object,
};

const mapStateToProps = state => {
  const blogData = state.marketplaceData.kinspiringBlogData || {};

  // NOTE: to show blog posts in dev mode:
  //
  // - uncomment the exampleBlogData import
  // - comment the blogData init above
  // - uncomment the line below
  //
  // const blogData = state.marketplaceData.kinspiringBlogData || exampleBlogData;

  return { blogData };
};

const KinspiringSectionBlog = connect(mapStateToProps)(KinspiringSectionBlogComponent);

export default KinspiringSectionBlog;
