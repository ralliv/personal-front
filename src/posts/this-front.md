---
title: This blog app explained 
date: '2024-12-26'
author: Adrián Villar
excerpt: This blog frontend app explained
imageUrl: https://picsum.photos/id/137/800/400
---

## From Notes to Blog: Sharing the Knowledge Love 💡

As a programmer, I'm constantly jotting down ideas and notes to keep my brain from exploding with awesome code 🤯

But hey, some of these gems might be useful to others, right? 🤔 That's why I decided to create [this blog](https://avillar.dev) – a place to share my projects, tech tidbits, and maybe even spark some inspiration. 😎

The coolest part? This whole thing runs on autopilot! 🤖

This blog is a React-based frontend application that I built to share my thoughts, projects, and technical insights. Let me walk you through its key components and architecture.

## Write Once, Deploy Everywhere 🌎
Here's the secret sauce: I simply write my blog posts in Markdown format (think fancy code for writing) at a special place called `src/posts`. Then, poof!  ✨ They magically appear on my website, [avillar.dev](https://avillar.dev) 🪄

## Techie Talk: The Superpowers Behind the Scenes 💪

Let's peek under the hood and see what makes this blog tick:

- **React**: The core framework, providing a component-based architecture
- **TypeScript**: For type safety and better development experience
- **Markdown**: My secret weapon for writing clear and concise blog posts. ✍️
- **GitHub Actions**:  My trusty sidekick that automates the deployment process, so I don't have to do any manual lifting. 🤖

## Exploring the Blog's Features 🔍

This blog isn't just a pretty face. It's packed with features to make your reading experience awesome:

### Content Management ⏳
The blog uses a simple but effective content management approach:
- Blog posts are written in Markdown files with YAML frontmatter
- Each post contains metadata (title, date, author, excerpt, imageUrl)
- Content is loaded dynamically using TypeScript services

### Component Structure 🤓
The application is organized into reusable components:
- `Layout`: Provides consistent page structure
- `PostList`: Displays a grid of blog post previews
- `PostCard`: Shows a simple card with short info about a post
- `PostDetail`: Displays post fully explained
- Common components for UI elements

### Deployment Pipeline 🛫
I've implemented a robust deployment workflow:
1. Code is pushed to the main branch
2. GitHub Actions triggers the build process
3. Built files are securely transferred to my server
4. Nginx container is updated with new content
5. Automatic backup of previous versions

### Development Practices 📝
- Clean code architecture
- Type safety with TypeScript
- Component reusability
- Automated deployment
- Version control with Git

This blog is more than just a platform for sharing knowledge. It's a quick example to the power of modern web development practices.  💻

And guess what? You can explore the code behind the scenes yourself! Check out the GitHub repo right [here](https://github.com/ralliv/personal-front)!!  🔍