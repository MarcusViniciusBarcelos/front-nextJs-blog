import Head from 'next/head';
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostsAndSettings,
} from '../api/load-posts';
import { PostsTemplate } from '../templates/PostsTemplate';

export default function Index({
  setting,
  posts,
  variables,
}: StrapiPostsAndSettings) {
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
        variables={variables}
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
        variables: {
          ...defaultLoadPostsVariables,
        },
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    return {
      props: { setting: {}, posts: {} },
    };
  }
}
