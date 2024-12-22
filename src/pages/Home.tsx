import { useState, useEffect } from 'react'
import Layout from '../components/common/Layout'
import { getHomeContent } from '../services/HomeService'
import PostList from '../components/blog/PostList'

interface HomeContent {
  title: string;
  content: string;
}

const Home = () => {
  const [content, setContent] = useState<HomeContent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const homeContent = await getHomeContent()
        setContent({ ...homeContent })
      } catch (error) {
        console.error('Error loading home content:', error)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  return (
    <Layout>
      <div className="home-container">
        {loading ? (
          <div>Loading...</div>
        ) : content ? (
          <>

            <section className="home-hero">
              <h1>{content.title}</h1>
              <div 
                className="home-content"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            </section>
            
            <section className="latest-posts">
              <h2>Latest Posts</h2>
              <PostList />
            </section>
          </>
        ) : (
          <div>Error loading content</div>
        )}
      </div>
    </Layout>
  )
}

export default Home