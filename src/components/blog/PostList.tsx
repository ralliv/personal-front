import { useState, useEffect } from 'react'
import PostCard from './PostCard'
import { Post } from '../../types'

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulando datos de una API
    const mockPosts: Post[] = [
      {
        id: 1,
        title: "Introducción a React y TypeScript",
        content: "Lorem ipsum dolor sit amet...",
        excerpt: "Una guía completa para comenzar con React y TypeScript en 2024.",
        date: "2024-03-18",
        author: "Juan Pérez",
        imageUrl: "https://picsum.photos/800/400" 
      },
      {
        id: 2,
        title: "Mejores Prácticas en Desarrollo Web",
        content: "Lorem ipsum dolor sit amet...",
        excerpt: "Descubre las mejores prácticas actuales en el desarrollo web moderno.",
        date: "2024-03-17",
        author: "María García",
        imageUrl: "https://picsum.photos/800/401"
      },
      {
        id: 3,
        title: "Optimización de la Experiencia del Usuario",
        content: "Lorem ipsum dolor sit amet...",
        excerpt: "Aprende a mejorar la experiencia del usuario en tu aplicación web.",
        date: "2024-03-16",
        author: "Carlos López",
        imageUrl: "https://picsum.photos/800/402"
      }
    ];

    setPosts(mockPosts);
  }, []);

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>Cargando posts...</p>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
