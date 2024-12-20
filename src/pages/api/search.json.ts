import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  
  const searchData = await Promise.all(
    posts.map(async (post) => {
      // only include published posts
      if (post.data.draft) {
        return null;
      }

      return {
        title: post.data.title,
        description: post.data.description,
        tags: post.data.tags,
        slug: post.slug,
        // add content to search index
        content: post.body,
      };
    })
  );

  // filter out null values
  const filteredData = searchData.filter(Boolean);

  return new Response(JSON.stringify(filteredData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
