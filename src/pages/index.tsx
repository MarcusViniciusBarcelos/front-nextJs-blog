import Head from 'next/head';
import { loadPosts, StrapiPostsAndSettings } from '../api/load-posts';
import { PostsTemplate } from '../templates/PostsTemplate';
import { ArticleMeta } from '../components/ArticleMeta';

export default function Index({ setting, posts }: StrapiPostsAndSettings) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate
        posts={posts.data.map((post) => ({
          id: post.id,
          title: post.attributes.title,
          excerpt: post.attributes.excerpt,
          createdAt: post.attributes.createdAt,
          cover: post.attributes.cover.data.attributes.url,
          slug: post.attributes.slug,
          categories: post.attributes.categories.data.map((category) => ({
            id: category.id,
            attributes: {
              displayName: category.attributes.displayName,
              slug: category.attributes.slug,
            },
          })),
        }))}
        settings={setting.data}
      />
      <ArticleMeta
        createdAt={posts.data[0].attributes.createdAt}
        author={posts.data[0].attributes.author.data}
        categories={posts.data[0].attributes.categories.data}
      />
    </>
  );
}

export async function getStaticProps() {
  try {
    const data: StrapiPostsAndSettings = await loadPosts();
    if (!data || !data.posts || !data.setting) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        setting: data.setting,
        posts: data.posts,
      },
      revalidate: 24 * 60 * 60,
    };
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    return {
      props: { setting: {}, posts: {} },
    };
  }
}
