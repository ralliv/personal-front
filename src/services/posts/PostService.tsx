import { Post } from '../../types'

interface MarkdownAttributes {
  title: string
  date: string
  author: string
  excerpt: string
  imageUrl?: string
}

interface MarkdownModule {
  attributes: MarkdownAttributes
  html: string
}

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = []
  
  try {
    const modules = import.meta.glob<MarkdownModule>('/src/posts/*.md', { 
      eager: true 
    })
    
    console.log('Módulos encontrados:', Object.keys(modules))
    
    for (const path in modules) {
      try {
        const module = modules[path]
        console.log('Procesando módulo:', module)
        
        const slug = path.split('/').pop()?.replace('.md', '') || ''
        
        posts.push({
          id: slug,
          title: module.attributes.title,
          content: module.html,
          excerpt: module.attributes.excerpt,
          date: module.attributes.date,
          author: module.attributes.author,
          imageUrl: module.attributes.imageUrl,
        })
      } catch (error) {
        console.error(`Error procesando archivo ${path}:`, error)
      }
    }
    
    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error cargando posts:', error)
    return []
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const modules = import.meta.glob<MarkdownModule>('/src/posts/*.md', {
      eager: true
    })
    const path = `/src/posts/${id}.md`
    
    if (!(path in modules)) {
      console.log('Archivo no encontrado')
      console.log('Archivos disponibles:', Object.keys(modules))
      return null
    }
    
    const module = modules[path]
    
    return {
      id,
      title: module.attributes.title,
      content: module.html,
      excerpt: module.attributes.excerpt,
      date: module.attributes.date,
      author: module.attributes.author,
      imageUrl: module.attributes.imageUrl,
    }
  } catch (error) {
    console.error('Error cargando post:', error)
    return null
  }
}