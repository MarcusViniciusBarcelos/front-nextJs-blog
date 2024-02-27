import Head from 'next/head';
import { StrapiPostsAndSettings, loadPosts } from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function CategoryPage({
  posts,
  setting,
}: StrapiPostsAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const CategoryName = posts.data[0].attributes.categories.data.filter(
    (category) => category.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>
          Category: {CategoryName} - {setting.data.attributes.blogName}
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
  try {
    const data: StrapiPostsAndSettings = await loadPosts({
      categorySlug: ctx.params.slug as string,
    });
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
