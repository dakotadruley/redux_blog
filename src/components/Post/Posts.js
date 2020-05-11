import React from 'react';
import Post from './Post.js';
import { useSelector } from 'react-redux';
import { blogs } from '../../data/seedBlogs.js';

const Posts = () => {
  const posts = useSelector(blogs);

  const postElements = posts.map(post => (
    <Post key={post.post} {...post} />
  ));

  return (
    <dl>
      {postElements}
    </dl>
  );
};

export default Posts;