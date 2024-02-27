import Head from 'next/head';
import {
  StrapiPostsAndSettings,
  defaultLoadPostsVariables,
  loadPosts,
} from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({
  posts,
  setting,
  variables,
}: StrapiPostsAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.data.attributes.blogName}
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

export async function getServerSideProps(ctx) {
  const query = ctx.query.q || '';
  if (!query) {
    return {
      notFound: true,
    };
  }
  const variables = { postSearch: query as string };
  try {
    const data: StrapiPostsAndSettings = await loadPosts(variables);
    if (!data || !data.posts) {
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
    };
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    return {
      props: { setting: {}, posts: {} },
    };
  }
}
