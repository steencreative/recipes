import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://steencreative.github.io/recipes/", // your site url
  title: "Recipe Box",
  slogan: "My digital recipe box",
  description: "Just recipes.  No travel diary.  No photos.  Just recipes.",
  social: {
    github: "https://github.com/steencreative", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/david-s-02094421/", // leave empty if you don't want to show the linkedin
    email: "work011235@gmail.com", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
