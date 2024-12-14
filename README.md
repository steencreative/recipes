# Astro Zen Blog

A minimal, responsive, and SEO-friendly blog template built with Astro. Features clean design, dark mode support, and markdown-based content management.

live demo: [Yujian's blog](https://blog.larryxue.dev/)

If you find this project helpful, please consider giving it a star ⭐️.

[中文Readme](./docs/README_CN.md)

## Features

- 📝 Markdown/MDX for content authoring
- 🎨 Clean and minimalist design
- 🏷️ Tag-based organization
- 🌓 Dark mode support
- 🔍 SEO optimized
- 📱 Fully responsive
- 🔗 Social media integration
- 📰 RSS feed support
- ⚡ Fast performance

![lighthouse score](https://github.com/larry-xue/larry-xue/blob/master/assets/lighthouse.gif)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/larry-xue/astro-zen-blog.git
   cd astro-zen-blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Configuration

### Site Settings

1. Open `src/config.ts` and customize your site settings:

```typescript
export const siteConfig: SiteConfig = {
  site: "https://example.com/", // your site URL
  title: "Your Blog",
  slogan: "Exploring the World and Me",
  description: "Write a description here",
  social: {
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username",
    email: "your@email.com",
    rss: true,
  },
  homepage: {
    maxPosts: 5, // Maximum number of posts to display
    tags: [], // Only display posts with these tags
    excludeTags: [], // Exclude posts with these tags
  }
};
```

### HomePage Posts Filter

If you want more customization in homepage posts. You can customize the posts displayed by writing a custom filter with updating the `filterPublishedPosts` function in `src/utils/posts.ts`.:

### Theme

Update primary and secondary colors in `tailwind.config.js`:

## Writing Content

1. Create new blog posts in the `src/content/blog/` directory
2. Use the following frontmatter template:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: YYYY-MM-DD
tags: ["tag1", "tag2"]
image: "cover image URL"
---

Your content here...
```

Of course, you can customize the metadata as needed in `src/content/config.ts`.

## Build and Deploy

1. Build your site:

   ```bash
   npm run build
   ```

2. Deploy options:

   - **Cloudflare Pages**: [Deploy to Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#deploy-with-cloudflare-pages)

## Project Structure

```
astro-zen-blog/
├── src/
│   ├── content/
│   │   └── blog/    # Blog posts
│   ├── layouts/     # Page layouts
│   ├── components/  # UI components
│   └── config.ts    # Site configuration
├── public/          # Static assets
└── astro.config.mjs # Astro configuration
```

## Features Roadmap

- [ ] Search functionality
- [ ] Commenting Integration
- [ ] ...and more

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
