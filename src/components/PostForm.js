import React, {useMemo, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({createPost, modal}) => {
  const [post, setPost] = useState({title: "", body: ""})
  const [err, setErr] = useState(false)

  useMemo(() => {
    if(!modal) {
      setErr(false)
      setPost({title: "", body: ""})
    }
  }, [modal])

  const addPost = (e) => {
    e.preventDefault()
    if (post.title !== "" && post.body !== "") {
      const newPost = {...post, id: Date.now()}
      createPost(newPost)
      setPost({title: "", body: ""})
      setErr(false)
    } else {
      console.error("e formani narmalniy to'ldire pi*dyuk")
      setErr(true)
    }
  }

  return (
    <div>
      <form>
        <h4 className="text-center">Create your first post</h4>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={e => setPost({...post, title: e.target.value})}
          value={post.title}
        />
        <MyInput
          type="text"
          className="form-control my-3"
          placeholder="Enter your favourite programming language"
          onChange={e => setPost({...post, body: e.target.value})}
          value={post.body}
        />
        <MyButton onClick={addPost}>
          Add post
        </MyButton>
        {err
          ? <p className="fs-6 font-monospace text-danger text-center">
              "formani to'ldir!"
            </p>
          : ""}
      </form>
    </div>
  );
};

export default PostForm;
