import Head from 'next/head';
import { StrapiPostsAndSettings, loadPosts } from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostTemplate } from '../../templates/PostTemplate';

export default function PostPage({ posts, setting }: StrapiPostsAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const postId = posts.data[0];
  const post = posts.data[0].attributes;
  return (
    <>
      <Head>
        <title>{posts.data[0].attributes.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate
        post={{
          id: postId.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          createdAt: post.createdAt,
          allowComments: post.allowComments,
          cover: {
            id: post.cover.data.id,
            attributes: {
              alternativeText: post.cover.data.attributes.alternativeText,
              url: post.cover.data.attributes.url,
            },
          },
          author: {
            id: post.author.data.id,
            attributes: {
              displayName: post.author.data.attributes.displayName,
              slug: post.author.data.attributes.slug,
            },
          },
          categories: post.categories.data.map((category) => ({
            id: category.id,
            attributes: {
              displayName: category.attributes.displayName,
              slug: category.attributes.slug,
            },
          })),
          tags: post.tags.data,
        }}
        settings={setting.data}
      />
    </>
  );
}

export async function getStaticPaths() {
  try {
    const data: StrapiPostsAndSettings | null = await loadPosts();
    let paths = [];

    if (!data || !data.posts || !data.setting) {
      return {
        paths: [],
        fallback: true,
      };
    }

    paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps(ctx) {
  try {
    const data: StrapiPostsAndSettings = await loadPosts({
      postSlug: ctx.params.slug as string,
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
      revalidate: 60,
    };
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    return {
      props: { setting: {}, posts: {} },
    };
  }
}
