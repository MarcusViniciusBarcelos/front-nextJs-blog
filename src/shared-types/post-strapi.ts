import { Author } from './author';
import { Category } from './category';
import { StrapiImage } from './strapi-image';
import { PostTag } from './tag';

export type PostStrapi = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    allowComments: boolean;
    createdAt: string;
    cover: {
      data: StrapiImage;
    };
    categories: {
      data: Category[];
    };
    tags: {
      data: PostTag[];
    };
    author: {
      data: Author;
    };
  };
};
