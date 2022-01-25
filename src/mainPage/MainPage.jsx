import React, {useEffect, useState} from "react";
import TableList from "../components/TableList";
import PostForm from "../components/PostForm";
import FilterAndSearch from "../components/FilterAndSearch";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/useCreatePost";
import PostServiceApi from "../components/API/PostServiceApi";
import MyLoader from "../components/UI/loader/MyLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../components/utils/pages";
import {getPageArray} from "../components/utils/utils";
import NavigationPage from "../navigationPage/NavigationPage";

function MainPage() {
  const [posts, setPosts] = useState([])
  const [data, setData] = useState({filter: "", query: ""})
  const [modal, setModal] = useState(false)


  const [totalPage, setTotalPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const pageArray = getPageArray(totalPage)

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostServiceApi.getAllPosts(limit, page)
    setPosts(response.data)

    const totalCount = response.headers["x-total-count"]
    setTotalPage(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const sortedPosts = usePosts(posts, data.filter, data.query)
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (givenPost) => {
    setPosts(posts.filter(post => post.id !== givenPost.id))
  }

  return (
    <>
      <NavigationPage/>
      <div style={{backgroundColor:"rgba(53, 133, 139, 0.3)"}} className="app w-75 mx-auto">
        {/*<button className="btn btn-info" onClick={fetchPosts}>Get Posts</button>*/}
        <MyButton
          className="btn btn-primary w-100 my-3"
          onClick={(e) => setModal(!modal)}>
          Add Post
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm createPost={createPost} modal={modal}/>
        </MyModal>

        <FilterAndSearch data={data} setData={setData}/>

        {/* Agar postError true bolsa paragrafni qaytaradi */}
        {postError && <p>Error {JSON.stringify(postError)} /n serverga zaprosda xatolik bo'ldi</p>}

        {isLoading
          ? <MyLoader/>
          : <TableList posts={sortedPosts} title="Post list" removePost={removePost}/>
        }

        <div className="d-flex justify-content-between">
          {pageArray.map((pageNum) => {
            return (
              <MyButton
                key={pageNum}
                onClick={() => {
                  setPage(pageNum)
                }}
                className={page === pageNum ? "btn btn-primary" : "btn btn-outline-primary"}>
                {pageNum}
              </MyButton>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default MainPage;
