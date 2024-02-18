import { ArticleHeaderProps } from '.';

// Mock dos dados fictícios
const mockArticleHeaderData: ArticleHeaderProps = {
  id: '1',
  title: 'Título do Artigo',
  excerpt: 'Excerto do artigo...',
  cover: {
    id: '1',
    alternativeText: 'Texto alternativo da capa',
    url: 'https://napratica.org.br/wp-content/uploads/2018/08/tecnica-feynman.jpg',
  },
  author: {
    id: '1',
    displayName: 'Autor do Artigo',
    slug: 'autor-do-artigo',
  },
  categories: [
    {
      id: '1',
      displayName: 'Categoria do Artigo',
      slug: 'categoria-do-artigo',
    },
  ],
  createdAt: '2022-02-18',
};

export default mockArticleHeaderData;
