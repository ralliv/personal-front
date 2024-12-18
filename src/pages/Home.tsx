import Layout from '../components/common/Layout'
import PostList from '../components/blog/PostList'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <header className="hero">
          <h1>Mi Blog Personal</h1>
          <p>Bienvenidos a mi espacio personal donde comparto mis pensamientos</p>
        </header>
        <PostList />
      </div>
    </Layout>
  );
};

export default Home;