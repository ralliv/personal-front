import { useNavigate } from 'react-router-dom'
import { Post } from '../../types'

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  return (
    <article className="post-card">
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="post-card-image"
        />
      )}
      <div className="post-card-content">
        <h2 className="post-card-title">{post.title}</h2>
        <div className="post-card-meta">
          <span>By {post.author}</span>
          <span> • </span>
          <span>{post.date}</span>
        </div>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <button 
          onClick={() => navigate(`/post/${post.id}`)}
          className="read-more"
        >
          Read more
        </button>
      </div>
    </article>
  );
};

export default PostCard;