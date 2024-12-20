import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../../types'
import Layout from '../common/Layout'

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando obtener datos de una API
    const fetchPost = () => {
      // Datos de ejemplo - reemplazar con tu API real
      const mockPost: Post = {
        id: Number(id),
        title: "Introducción a React y TypeScript",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        `,
        excerpt: "Una guía completa para comenzar con React y TypeScript en 2024.",
        date: "2024-03-18",
        author: "Juan Pérez",
        imageUrl: "https://picsum.photos/800/400"
      };

      setPost(mockPost);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!post) {
    return <div>Post no encontrado</div>;
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
            <span>Por {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <div className="post-detail-body">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PostDetail;