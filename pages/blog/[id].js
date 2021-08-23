import {useRouter} from 'next/router';

const Blog = () => {

  const router = useRouter();
  const id  = router.query.id;

  return (
    <div>{id}</div>
  )
}

export default Blog;
