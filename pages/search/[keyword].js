import {useRouter} from 'next/router';

const Search = () => {

  const router = useRouter();
  console.log(router)

  const keyword = router.query.keyword;

  return (
    <div>{keyword}</div>
  )
}

export default Search;