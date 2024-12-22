interface HomeContent {
  title: string;
  content: string;
}

export async function getHomeContent(): Promise<HomeContent> {
  try {
    const content = await import('../content/home.md')
    return {
      title: content.attributes.title,
      content: content.html
    }
  } catch (error) {
    console.error('Error loading home content:', error)
    return {
      title: 'Welcome to my blog',
      content: '<p> Currently loading content...</p>'
    }
  }
}
