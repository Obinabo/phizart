import React from 'react'

export const List = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          {item.h4 && <h4>{item.h4}</h4>}
          {item.list && (
            <ul>
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};
