import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const FilterAndSearch = ({data, setData}) => {
  return (
    <>
      <div className="d-flex justify-content-between gap-1">
        <MyInput
          value={data.query}
          className="form-control"
          type="search"
          placeholder="Search by title..."
          onChange={(e) => {
            setData({...data, query: e.target.value})
          }}
        />
        <MySelect
          value={data.filter}
          defaultValue="val"
          onChange={(e) => {
            setData({...data, filter: e.target.value}
            )
            return e.target.value
          }}
          options={[
            {value: "title", name: "Title"},
            {value: "body", name: "Body"}
          ]}
        />
      </div>
    </>
  );
};

export default FilterAndSearch;
