import { PostProps } from '.';
import { data } from '../../api/dados.json';

const postData = data.posts.data[1].attributes;

const mockPostData: PostProps = {
  id: data.posts.data[0].id,
  title: postData.title,
  excerpt: postData.excerpt,
  cover: {
    id: postData.cover.data.id,
    alternativeText: postData.cover.data.attributes.alternativeText,
    url: postData.cover.data.attributes.url,
  },
  content: postData.content,
  createdAt: data.posts.data[0].createdAt,
  author: {
    id: postData.author.data.id,
    displayName: postData.author.data.attributes.displayName,
    slug: postData.author.data.attributes.slug,
  },
  categories: [
    {
      id: postData.categories.data[0].id,
      displayName: postData.categories.data[0].attributes.displayName,
      slug: postData.categories.data[0].attributes.slug,
    },
  ],
};

// const mockPostData: PostProps = {
//   id: '1',
//   title:
//     'Conheça o DALL-E, inteligência artificial que cria qualquer imagem a partir de uma descrição de texto',
//   excerpt:
//     'Novas tecnologias que misturam linguagem e imagens poderiam servir a artistas gráficos. Preocupação é que acelere também campanhas de desinformação',
//   cover: {
//     id: '1',
//     alternativeText: 'Texto alternativo da capa',
//     url: 'https://s2-oglobo.glbimg.com/CvRnMai0Um4synVbwseVuxGgoxg=/0x0:1024x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/B/c/E2AX3uSWyBqSzncbwx5A/3.glbimg.com-v1-auth-0ae9f161c1ff459593599b7ffa1a1292-images-escenic-2022-4-13-19-1649888639951.jpg',
//   },
//   content:
//     'SÃO FRANCISCO - No OpenAI, um dos laboratórios de Inteligência Artificial mais ambiciosos do mundo, os pesquisadores estão desenvolvendo tecnologia que permite criar imagens digitais simplesmente descrevendo o que você deseja ver. A OpenAI, apoiada por US$ 1 bilhão em financiamento da Microsoft, ainda não está compartilhando a tecnologia com o público em geral. Mas, recentemente, Alex Nichol, um dos pesquisadores por trás do sistema, demonstrou como ele funciona.Nichol pediu ao sistema “um bule em forma de abacate”, digitando as palavras em uma tela de computador praticamente vazia. Ele criou 10 imagens distintas de um bule de abacate verde-escuro, algumas com caroço e outras sem.',
//   author: {
//     id: '1',
//     displayName: 'Cade Metz',
//     slug: 'autor-do-post',
//   },
//   categories: [
//     {
//       id: '1',
//       displayName: 'Categoria do Post',
//       slug: 'categoria-do-post',
//     },
//   ],
//   createdAt: '2022-02-18',
// };

export default mockPostData;
