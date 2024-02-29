import Head from 'next/head';
import {
  StrapiPostsAndSettings,
  defaultLoadPostsVariables,
  loadPosts,
} from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function TagPage({
  posts,
  setting,
  variables,
}: StrapiPostsAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const tagName = posts.data[0].attributes.tags.data.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.data.attributes.blogName}
        </title>
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const variables = {
    tagSlug: ctx.params.slug as string,
  };
  try {
    const data: StrapiPostsAndSettings = await loadPosts(variables);
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
          ...variables,
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
