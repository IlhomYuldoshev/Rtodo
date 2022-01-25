import {useMemo} from "react";
import {shortPosts} from "../components/utils/utils";

export const userSortPosts = (posts, sort) => {
  const minPosts = shortPosts(posts, 3, 12)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...minPosts].sort((a, b) => {
        return a[sort].localeCompare(b[sort])
      })
    }
    return minPosts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = userSortPosts(posts, sort)

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return sortedAndSearchPosts
}
