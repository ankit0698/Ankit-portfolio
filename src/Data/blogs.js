const blogModules = import.meta.glob("./blogs/*.json", {
  eager: true,
  import: "default",
});

export const blogPosts = Object.values(blogModules)
  .map((post) => ({
    ...post,
    path: `/blog/${post.slug}`,
  }))
  .sort((firstPost, secondPost) => new Date(secondPost.date) - new Date(firstPost.date));

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};
