import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, body }) => (
  <>
    <dt>{title}</dt>
    <dd>{body}</dd>
  </>
);
Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
export default Post;