import React from 'react';
import MyButton from "./UI/button/MyButton";
import s from "./TableItem.module.css"

const TableItem = ({removePost, ...props}) => {
  return (
    <>
      <tr className={s.post}>
        <td>{props.post.id}</td>
        <td style={{fontWeight: "600"}}>{props.post.title}</td>
        <td>{props.post.body}</td>
        <td>
          <MyButton
            className="btn btn-danger w-100 my-3"
            onClick={() => {
            const res = window.confirm("Postni rostdan ham o'chirishni hohlaysanmi?")
            if(res) {
              removePost(props.post)
            }
          }}>
            Delete
          </MyButton>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
