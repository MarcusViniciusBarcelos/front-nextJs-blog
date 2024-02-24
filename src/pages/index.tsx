import Head from 'next/head';
import { loadPosts, StrapiPostsAndSettings } from '../api/load-posts';
import { PostsTemplate } from '../templates/PostsTemplate';

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
      {console.log(setting.data)}
      <PostsTemplate posts={posts.data} settings={setting.data} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const data: StrapiPostsAndSettings = await loadPosts();
    console.log(data);
    return {
      props: { setting: data.setting, posts: data.posts },
    };
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    return {
      props: { setting: {}, posts: {} },
    };
  }
}
