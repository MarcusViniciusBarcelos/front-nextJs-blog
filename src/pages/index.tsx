import { useEffect } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts().then((r) => console.log(r.setting, r.posts));
  }, []);

  return <h1>oi</h1>;
}
