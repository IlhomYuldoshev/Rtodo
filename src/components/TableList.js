import React from 'react';
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import "../style/styles.css"

const TableList = ({posts, title, removePost}) => {
  if(!posts.length) {
    return (
      <h4 className="text-center">Not found</h4>
    )
  }

  return (
    <>
      <h3 className="text-center">{title || "default list name"}</h3>
      <table className="table table-stripped">
        <TableHeader/>
        <tbody>
          {posts.map((post,index) => (
            <TableItem removePost={removePost} number={index + 1} post={post} key={post.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
