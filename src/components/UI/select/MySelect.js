import React from 'react';

const MySelect = ({options, value, ...props}) => {
  return (
    <>
      <select
        className="form-select w-50"
        {...props}
      >
        <option disabled value="val">Sorted by</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
          )
        )}
      </select>
    </>
  );
};

export default MySelect;
