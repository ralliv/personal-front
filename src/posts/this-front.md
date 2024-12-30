---
title: This blog app explained 
date: '2024-12-26'
author: Adrián Villar
excerpt: This blog frontend app explained
imageUrl: https://picsum.photos/id/137/800/400
---

## Idea

At my daily work as a programmer I write some docs and notes in order to retain ideas and knowledge. I tought that some of my notes would be helpfull for folks like me and usefull to explain my work to others.

The point was to create something that does't take time to maintain. Therefore, with this code, I only need to write my posts at src/posts using Markdown format and It will be automatically deployed at my personal webpage [avillar.dev](https://avillar.dev)

This blog is a React-based frontend application that I built to share my thoughts, projects, and technical insights. Let me walk you through its key components and architecture.

## Tech Stack
- **React**: The core framework, providing a component-based architecture
- **TypeScript**: For type safety and better development experience
- **Markdown**: For writing blog posts in a developer-friendly way
- **GitHub Actions**: For automated deployment

## Key Features

### Content Management
The blog uses a simple but effective content management approach:
- Blog posts are written in Markdown files with YAML frontmatter
- Each post contains metadata (title, date, author, excerpt, imageUrl)
- Content is loaded dynamically using TypeScript services

### Component Structure
The application is organized into reusable components:
- `Layout`: Provides consistent page structure
- `PostList`: Displays a grid of blog post previews
- `PostCard`: Shows a simple card with short info about a post
- `PostDetail`: Displays post fully explained
- Common components for UI elements

### Deployment Pipeline
I've implemented a robust deployment workflow:
1. Code is pushed to the main branch
2. GitHub Actions triggers the build process
3. Built files are securely transferred to my server
4. Nginx container is updated with new content
5. Automatic backup of previous versions

### Development Practices
- Clean code architecture
- Type safety with TypeScript
- Component reusability
- Automated deployment
- Version control with Git

## Future Improvements
I plan to enhance the blog with:
- Search functionality
- Categories and tags
- Dark mode support
- Comments section
- Performance optimizations

This project serves both as a platform for sharing knowledge and as a practical example of modern web development practices.

## You can check github repo [here](https://github.com/ralliv/personal-front)!