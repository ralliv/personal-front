import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Post } from '../../types'
import Layout from '../common/Layout'
import { getPostById } from '../../services/posts/PostService'

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) {
        setError('ID not provided');
        setLoading(false);
        return;
      }
      
      try {
        console.log('Loading post:', id);
        const postData = await getPostById(id);
        
        if (!postData) {
          setError('Post not found');
          return;
        }
        
        setPost(postData);
      } catch (error) {
        console.error('Error loading post:', error);
        setError('Error loading post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <Layout>
        <div className="error-message">
          <h2>Error: {error}</h2>
          <button onClick={() => navigate('/blog')}>Go to blog</button>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="not-found">
          <h2>Post no encontrado</h2>
          <button onClick={() => navigate('/blog')}>Go to blog</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="post-detail">
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="post-detail-image" 
          />
        )}
        <div className="post-detail-content">
          <h1>{post.title}</h1>
          <div className="post-detail-meta">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <div 
            className="post-detail-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default PostDetail;