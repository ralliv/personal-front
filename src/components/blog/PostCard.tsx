import { useNavigate } from 'react-router-dom'
import { Post } from '../../types'

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <article className="post-card">
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="post-image" />
      )}
      <div className="post-content">
        <h2>{post.title}</h2>
        <p className="post-meta">
          Por {post.author} • {post.date}
        </p>
        <p className="post-excerpt">{post.excerpt}</p>
        <button onClick={handleReadMore} className="read-more">
          Leer más
        </button>
      </div>
    </article>
  );
};

export default PostCard;