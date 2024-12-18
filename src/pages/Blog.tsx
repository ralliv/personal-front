import Layout from '../components/common/Layout'
import PostList from '../components/blog/PostList'

const Blog = () => {
  return (
    <Layout>
      <div className="blog">
        <h1>Blog</h1>
        <PostList />
      </div>
    </Layout>
  );
};

export default Blog;
