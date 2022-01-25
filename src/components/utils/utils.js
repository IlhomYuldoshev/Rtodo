function shortWords (post, countWords) {
  return post.split(" ").map((item, index) => {
    if(index === 0) return item.charAt(0).toUpperCase() + item.slice(1);
    if(index < countWords) return item
  }).join(" ")
}

export function shortPosts (posts, countOfTitleWords, countOfBodyWords) {
  return posts.map(post => {
    return {
      ...post,
      title: shortWords(post.title, countOfTitleWords),
      body: shortWords(post.body, countOfBodyWords)
    }
  })
}

export function getPageArray (totalPage) {
  return new Array(totalPage).fill('').map((_, index) => index + 1)
}
