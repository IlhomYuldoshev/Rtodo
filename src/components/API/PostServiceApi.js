import axios from "axios";

class PostServiceApi {
  static async getAllPosts (limit = 10, page = 1) {
    const res = await axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page
      }
    })
    return res
  }
}

export default PostServiceApi
